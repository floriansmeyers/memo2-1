import React from 'react';
import { Spin } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { IMessages } from 'utils';
import DashboardMessageCard from '../DashboardMessageCard/DashboardMessageCard';

interface IDashboardMessagesProps {
  messageData?: Partial<IMessages>[];
  dashboardLoading?: boolean;
  emptyMessage?: string | null;
}

const DashboardMessages: React.FC<IDashboardMessagesProps> = ({
  messageData,
  dashboardLoading,
  emptyMessage,
}) => {
  const renderMessages = (messages: Partial<IMessages>[]): React.ReactNode =>
    messages
      .filter(Boolean)
      .map(({ status, icon = null, qty = 0 }) => (
        <DashboardMessageCard key={status} status={status || ''} icon={icon} qty={qty} />
      ));

  if (dashboardLoading) {
    return <Spin size="small" />;
  }

  if (messageData && messageData?.length > 1) {
    return <div className="messages">{renderMessages(messageData)}</div>;
  }

  return (
    <div className="message">
      <InfoCircleFilled />
      <span>{emptyMessage}</span>
    </div>
  );
};

export default DashboardMessages;
