import React, { useState } from 'react';
import { Layout as AntdLayout } from 'antd';
import { IWrapperProps } from 'utils';
import MainHeader from './MainHeader';
import Sidebar from './Sidebar';
import './Layout.scss';

const { Content } = AntdLayout;

const Layout: React.FC<IWrapperProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <AntdLayout className="main-layout">
      <Sidebar collapsed={collapsed} />
      <AntdLayout className="site-layout">
        <MainHeader collapsed={collapsed} toggle={toggle} />
        <React.StrictMode>
          <Content className="site-layout-background">{children}</Content>
        </React.StrictMode>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
