import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import { useApolloClient } from '@apollo/client';
import { User } from 'oidc-client';
import { Layout, Select, Input, Button, Divider, Dropdown, Menu, Spin } from 'antd';
import { SearchTypes, SortOrder, useGetCustomersQuery, useLogoutLazyQuery } from 'models/graphql';
import { StorageUtils, userManager, useTranslation } from 'utils';
import useLocalStorage from '../../utils/hooks/useLocalStorage.hook';
import UserStatus from './UserStatus/UserStatus';
import LanguagePicker from './LanguagePicker/LanguagePicker';
import './MainHeader.scss';

interface IMainHeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const { Search } = Input;
const { Option } = Select;

const MainHeader: React.FC<IMainHeaderProps> = ({ collapsed, toggle }) => {
  const [customer, setCustomer] = useState<string>(StorageUtils.getCustomerId() as string);
  const [storeIsReset, setStoreIsReset] = useState(false);
  const history = useHistory();
  const match = useRouteMatch();
  const { 0: user, 2: removeUser } = useLocalStorage<User>('user');
  const translate = useTranslation();
  const client = useApolloClient();
  const { search } = (useLocation() as unknown) as { search: string; filter: string };
  const searchParam = new URLSearchParams(search);
  const searchedValue = searchParam.get('value') as string;
  const filteredValue = searchParam.get('filter') as string;

  const [logout] = useLogoutLazyQuery({
    onCompleted: () => {
      removeUser();
      userManager.signoutRedirect();
    },
  });

  const { data: customersData, loading: customersLoading } = useGetCustomersQuery({
    variables: {
      sort: [
        {
          field: 'name',
          order: SortOrder.Asc,
        },
      ],
    },
  });

  const onChangeCustomersHandler = (value: string) => {
    setCustomer(value);
    setStoreIsReset(true);
  };

  useEffect(() => {
    StorageUtils.setPlatformId(customersData?.customers?.items[0].platformId || '');
    if (!customer || customer === 'null') {
      setCustomer(customersData?.customers.items[0].id as string);
    }

    if (!customersLoading) {
      StorageUtils.setCustomerId(customer);
      client
        .resetStore()
        .then(() => setStoreIsReset(true))
        .finally(() => setStoreIsReset(false));
    }
  }, [customer, customersData]);

  const logoutUser = () => {
    logout();
  };

  const onSearchHandler = (val: string) => {
    history.replace(
      `${match.path}search/?value=${val}${filteredValue ? `&filter=${filteredValue}` : ''}`,
    );
  };

  const onChangeFilterHandler = (val: string) => {
    history.replace(
      `${match.path}search/?value=${'' || searchedValue}&filter=${val || filteredValue}`,
    );
  };

  const isCustomerSet = customer && customer !== 'null';

  return (
    <Layout.Header
      className="site-layout-background main-header"
      style={{ padding: 0, height: '100px' }}
    >
      <div className="main-header-left-container">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
        <Select
          onChange={onChangeFilterHandler}
          size="large"
          defaultValue="all"
          className="main-select"
        >
          <Option value="all">{translate('all')}</Option>
          <Option value={SearchTypes.Message}>{translate('inbox')}</Option>
          <Option value={SearchTypes.Agentmessage}>{translate('agentMessages')}</Option>
          <Option value={SearchTypes.Attachment}>{translate('attachments')}</Option>
          <Option value={SearchTypes.CustomerFixedInstruction}>{translate('instructions')}</Option>
          <Option value={SearchTypes.CustomerCrmContact}>{translate('crmContacts')}</Option>
        </Select>
        <Search
          size="large"
          placeholder={translate('searchInApplication')}
          onSearch={onSearchHandler}
          className="main-search"
        />
        <Select
          showSearch
          disabled={storeIsReset}
          placeholder="Customers"
          onChange={onChangeCustomersHandler}
          value={customer}
          loading={customersLoading}
          size="large"
          className="main-select main-select--default"
          filterOption={(input, option) =>
            option?.children.join('').toLowerCase().includes(input.toLowerCase())
          }
        >
          {customersData?.customers.items.map(({ name, id }) => (
            <Option key={id} value={id}>
              {id}-{name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="main-header-right-container">
        {isCustomerSet ? <UserStatus /> : <Spin size="small" />}
        {isCustomerSet ? <LanguagePicker user={user} /> : <Spin size="small" />}
        <Divider className="user-divider" type="vertical" />
        <img src={require('assets/images/default-user.png').default} alt="user" />
        <Dropdown
          overlay={() => (
            <Menu style={{ overflow: 'hidden' }}>
              <Menu.Item key="0" onClick={logoutUser}>
                {translate('form.logout')}
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}
          placement="bottomLeft"
          className="user-dropdown"
        >
          <Button>
            {user?.profile.given_name || (user?.profile.email || '').split('@')[0]}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default MainHeader;
