import React from 'react';
import { InfoSection, PageHeaderTabs } from 'components';
import { IRoutesProps } from 'utils';
import './PageHeader.scss';

interface IPageHeaderProps {
  title: string | JSX.Element;
  routes?: IRoutesProps[];
  actions?: JSX.Element;
  infoComponent?: JSX.Element;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, routes, actions, infoComponent }) => (
  <>
    <div className="page-header">
      <div className="page-header-left-container">
        <div className="page-header-title">{title}</div>
        {routes && <PageHeaderTabs routes={routes} />}
      </div>
      <div className="page-header-action">{actions}</div>
    </div>
    {infoComponent && <InfoSection>{infoComponent}</InfoSection>}
  </>
);

export default PageHeader;
