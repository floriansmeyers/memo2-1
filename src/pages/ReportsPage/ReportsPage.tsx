import React, { lazy, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { renderRoutes, IRoutesProps, useTranslation, getOneMonthRangeInDays } from 'utils';
import {
  useDownloadOutgoingCallReportingLazyQuery,
  useIncomingCallsQuery,
  useOutgoingCallsQuery,
} from 'models/graphql';
import { DUMMY_FILTER } from 'graphql/mock_data';
import { monthFilter, yearFilter } from 'graphql/cache';
import { PageHeader, Icon, ReportsRateSection } from 'components';
import ReportsActions from './ReportsActions/ReportsActions';

const ReportsIncomingPage = lazy(() => import('pages/ReportsIncomingPage'));
const ReportsOutgoingPage = lazy(() => import('pages/ReportsOutgoingPage'));
const ReportsHandlingPage = lazy(() => import('pages/ReportsHandlingPage'));
const ReportsVideoPage = lazy(() => import('pages/ReportsVideoPage'));

const ReportsPage: React.FC = () => {
  const translate = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const year = useReactiveVar(yearFilter);
  const month = useReactiveVar(monthFilter);

  // TODO: add dynamic filter
  const { data: incomingCalls, loading: incomingCallsLoading } = useIncomingCallsQuery({
    variables: {
      filter: getOneMonthRangeInDays(month, year),
    },
    notifyOnNetworkStatusChange: true,
  });

  // TODO: add dynamic filter
  const { data: outgoingCalls, loading: outgoingCallsLoading } = useOutgoingCallsQuery({
    variables: {
      filter: getOneMonthRangeInDays(month, year),
    },
    notifyOnNetworkStatusChange: true,
  });

  useDownloadOutgoingCallReportingLazyQuery({
    variables: { filter: DUMMY_FILTER },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    history.push('/reports/incoming');
  }, [history]);

  const ReportsIncomingWithProps = () => (
    <ReportsIncomingPage
      loading={incomingCallsLoading}
      tableData={incomingCalls?.incomingCalls[0]?.callList ?? []}
    />
  );

  const ReportsOutgoingWithProps = () => (
    <ReportsOutgoingPage
      loading={outgoingCallsLoading}
      tableData={outgoingCalls?.outgoingCalls[0]?.callList ?? []}
    />
  );

  const reportsRoutes: IRoutesProps[] = [
    {
      name: translate('incoming'),
      path: '/reports/incoming',
      icon: <Icon name="incoming" />,
      Component: ReportsIncomingWithProps,
    },
    {
      name: translate('outgoing'),
      path: '/reports/outgoing',
      icon: <Icon name="outgoing" />,
      Component: ReportsOutgoingWithProps,
    },
    {
      name: translate('handling'),
      path: '/reports/handling',
      icon: <Icon name="book" />,
      Component: ReportsHandlingPage,
    },
    {
      name: translate('videoreport'),
      path: '/reports/videoreport',
      icon: <Icon name="attachment" />,
      Component: ReportsVideoPage,
    },
  ];

  const allIncomingCalls = incomingCalls?.incomingCalls[0]?.callStats;

  const allOutgoingCalls = outgoingCalls?.outgoingCalls[0]?.callStats;

  // Here we make sure that we pass correct calls
  let allCalls = null;

  if (allIncomingCalls && location.pathname === '/reports/incoming') {
    allCalls = allIncomingCalls;
  }

  if (allOutgoingCalls && location.pathname === '/reports/outgoing') {
    allCalls = allOutgoingCalls;
  }

  // If calls for current page are available we make section with those calls visible
  let infoComponent;

  if (allCalls) {
    const { totalDurationDay, totalDurationNight, nrOfCallsDay, nrOfCallsNight } = allCalls;

    infoComponent = (
      <ReportsRateSection
        dayTimeSpend={totalDurationDay}
        nightTimeSpend={totalDurationNight}
        nrOfCallsDay={nrOfCallsDay}
        nrOfCallsNight={nrOfCallsNight}
        totalTimeSpend={totalDurationDay + totalDurationNight}
      />
    );
  }

  return (
    <>
      <PageHeader
        title={translate('reports')}
        routes={reportsRoutes}
        actions={<ReportsActions />}
        infoComponent={infoComponent}
      />
      {renderRoutes(reportsRoutes)}
    </>
  );
};

export default ReportsPage;
