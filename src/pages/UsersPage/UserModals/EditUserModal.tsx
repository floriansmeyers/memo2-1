import React, { memo, useEffect } from 'react';
import { Form, message } from 'antd';
import { User, useUpdateUserMutation } from 'models/graphql';
import { useTranslation } from 'utils';
import UserCommonModal from './UserCommonModal';

interface IEditUserModalProps {
  visible: boolean;
  onCloseModal: () => void;
  userId?: string;
  user: User;
}

const EditUserModal: React.FC<IEditUserModalProps> = ({ visible, onCloseModal, userId, user }) => {
  const [form] = Form.useForm();
  const [
    updateUser,
    { loading: isUpdateUserLoading, error: updateUserError, data: updateUserData },
  ] = useUpdateUserMutation({ refetchQueries: ['getUsers'] });
  const translate = useTranslation();

  const onEditFinish = async () => {
    const {
      firstName,
      lastName,
      password,
      emailAddress,
      customers: customersList,
      phoneNumber,
      role,
    } = form.getFieldsValue();
    try {
      await updateUser({
        variables: {
          id: userId!,
          input: {
            firstName,
            lastName,
            emailAddress,
            phoneNumber,
            password,
            role,
            customers: customersList,
          },
        },
      });
      message.success(translate('updatedSuccesfully'));
      form.resetFields();
      onCloseModal();
    } catch (e) {
      message.error(translate('errorOccured'));
    }
  };

  return (
    <UserCommonModal
      title={translate('formname.edituser')}
      visible={visible}
      onCloseModal={onCloseModal}
      userId={userId}
      user={user}
      onFinish={onEditFinish}
      form={form}
    />
  );
};

export default memo(EditUserModal);
