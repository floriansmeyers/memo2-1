import React from 'react';
import { Form, message } from 'antd';
import { useTranslation } from 'utils';
import { useCreateUserMutation } from 'models/graphql';
import UserCommonModal from './UserCommonModal';

interface INewUserModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

const NewUserModal: React.FC<INewUserModalProps> = ({ visible, onCloseModal }) => {
  const translate = useTranslation();
  const [form] = Form.useForm();
  const [createUser, { data: createUserData, error: createUserError }] = useCreateUserMutation({
    refetchQueries: ['getUsers'],
  });

  const onAddFinish = async () => {
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
      await createUser({
        variables: {
          input: {
            firstName,
            lastName,
            password,
            emailAddress,
            username: emailAddress,
            customers: customersList,
            phoneNumber,
            role,
          },
        },
      });
      message.success(translate('createdSuccesfully'));
      form.resetFields();
      onCloseModal();
    } catch (err) {
      message.error(translate('error.unknown'));
    }
  };

  return (
    <UserCommonModal
      title={translate('addNewUser')}
      visible={visible}
      onCloseModal={onCloseModal}
      form={form}
      onFinish={onAddFinish}
    />
  );
};

export default NewUserModal;
