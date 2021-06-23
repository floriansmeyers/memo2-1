import React, { useCallback } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import { IRoutesProps } from 'utils';
import './PageHeaderTabs.scss';

const { TabPane } = Tabs;

interface IPageHeaderTabsTabsProps {
  routes: IRoutesProps[];
}

const renderTabs = (tabs: IRoutesProps[]): React.ReactNode =>
  tabs.map(({ name, path, icon }) => (
    <TabPane
      tab={
        <span>
          {icon}
          {name}
        </span>
      }
      key={path}
    />
  ));

const PageHeaderTabs: React.FC<IPageHeaderTabsTabsProps> = ({ routes }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { type } = useParams() as { type: string };

  const handleTabClick = useCallback(
    (key: string): void => {
      history.push(key);
    },
    [history],
  );

  return (
    <Tabs
      activeKey={type === 'temporary' ? '/customer/instructions/temporary' : pathname}
      onChange={handleTabClick}
      className="page-header-tabs"
    >
      {renderTabs(routes)}
    </Tabs>
  );
};

export default PageHeaderTabs;
