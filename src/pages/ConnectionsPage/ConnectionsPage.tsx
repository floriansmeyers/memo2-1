import React, { lazy, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MessageOutlined, VideoCameraOutlined, SyncOutlined } from '@ant-design/icons';
import { renderRoutes, IRoutesProps, useTranslation } from 'utils';
import { PageHeader, Icon } from 'components';

const SocialMediaSettingsPage = lazy(() => import('pages/SocialMediaSettingsPage'));
const VideoReceptionPage = lazy(() => import('pages/VideoReceptionPage'));
const StandbyServicePage = lazy(() => import('pages/StandbyServicePage'));

const ConnectionsPage: React.FC = () => {
  const translate = useTranslation();
  const history = useHistory();

  useEffect(() => {
    history.push('/settings/connections/social');
  }, [history]);

  const connectionsRoutes: IRoutesProps[] = [
    {
      name: translate('social'),
      path: '/settings/connections/social',
      icon: <MessageOutlined />,
      Component: SocialMediaSettingsPage,
    },
    {
      name: translate('video'),
      path: '/settings/connections/video',
      icon: <VideoCameraOutlined />,
      Component: VideoReceptionPage,
    },
    {
      name: translate('standby'),
      path: '/settings/connections/standby',
      icon: <SyncOutlined />,
      Component: StandbyServicePage,
    },
  ];

  return (
    <>
      <PageHeader title={translate('settings')} routes={connectionsRoutes} />
      {renderRoutes(connectionsRoutes)}
    </>
  );
};

export default ConnectionsPage;
