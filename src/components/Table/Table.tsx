/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Table as AntdTable } from 'antd';
import { FilterValue, TablePaginationConfig, SorterResult } from 'antd/lib/table/interface';
import { IInvoice } from 'types/invoice';
import './Table.scss';

export interface ITableProps {
  columns: any;
  data: any;
  pagination?: TablePaginationConfig;
  loading?: boolean;
  rowKey?: string;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IInvoice> | SorterResult<IInvoice>[],
  ) => void;
}

const Table: React.FC<ITableProps> = ({ columns, data, pagination, loading, rowKey, onChange }) => (
  <AntdTable
    columns={columns}
    dataSource={data}
    className="main-table"
    pagination={pagination}
    onChange={onChange}
    loading={loading}
    rowKey={rowKey}
  />
);

export default Table;
