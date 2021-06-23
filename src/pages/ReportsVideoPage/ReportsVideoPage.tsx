import React, { useEffect, useState } from 'react';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { SorterResult } from 'antd/es/table/interface';
import { FilterValue } from 'antd/lib/table/interface';
import { format, getUnixTime, intervalToDuration, formatDuration } from 'date-fns';
import { useReactiveVar } from '@apollo/client';
import {
  SortInput,
  SortOrder,
  useDownloadVideoCallReportingLazyQuery,
  useVideoCallReportingQuery,
  useVideoCallsLazyQuery,
  useVideoCallsQuery,
} from 'models/graphql';
import { getOneMonthRangeInDays, useTranslation } from 'utils';
import { Table } from 'components';
import { monthFilter, yearFilter } from 'graphql/cache';
import { IInvoice } from '../../types/invoice';
import './ReportsVideoPage.scss';

interface IData {
  createdAt: string;
  duration: number;
}

const ReportsVideoPage: React.FC = () => {
  const translate = useTranslation();
  const [pagination, setPagination] = useState<TablePaginationConfig>({ current: 1, pageSize: 10 });
  const [sort, setSort] = useState<SortInput[]>([{ field: 'createdAt', order: SortOrder.Asc }]);
  const year = useReactiveVar(yearFilter);
  const month = useReactiveVar(monthFilter);
  const {
    data: reporting,
    loading: reportingLoading,
    error: reportingError,
  } = useVideoCallReportingQuery({
    variables: { filter: getOneMonthRangeInDays(month, year) },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  const { data: calls, loading: callsLoading, error: callsError } = useVideoCallsQuery({
    variables: {
      filter: getOneMonthRangeInDays(month, year),
      limit: pagination.pageSize,
      skip:
        pagination.pageSize && pagination.current && pagination.pageSize * (pagination.current - 1),
      sort,
    },
    notifyOnNetworkStatusChange: true,
  });

  const [
    loadDownload,
    { data: downloadData, error: downloadError, loading: downloadLoading },
  ] = useDownloadVideoCallReportingLazyQuery({
    variables: { filter: getOneMonthRangeInDays(month, year), sort },
    fetchPolicy: 'network-only',
  });

  const { downloadVideoCallReporting: download } = downloadData || {};

  const [
    loadAllCalls,
    { data: allCallsData, loading: allCallsLoading, error: allCallsError },
  ] = useVideoCallsLazyQuery({
    fetchPolicy: 'network-only',
  });

  const columns: ColumnsType<IData> = [
    {
      title: translate('date'),
      dataIndex: 'createdAt',
      key: 'date',
      render: (record) => format(new Date(record), 'EEEE dd MMMM yyyy'),
      sorter: (a, b) => getUnixTime(new Date(a.createdAt)) - getUnixTime(new Date(b.createdAt)),
    },
    {
      title: translate('time'),
      dataIndex: 'createdAt',
      key: 'time',
      render: (record) => format(new Date(record), 'HH:mm'),
    },
    {
      title: translate('duration'),
      dataIndex: 'duration',
      key: 'duration',
      render: (record) => formatDuration(intervalToDuration({ start: 0, end: record * 1000 })),
      sorter: (a, b) => a.duration - b.duration,
    },
  ];

  const handlePageChange = (
    page: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IInvoice> | SorterResult<IInvoice>[],
  ) => {
    const pager: TablePaginationConfig = { ...pagination };
    pager.current = page.current;
    setPagination(pager);
    setSort([
      {
        field: String((sorter as SorterResult<IInvoice>).field) || 'date',
        order:
          String((sorter as SorterResult<IInvoice>).order) === 'descend'
            ? SortOrder.Desc
            : SortOrder.Asc,
      },
    ]);
  };

  useEffect(() => {
    if (calls) {
      const pager: TablePaginationConfig = { ...pagination };
      pager.total = calls.videoCalls.count;
      setPagination(pager);
    }
  }, [calls]);

  if (reportingError) {
    return <p>{`${translate('errorOccured')} ${reportingError.message}`}</p>;
  }

  return (
    <div className="video">
      <div className="video-header">
        <div className="video_header__total">{translate('total')}</div>
        <p className="video_header__nr">
          {!reportingLoading &&
            formatDuration(
              intervalToDuration({
                start: 0,
                end: reporting?.videoCallReporting.totalDuration! * 1000,
              }),
            )}
        </p>
      </div>
      <div className="video-content">
        <Table
          columns={columns}
          pagination={{ ...pagination, showSizeChanger: false }}
          onChange={handlePageChange}
          data={calls?.videoCalls.items}
          loading={reportingLoading}
          rowKey="time"
        />
      </div>
    </div>
  );
};

export default ReportsVideoPage;
