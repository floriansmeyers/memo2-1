import React, { useEffect, useState } from 'react';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useGetUserStatusQuery, useUpdateUserStatusMutation } from '../../../models/graphql';

const UserStatus: React.FC = () => {
  const [online, setOnline] = useState<undefined | boolean>(false);
  const [onlineTrigger, setOnlineTrigger] = useState<boolean>(false);

  const { data: initialUserStatus, loading: userStatusLoading } = useGetUserStatusQuery({
    fetchPolicy: 'no-cache',
  });

  const [updateUserStatus] = useUpdateUserStatusMutation();

  useEffect(() => {
    setOnline(initialUserStatus?.userStatus.active!);
  }, [initialUserStatus?.userStatus.active]);

  useEffect(() => {
    if (online !== undefined && onlineTrigger) {
      updateUserStatus({
        variables: {
          input: {
            active: online,
          },
        },
      });
    }
  }, [online, onlineTrigger]);

  const onClickOnlineHandler = () => {
    setOnline(!online);
    setOnlineTrigger(true);
  };

  return (
    <Button
      loading={userStatusLoading}
      onClick={onClickOnlineHandler}
      className={`${online ? 'online-button online-button--active' : 'offline-button'}`}
    >
      <CustomerServiceOutlined />
      {online ? 'Online' : 'Offline'}
    </Button>
  );
};

export default UserStatus;
