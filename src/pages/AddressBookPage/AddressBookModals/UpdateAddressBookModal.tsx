import React from 'react';
import { Form } from 'antd';
import { useTranslation } from 'utils';
import {
  CustomerCrmContact,
  CustomerCrmContactCommunication,
  CustomerCrmContactCommunicationInput,
  User,
} from 'models/graphql';
import { deleteAllSpecificObjKeys } from 'utils/global/removeObjKeys';
import AddressBookCommonModal from './AddressBookCommonModal';

interface IUpdateAddressBookModalProps {
  visible: boolean;
  onCloseModal: () => void;
  customerCrmContact?: CustomerCrmContact;
}

const UpdateAddressBookModal: React.FC<IUpdateAddressBookModalProps> = ({
  visible,
  onCloseModal,
  customerCrmContact,
}) => {
  const [form] = Form.useForm();
  const translate = useTranslation();

  const { functionName, firstName, lastName, addresses, groups, communications } =
    customerCrmContact || {};

  const mappedCommunications = communications?.map(
    (communication: CustomerCrmContactCommunication & { typeId?: number }) => {
      const { type, typeId, ...other } = communication;

      return {
        ...other,
        typeId: typeId || type.id,
      };
    },
  );

  const initialValues = {
    functionName,
    firstName,
    lastName,
    groups: deleteAllSpecificObjKeys(groups, '__typename'),
    addresses: deleteAllSpecificObjKeys(addresses, '__typename'),
    communications: deleteAllSpecificObjKeys(mappedCommunications, '__typename'),
  };

  return (
    <AddressBookCommonModal
      title={translate('crmContacts')}
      visible={visible}
      onCloseModal={onCloseModal}
      customerCrmContact={customerCrmContact}
      initialValues={
        initialValues as User & { communications: CustomerCrmContactCommunicationInput[] }
      }
      form={form}
    />
  );
};

export default UpdateAddressBookModal;
