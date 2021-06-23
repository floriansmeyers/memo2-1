import React from 'react';
import { DeleteOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import { IUsers } from './UsersPage';

interface IUsersTableActionsProps {
  record: IUsers;
  actions: {
    delete: (value: string) => Promise<void>;
    edit: (value: string) => void;
  };
}

const UsersTableActions: React.FC<IUsersTableActionsProps> = ({ record, actions }) => {
  const translate = useTranslation();

  return (
    <div className="actions">
      <Button
        onClick={() => actions['edit'](record.id)}
        icon={<UserSwitchOutlined />}
        text={translate('formname.edituser')}
        type={ButtonTypes.White}
      />
      <div className="divider" />
      <Popconfirm
        title={translate('delete.areYouSure')}
        onConfirm={() => actions['delete'](record.id)}
      >
        <Button icon={<DeleteOutlined />} text={translate('delete')} type={ButtonTypes.White} />
      </Popconfirm>
    </div>
  );
};

export default UsersTableActions;
