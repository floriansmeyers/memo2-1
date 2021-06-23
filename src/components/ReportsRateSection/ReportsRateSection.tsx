import React from 'react';
import { Icon } from 'components';
import { secondsToMinutesOrHours, useTranslation } from 'utils';
import { Spin } from 'antd';
import './ReportsRateSection.scss';

interface IProps {
  dayTimeSpend: number | undefined;
  nightTimeSpend: number | undefined;
  totalTimeSpend: number | undefined;
  nrOfCallsDay: number | undefined;
  nrOfCallsNight: number | undefined;
}

const ReportsRateSection: React.FC<IProps> = ({
  dayTimeSpend,
  nightTimeSpend,
  totalTimeSpend,
  nrOfCallsDay,
  nrOfCallsNight,
}) => {
  const translate = useTranslation();

  return (
    <>
      <div className="rate-section">
        <div className="rate-section__time">
          <div className="icon-block">
            <Icon name="sun" />
            <span className="icon-block__title txt-bold">
              {translate('DAYLIGHTTariff')} ({nrOfCallsDay})
            </span>
          </div>
          <div className="rate-section__time-hours">
            {dayTimeSpend ? secondsToMinutesOrHours(dayTimeSpend) : <Spin size="small" />}
          </div>
        </div>
        <div className="rate-section__subtitle">{translate('DAYLIGHTTariffTimespan')}</div>
      </div>
      <div className="rate-section rate-section--night">
        <div className="rate-section__time">
          <div className="icon-block">
            <Icon name="moon" />
            <span className="icon-block__title txt-bold">
              {translate('NIGHTTariff')} ({nrOfCallsNight})
            </span>
          </div>
          <div className="rate-section__time-hours">
            {nightTimeSpend ? secondsToMinutesOrHours(nightTimeSpend) : <Spin size="small" />}
          </div>
        </div>
        <div className="rate-section__subtitle">{translate('NIGHTTariffTimespan')}</div>
      </div>
      <div className="rate-section rate-section--total">
        <div className="rate-section__title">
          <span className="rate-section__title-key txt-bold">
            {translate('total')} (
            {nrOfCallsDay && nrOfCallsNight ? nrOfCallsDay + nrOfCallsNight : 'No data'})
          </span>
          {totalTimeSpend ? secondsToMinutesOrHours(totalTimeSpend) : <Spin size="small" />}
        </div>
      </div>
    </>
  );
};

export default ReportsRateSection;
