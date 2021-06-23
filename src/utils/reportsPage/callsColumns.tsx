import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { DayNightIcon } from 'components';
import { secondsToMinutesOrHours, formattedDate } from 'utils';
import { ICalls } from 'types/calls';

export const callsColumns: ColumnsType<ICalls> = [
  {
    title: 'Date',
    dataIndex: 'callDateTime',
    key: 'callDateTime',
    render: (record) => formattedDate(record).fullDate,
    sorter: {
      compare: (a: ICalls, b: ICalls) => a.callDateTime.localeCompare(b.callDateTime),
      multiple: 2,
    },
  },
  {
    title: 'Time',
    dataIndex: 'callDateTime',
    key: 'time',
    render: (record) => formattedDate(record).hourMinutes,
    sorter: {
      compare: (a: ICalls, b: ICalls) => a.callDateTime.localeCompare(b.callDateTime),
      multiple: 2,
    },
  },
  {
    title: 'Duration',
    dataIndex: 'callDuration',
    key: 'callDuration',
    render: (record) => secondsToMinutesOrHours(record, false, true, true),
    sorter: {
      compare: (a: ICalls, b: ICalls) => Number(a.callDuration) - Number(b.callDuration),
      multiple: 2,
    },
  },
  {
    title: 'Number',
    dataIndex: 'caller',
    key: 'caller',
    sorter: {
      compare: (a: ICalls, b: ICalls) => a.caller.localeCompare(b.caller),
      multiple: 2,
    },
  },
  {
    title: 'Tarif',
    dataIndex: 'dayNight',
    key: 'type',
    render: (record) => (
      <span>
        <DayNightIcon val={record} />
        {record}
      </span>
    ),
    sorter: {
      compare: (a: ICalls, b: ICalls) => a.dayNight.localeCompare(b.dayNight),
      multiple: 2,
    },
  },
];
