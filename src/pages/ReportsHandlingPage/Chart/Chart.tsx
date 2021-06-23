import React from 'react';
import { Column } from '@ant-design/charts';
import { useTranslation } from 'utils';
import { ColumnConfig } from '@ant-design/charts/es/column';
import './Chart.scss';

interface IProps {
  headerTitle: string;
  data?: { key: string; value?: number }[];
}

const Chart: React.FC<IProps> = ({ headerTitle, data }) => {
  const translate = useTranslation();

  const config: ColumnConfig = {
    data: data!,
    xField: 'key',
    yField: 'value',
    label: {
      position: 'middle',
      style: {
        fill: 'transparent',
      },
    },
  };

  return (
    <div className="chart">
      <div className="chart-header">
        <div className="chart-header__title">{translate(headerTitle)}</div>
      </div>
      <div className="chart-bars">
        <Column {...config} />
      </div>
    </div>
  );
};

export default Chart;
