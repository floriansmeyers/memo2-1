import React from 'react';
import { Select } from 'antd';
import { ActionIcons } from 'components';
import { yearFilter, monthFilter } from 'graphql/cache';
import { getYearsBetween2Years } from 'utils';
import { MIN_YEAR, MONTHS } from '../../../constants';
import './ReportsActions.scss';

const { Option } = Select;

const ReportsActions: React.FC = () => {
  const onChangeYearHandler = (year: number) => {
    yearFilter(year);
  };

  const onChangeMonthHandler = (month: string) => {
    monthFilter(month);
  };

  return (
    <>
      <Select
        onChange={onChangeMonthHandler}
        defaultValue="January"
        className="reports-date-select reports-date-select--month"
      >
        {MONTHS.map((month) => (
          <Option key={month} value={month}>
            {month}
          </Option>
        ))}
      </Select>
      <Select
        onChange={onChangeYearHandler}
        defaultValue={MIN_YEAR}
        className="reports-date-select reports-date-select--year"
      >
        {getYearsBetween2Years(MIN_YEAR).map((year) => (
          <Option key={year.toString()} value={year.toString()}>
            {year}
          </Option>
        ))}
      </Select>
      <ActionIcons />
    </>
  );
};

export default ReportsActions;
