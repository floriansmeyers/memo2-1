import React, { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { formatDuration, intervalToDuration } from 'date-fns';
import { Spin } from 'antd';
import { useCallReportingLazyQuery } from 'models/graphql';
import { getOneMonthRangeInDays, useTranslation } from 'utils';
import { monthFilter, yearFilter } from 'graphql/cache';
import Chart from './Chart/Chart';
import './ReportsHandlingPage.scss';

const ReportsHandlingPage: React.FC = () => {
  const translate = useTranslation();
  const year = useReactiveVar(yearFilter);
  const month = useReactiveVar(monthFilter);

  const [callReporting, { data: reporting, loading, error }] = useCallReportingLazyQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (month || year) {
      callReporting({
        variables: { filter: getOneMonthRangeInDays(month, year) },
      });
    }
  }, [year, month]);

  const waitingTimeStatistics = reporting?.callReporting?.waitingTimeStatistics;
  const durationTimeStatistics = reporting?.callReporting?.durationTimeStatistics;
  const nrOfCallsPerHourStatistics = reporting?.callReporting?.nrOfCallsPerHourStatistics;
  const waitingTimesMissedCalls = reporting?.callReporting?.missedCallStatistics;

  const renderCharts = () => {
    if (loading) {
      return <Spin className="loading-spin" size="small" />;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <>
        {reporting && (
          <>
            <Chart
              data={waitingTimeStatistics?.xAxisValues.map((el, idx) => ({
                key: el,
                value: waitingTimeStatistics?.yAxisValues[idx],
              }))}
              headerTitle="averageWaitingTime"
            />
            <Chart
              data={durationTimeStatistics?.xAxisValues.map((el, idx) => ({
                key: el,
                value: durationTimeStatistics?.yAxisValues[idx],
              }))}
              headerTitle="averageCallDuration"
            />
            <Chart
              data={nrOfCallsPerHourStatistics?.xAxisValues.map((el, idx) => ({
                key: el,
                value: nrOfCallsPerHourStatistics?.yAxisValues[idx],
              }))}
              headerTitle="handlingsPerHour"
            />
            <Chart
              data={waitingTimesMissedCalls?.xAxisValues.map((el, idx) => ({
                key: el,
                value: waitingTimesMissedCalls?.yAxisValues[idx],
              }))}
              headerTitle="waitingTimesMissedCalls"
            />
          </>
        )}
      </>
    );
  };

  return (
    <div className="actions">
      <div className="actions-header">
        <div className="actions-col">
          <div className="actions-col__title">{translate('totalHandlings')}</div>
          <p className="actions-col__nr">{durationTimeStatistics?.totalNrOfCalls || <p>0</p>}</p>
        </div>
        <div className="actions-col">
          <div className="actions-col__title">{translate('averageTime')}</div>
          <p className="actions-col__nr">
            {durationTimeStatistics ? (
              `${formatDuration(
                intervalToDuration({
                  start: 0,
                  end: durationTimeStatistics?.averageDuration! * 1000,
                }),
              )} seconds`
            ) : (
              <span>0</span>
            )}
          </p>
        </div>
        <div className="actions-col">
          <div className="actions-col__title">{translate('averageWaitingTimeAfterForward')}</div>
          <p className="actions-col__nr">
            {waitingTimeStatistics ? (
              `${formatDuration(
                intervalToDuration({
                  start: 0,
                  end: waitingTimeStatistics?.averageWaitingTime! * 1000,
                }),
              )} seconds`
            ) : (
              <span>0</span>
            )}
          </p>
        </div>
      </div>
      <div className="actions-charts">{renderCharts()}</div>
    </div>
  );
};

export default ReportsHandlingPage;
