import React from 'react';
import { Spin } from 'antd';
import { useGetCurrentUserQuery } from 'models/graphql';
import { useTranslation } from 'utils';
import './DashboardWelcomeSection.scss';

const DashboardWelcomeSection: React.FC = () => {
  const { data: user, loading: userLoading, error: userError } = useGetCurrentUserQuery();

  const translate = useTranslation();

  const renderWelcomeMessage = (): JSX.Element | string => {
    if (userLoading)
      return (
        <div>
          <Spin size="small" />
        </div>
      );

    if (userError) return <div>{`Error! ${userError.message}`}</div>;

    return `${translate('welcomeBack')} ${user?.getCurrentUser.firstName}` || 'Unknown user';
  };

  return <div className="welcome-container">{renderWelcomeMessage()}</div>;
};

export default DashboardWelcomeSection;
