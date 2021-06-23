import React from 'react';
import { IMessages } from 'utils';
import DashboardMessages from '../DashboardMessages/DashboardMessages';
import './DashboardContentSection.scss';

interface IDashboardContentSectionProps {
  title: string;
  messageData?: Partial<IMessages>[];
  dashboardLoading?: boolean;
  emptyMessage?: string | null;
}

const DashboardContentSection: React.FC<IDashboardContentSectionProps> = ({
  title,
  messageData,
  dashboardLoading,
  emptyMessage,
}) => (
  <div className="dashboard-section">
    <div className="dashboard-section__header">
      <span className="dashboard-section__title">{title}</span>
    </div>
    <div className="dashboard-section__main">
      <DashboardMessages
        emptyMessage={emptyMessage}
        dashboardLoading={dashboardLoading}
        messageData={messageData}
      />
    </div>
  </div>
);

export default React.memo(DashboardContentSection);
