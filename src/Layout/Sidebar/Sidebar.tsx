import React, { useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Layout as AntdLayout, Menu } from 'antd';
import {
  MailOutlined,
  DesktopOutlined,
  BarChartOutlined,
  FileTextOutlined,
  SettingOutlined,
  IdcardOutlined,
  InboxOutlined,
  ShareAltOutlined,
  CustomerServiceOutlined,
  InfoOutlined,
  AuditOutlined,
  ContactsOutlined,
  DiffOutlined,
  NodeIndexOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { AVAILABLE_ROLES, getPermission, useTranslation } from 'utils';
import './Sidebar.scss';

interface ISidebarProps {
  collapsed: boolean;
}

interface ISidebarLinksChild {
  nameId: string;
  icon: JSX.Element;
  path: string;
}

interface ISidebarLinks {
  nameId: string;
  icon: JSX.Element;
  path?: string;
  hasPermission: boolean | ((rules: string[]) => boolean);
  children?: ISidebarLinksChild[];
}

const { Sider } = AntdLayout;

const sidebarLinks: ISidebarLinks[] = [
  {
    nameId: 'dashboard',
    icon: <DesktopOutlined />,
    path: '/',
    hasPermission: true,
  },
  {
    nameId: 'inbox',
    icon: <InboxOutlined />,
    hasPermission: true,
    children: [
      {
        nameId: 'callCenter',
        icon: <CustomerServiceOutlined />,
        path: '/messages/callcenter',
      },
      {
        nameId: 'socialMedia',
        icon: <ShareAltOutlined />,
        path: '/messages/socialmedia',
      },
    ],
  },
  {
    nameId: 'invoices',
    icon: <FileTextOutlined />,
    path: '/invoices',
    hasPermission: getPermission([AVAILABLE_ROLES.SUPERADMIN, AVAILABLE_ROLES.ADMIN]),
  },
  {
    nameId: 'reports',
    icon: <BarChartOutlined />,
    path: '/reports/incoming',
    hasPermission: getPermission([AVAILABLE_ROLES.SUPERADMIN, AVAILABLE_ROLES.ADMIN]),
  },
  {
    nameId: 'customerDetails',
    icon: <IdcardOutlined />,
    hasPermission: true,
    children: [
      {
        nameId: 'information',
        icon: <InfoOutlined />,
        path: '/customer/info',
      },
      {
        nameId: 'instructions',
        icon: <AuditOutlined />,
        path: '/customer/instructions/fixed',
      },
      {
        nameId: 'attachments',
        icon: <DiffOutlined />,
        path: '/customer/attachments',
      },
      {
        nameId: 'crmContacts',
        icon: <ContactsOutlined />,
        path: '/customer/crmcontacts',
      },
    ],
  },
  {
    nameId: 'settings',
    icon: <SettingOutlined />,
    hasPermission: getPermission([AVAILABLE_ROLES.SUPERADMIN, AVAILABLE_ROLES.ADMIN]),
    children: [
      {
        nameId: 'pairing',
        icon: <NodeIndexOutlined />,
        path: '/settings/connections/social',
      },
      {
        nameId: 'users',
        icon: <UsergroupAddOutlined />,
        path: '/settings/users',
      },
    ],
  },
];

const Sidebar: React.FC<ISidebarProps> = ({ collapsed }) => {
  const translate = useTranslation();
  const location = useLocation();

  const defaultOpenSubmenu = sidebarLinks.find((link) =>
    link.children?.find((child) => child.path === location.pathname),
  );

  const renderLinks = (): React.ReactNode =>
    sidebarLinks.map(({ nameId, icon, children, path, hasPermission }) =>
      children
        ? hasPermission && (
            <Menu.SubMenu key={nameId} icon={icon} title={translate(nameId)}>
              {children.map((child: ISidebarLinksChild) => (
                <Menu.Item key={child.path}>
                  <div className="sidebar-link-container">
                    <NavLink to={child.path}>
                      {child.icon} {translate(child.nameId)}
                    </NavLink>
                  </div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )
        : hasPermission && (
            <Menu.Item key={path} icon={icon}>
              <div className="sidebar-link-container">
                <NavLink to={path} className="sidebar-link">
                  {translate(nameId)}
                </NavLink>
              </div>
            </Menu.Item>
          ),
    );

  return (
    <div className="sidebar-container">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light" width="263px">
        <div className="sidebar-logo">
          <NavLink to="/">
            <div
              className={!collapsed ? 'sidebar-logo-content' : 'sidebar-logo-content--collapsed'}
            >
              <img src={require('assets/images/logo.png').default} alt="sidebar-logo" />
            </div>
          </NavLink>
        </div>
        <Menu
          className={collapsed ? 'collapsed-menu' : ''}
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={[defaultOpenSubmenu?.nameId || '']}
        >
          {renderLinks()}
        </Menu>
      </Sider>

      <div className="sidebar-bottom-container">
        <Link className={!collapsed ? 'contact-button' : 'contact-button--collapsed'} to="/contact">
          <MailOutlined />
          {collapsed ? null : <span>{translate('contact')}</span>}
        </Link>
        {!collapsed && (
          <div className="legal-info">
            <div>
              &copy; {new Date().getFullYear()} - <a href="https://www.memo.be/">Memo NV</a>
            </div>
            <div>
              <a href="terms">{translate('termsandconditions')}</a> |{' '}
              <a href="privacy">{translate('privacy')}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
