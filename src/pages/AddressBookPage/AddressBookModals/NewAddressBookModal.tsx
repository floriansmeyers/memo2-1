import React from 'react';
import { Form } from 'antd';
import { useTranslation } from 'utils';
import 'antd/es/date-picker/style/index';
import AddressBookCommonModal from './AddressBookCommonModal';

interface INewAddressBookModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

const NewAddressBookModal: React.FC<INewAddressBookModalProps> = ({ visible, onCloseModal }) => {
  const [form] = Form.useForm();
  const translate = useTranslation();

  const onCloseNewModal = () => {
    form.resetFields();
    onCloseModal();
  };

  const defaultOpenInputGroups = {
    addresses: [''],
    communications: [''],
  };

  return (
    <AddressBookCommonModal
      initialValues={defaultOpenInputGroups}
      visible={visible}
      onCloseModal={onCloseNewModal}
      form={form}
      title={translate('newCrmContact')}
    />
  );
};

export default NewAddressBookModal;
