import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { FileOutlined } from '@ant-design/icons';
import { TablePaginationConfig } from 'antd/lib/table';
import { SorterResult } from 'antd/es/table/interface';
import { FilterValue } from 'antd/lib/table/interface';
import { ButtonTypes, useTranslation } from 'utils';
import { Button, PageHeader, Table } from 'components';
import {
  Invoice,
  SortInput,
  SortOrder,
  useGetInvoicesQuery,
  usePayInvoiceMutation,
} from 'models/graphql';
import { IInvoice } from 'types/invoice';
import { useVisibleInvoice } from 'graphql/hooks/useVisibleInvoice';
import './InvoicesPage.scss';

const InvoicesPage: React.FC = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [payInvoice] = usePayInvoiceMutation();
  const [sort, setSort] = useState<SortInput[]>([{ field: 'invoiceNr', order: SortOrder.Desc }]);
  const translate = useTranslation();
  const { visible: showInvoices } = useVisibleInvoice();
  const {
    data: invoicesData,
    loading: invoicesLoading,
    error: invoicesError,
  } = useGetInvoicesQuery({
    variables: {
      limit: pagination.pageSize,
      skip:
        pagination.pageSize && pagination.current && pagination.pageSize * (pagination.current - 1),
      sort,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (invoicesData?.invoices && !invoicesLoading) {
      const pager: TablePaginationConfig = { ...pagination };
      pager.total = invoicesData?.invoices.count;
      setPagination(pager);
    }
  }, [invoicesData?.invoices]);

  const handlePageChange = (
    page: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IInvoice> | SorterResult<IInvoice>[],
  ): void => {
    const pager: TablePaginationConfig = { ...pagination };
    pager.current = page.current;
    setPagination(pager);

    setSort([
      {
        field: String((sorter as SorterResult<IInvoice>).field),
        order:
          String((sorter as SorterResult<IInvoice>).order) === 'descend'
            ? SortOrder.Desc
            : SortOrder.Asc,
      },
    ]);
  };

  const payOnlineInvoiceHandler = (id: number) => {
    payInvoice({ variables: { id } }).then((result) => {
      if (result?.data?.payInvoice?.redirectUrl) {
        const url = result.data.payInvoice.redirectUrl;
        const win = window.open(url, '_blank');
        if (win) {
          win.focus();
        }
      }
    });
  };

  const columns: ColumnsType<Invoice> = [
    {
      title: translate('invoiceNumber'),
      dataIndex: 'invoiceNr',
      key: 'invoiceNr',
      sorter: {
        compare: (a: Invoice, b: Invoice) => a.invoiceNr - b.invoiceNr,
        multiple: 2,
      },
    },
    {
      title: translate('Month'),
      dataIndex: 'month',
      key: 'month',
      sorter: {
        compare: (a: Invoice, b: Invoice) => a.month - b.month,
      },
    },
    {
      title: translate('Year'),
      dataIndex: 'year',
      key: 'year',
      sorter: {
        compare: (a: Invoice, b: Invoice) => a.year - b.year,
        multiple: 2,
      },
    },
    {
      title: translate('amount'),
      dataIndex: 'amount',
      key: 'amount',
      render: (_, record: Invoice) => <span>€ {record.amount}</span>,
      sorter: {
        compare: (a: Invoice, b: Invoice) => a.amount - b.amount,
        multiple: 1,
      },
    },
    {
      title: translate('status'),
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => (
        <div className="invoice-status">
          {record?.paid ? (
            <span className="invoice-status__paid">{translate('paid')}</span>
          ) : (
            <Button
              text={translate('payOnline')}
              type={ButtonTypes.White}
              onClick={() => payOnlineInvoiceHandler(record.id)}
            />
          )}
          {record.attachment && (
            <a className="invoice-download" role="button" download href={record.attachment.url}>
              <FileOutlined />
              <span className="invoice-download__txt">{translate('download')}</span>
            </a>
          )}
        </div>
      ),
    },
  ];

  if (!showInvoices) {
    return null;
  }

  return (
    <>
      <PageHeader title={translate('invoices')} />
      {invoicesError?.message && <p>{invoicesError?.message}</p>}
      <Table
        onChange={handlePageChange}
        columns={columns}
        loading={invoicesLoading}
        data={invoicesData?.invoices.items}
        pagination={pagination}
        rowKey="invoiceNr"
      />
    </>
  );
};

export default InvoicesPage;
