/* eslint-disable @typescript-eslint/no-unused-vars */
// FIXME remove all unused vars after finish
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MailFilled,
  ClockCircleFilled,
  FormOutlined,
  ClockCircleOutlined,
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
  ConversationStatus,
  Dashboard,
  useGetDashboardQuery,
  useMeccaConversationUpdatedSubscription,
  useSocialConversationUpdatedSubscription,
} from 'models/graphql';
import { useVisibleInvoice } from 'graphql/hooks/useVisibleInvoice';
import { IMessages, useTranslation } from 'utils';
import { PageHeader } from 'components';
import {
  DashboardContentSection,
  DashboardWelcomeSection,
  DashboardNotifications,
} from './components';

import './DashboardPage.scss';

interface IMessageCardProps extends Omit<IMessages, 'qty'> {
  qty?: number;
}

interface IConversations {
  status: ConversationStatus;
  total: number;
}

type ConversationType = keyof Pick<Dashboard, 'meccaConversations' | 'socialConversations'>;

// TODO: Check StatusIndicator, it's similar to the following, so make one common function
export const getIcon = (status: string): JSX.Element => {
  switch (status) {
    case ConversationStatus.Open:
      return <ClockCircleFilled />;
    case ConversationStatus.Urgent:
      return <ExclamationCircleFilled />;
    case ConversationStatus.Important:
      return <ExclamationCircleFilled />;
    case ConversationStatus.High:
      return <ExclamationCircleOutlined />;
    case ConversationStatus.EmailBack:
      return <MailFilled />;

    default:
      return <ClockCircleFilled />;
  }
};

const DashboardPage: React.FC = () => {
  const translate = useTranslation();
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
    refetch: refetchDashboard,
  } = useGetDashboardQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  const { visible: showInvoices } = useVisibleInvoice();
  const { data: updatedSocialConversations } = useSocialConversationUpdatedSubscription();
  const { data: updateMeccaConversations } = useMeccaConversationUpdatedSubscription();

  const conversations = dashboardData?.dashboard;

  const totalConversations = (type: ConversationType): IMessageCardProps => ({
    status: 'Total',
    icon: <ClockCircleOutlined />,
    qty: conversations?.[type]?.total,
  });

  const getConversationsData = (type: ConversationType): IMessageCardProps[] | undefined =>
    conversations?.[type]?.countsByStatus.map(({ status, total }: IConversations) => ({
      status,
      icon: getIcon(status),
      qty: total,
    }));

  const meccaConversationsData: IMessageCardProps[] | undefined = getConversationsData(
    'meccaConversations',
  );
  const socialConversationsData: IMessageCardProps[] | undefined = getConversationsData(
    'socialConversations',
  );

  const getConversations = (
    conversationType: ConversationType,
    data: IMessageCardProps[] | undefined,
  ): IMessageCardProps[] => {
    if (Array.isArray(data)) {
      return [totalConversations(conversationType), ...data];
    }
    return [];
  };

  const renderConversations = (
    title: string,
    conversationType: ConversationType,
    data: IMessageCardProps[] | undefined,
    emptyMessage: null | string,
  ): JSX.Element => (
    <DashboardContentSection
      title={title}
      messageData={getConversations(conversationType, data)}
      dashboardLoading={dashboardLoading}
      emptyMessage={emptyMessage}
    />
  );

  return (
    <>
      <PageHeader
        title={translate('dashboard')}
        actions={
          <div className="dashboard-setting">
            <Link to="/settings/connections/social" role="button">
              <FormOutlined /> <span>{translate('managePairing')}</span>
            </Link>
          </div>
        }
        infoComponent={<DashboardWelcomeSection />}
      />
      <div className="dashboard-container">
        <div className="dashboard-content">
          {renderConversations(
            'Callcenter',
            'meccaConversations',
            meccaConversationsData,
            'We ondersteunen nu WhatsApp Business!',
          )}
          {renderConversations(
            'Social media',
            'socialConversations',
            socialConversationsData,
            'No Data',
          )}

          <DashboardContentSection
            emptyMessage='We ondersteunen nu WhatsApp Business!'
            title={translate('messageFromMemo')}
          />
        </div>
        <DashboardNotifications />
      </div>
    </>
  );
};

export default DashboardPage;
