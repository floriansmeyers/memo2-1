import React from 'react';
import { callsColumns, IReportsPageProps } from 'utils';
import { Table } from 'components';

const ReportsOutgoingPage: React.FC<IReportsPageProps> = ({ loading, tableData }) => (
  <Table key="callDuration" loading={loading} columns={callsColumns} data={tableData} />
);

export default ReportsOutgoingPage;
