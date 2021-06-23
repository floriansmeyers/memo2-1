import React, { useMemo, useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { PageHeader, Table, Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserLazyQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
} from 'models/graphql';
import ConfirmAddUserModal from './UserModals/ConfirmAddUserModal';
import EditUserModal from './UserModals/EditUserModal';
import NewUserModal from './UserModals/NewUserModal';
import UsersTableActions from './UsersTableActions';
import './UsersPage.scss';

export interface IUsers {
  firstName: string;
  lastName: string;
  emailAddress: string;
  id: string;
  phoneNumber: string;
}

const UsersPage: React.FC = () => {
  const translate = useTranslation();
  const [smallAddUserVisible, setSmallAddUserVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [userId, setUserId] = useState('');

  const { data: usersData, loading: usersLoading } = useGetUsersQuery({
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });

  const [
    deleteUser,
    { loading: deletingUser, data: deletedUserData, error },
  ] = useDeleteUserMutation({
    awaitRefetchQueries: true,
    refetchQueries: ['getUsers'],
  });

  const [
    getUser,
    { data: userData, loading: userLoading, error: userError },
  ] = useGetUserLazyQuery();

  const actions = {
    delete: async (value: string) => {
      await deleteUser({
        variables: {
          id: value,
        },
      });
    },
    edit: (value: string) => {
      setEditVisible(true);
      setUserId(value);
      getUser({
        variables: { id: value },
      });
    },
  };

  const closeEditModal = () => {
    setEditVisible(false);
  };

  const usersColumns: ColumnsType<IUsers> = useMemo(
    () => [
      {
        title: translate('firstName'),
        dataIndex: 'firstName',
        key: 'firstName',
        sorter: {
          compare: (a: IUsers, b: IUsers) => a.firstName?.localeCompare(b.firstName),
          multiple: 2,
        },
      },
      {
        title: translate('lastName'),
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: {
          compare: (a: IUsers, b: IUsers) => a.lastName?.localeCompare(b.lastName),
          multiple: 2,
        },
      },
      {
        title: translate('EMAIL'),
        dataIndex: 'emailAddress',
        key: 'emailAddress',
        sorter: {
          compare: (a: IUsers, b: IUsers) => a.emailAddress?.localeCompare(b.emailAddress),
          multiple: 2,
        },
      },
      {
        title: translate('handling'),
        key: 'actions',
        dataIndex: 'actions',
        render: (text, record) => <UsersTableActions record={record} actions={actions} />,
      },
    ],
    [userData],
  );

  return (
    <div className="users-page">
      <PageHeader title={translate('users')} />
      <Button
        icon={<UserAddOutlined />}
        text={translate('formname.adduser')}
        type={ButtonTypes.Blue}
        onClick={() => setSmallAddUserVisible(true)}
      />
      <ConfirmAddUserModal
        visible={smallAddUserVisible}
        onCloseModal={() => setSmallAddUserVisible(false)}
        setNewVisible={setNewVisible}
      />
      {newVisible && (
        <NewUserModal visible={newVisible} onCloseModal={() => setNewVisible(false)} />
      )}
      {editVisible && userData && (
        <EditUserModal
          userId={userId}
          user={userData?.user!}
          visible={editVisible}
          onCloseModal={closeEditModal}
        />
      )}
      <Table
        loading={usersLoading}
        columns={usersColumns}
        data={usersData?.users?.items}
        rowKey="id"
        pagination={{
          total: usersData?.users?.count,
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default UsersPage;
