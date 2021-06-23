import React, { useEffect, useRef, useState } from 'react';
import { Empty, Select, Spin } from 'antd';
import {
  NotificationConversation,
  NotificationInvoice,
  NotificationTypes,
  SortOrder,
  useGetDashboardNotificationsLazyQuery,
} from 'models/graphql';
import { useVisibleInvoice } from 'graphql/hooks/useVisibleInvoice';
import { useTranslation } from 'utils';
import DashboardNotification from './DashboardNotification/DashboardNotification';
import './DashboardNotifications.scss';

const { Option } = Select;

enum SelectedOption {
  Everything = 'Everything',
  Invoice = 'Invoice',
  Conversation = 'Conversation',
}

const DashboardNotifications: React.FC = () => {
  const limit = 5;
  const [skip, setSkip] = useState<number>(0);
  const translate = useTranslation();
  const [option, setOption] = useState<string>(SelectedOption.Everything);
  const [notifications, setNotifications] = useState<
    (NotificationInvoice | NotificationConversation)[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const notificationTypes = (): NotificationTypes[] => {
    if (option !== SelectedOption.Everything) {
      return [NotificationTypes[option as keyof typeof NotificationTypes]];
    }
    return [NotificationTypes.Invoice, NotificationTypes.Conversation];
  };

  const { visible: showInvoices } = useVisibleInvoice();

  const [
    getDashboardNotifications,
    {
      data: dashboardNotifications,
      loading: dashboardNotificationsLoading,
      error: dashboardNotificationsError,
      previousData,
    },
  ] = useGetDashboardNotificationsLazyQuery({ notifyOnNetworkStatusChange: true });
  const dashboardData = dashboardNotifications?.dashboard.notifications;

  useEffect(() => {
    getDashboardNotifications({
      variables: {
        filter: { types: notificationTypes() },
        skip,
        limit,
        sort: [{ field: 'date', order: SortOrder.Desc }],
      },
    });
  }, [option, skip]);

  const addToNotifications = (queryResult: (NotificationInvoice | NotificationConversation)[]) => {
    const lastItem = queryResult[queryResult?.length - 1];
    const isLastNotificationDifferentFromLastItem: boolean =
      notifications[notifications?.length - 1] !== lastItem;
    const hasMore: boolean = notifications.concat(queryResult).length !== notifications.length;

    if (lastItem) {
      if (isLastNotificationDifferentFromLastItem && hasMore) {
        const newNotifications = notifications.concat(queryResult);
        setNotifications(newNotifications);
      }
    }
  };

  useEffect(() => {
    if (dashboardData?.items) {
      addToNotifications(
        dashboardData?.items as (NotificationInvoice | NotificationConversation)[],
      );
    }
  }, [dashboardData?.items]);

  useEffect(() => {
    setSkip(0);
    setNotifications([]);
  }, [option]);

  useEffect(() => {
    if (dashboardData?.count !== previousData?.dashboard.notifications.count) {
      setNotifications([]);
    }
  }, [previousData]);

  const handleScroll = () => {
    if (notifications.length > 0 && containerRef.current) {
      const container = containerRef.current;
      if (container.scrollTop > container.scrollHeight - container.clientHeight - 50) {
        setSkip(skip + limit);
      }
    }
  };

  const onChangeHandler = (value: string): void => {
    setOption(value);
  };

  useEffect(() => {
    if (containerRef.current && notifications.length < dashboardData?.count!) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [notifications, containerRef]);

  return (
    <div className="dashboard-notifications">
      <div className="dashboard-notifications__header">
        <span className="dashboard-notifications__title">Notifications</span>
        <Select onChange={onChangeHandler} size="large" value={option} className="main-select">
          <Option value={SelectedOption.Everything}>Everything</Option>
          <Option value={SelectedOption.Conversation}>Conversations</Option>
          {showInvoices && <Option value={SelectedOption.Invoice}>Invoices</Option>}
        </Select>
      </div>
      <div ref={containerRef} className="dashboard-notifications__main">
        <div>
          {dashboardNotificationsLoading && notifications.length === 0 && (
            <div className="initial-empty-state">
              <Spin size="small" />
            </div>
          )}
          {!dashboardNotificationsLoading && notifications.length === 0 && (
            <div className="initial-empty-state">
              <Empty description={translate('noNotifications')} />
            </div>
          )}
          {!dashboardNotificationsError &&
            notifications.length > 0 &&
            notifications.map((notification) => (
              <DashboardNotification notification={notification} key={notification.date} />
            ))}
          {!dashboardNotificationsError &&
            notifications.length > 0 &&
            dashboardNotificationsLoading && (
              <div className="empty-state">
                <Spin size="small" />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNotifications;
