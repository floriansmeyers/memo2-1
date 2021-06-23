import React, { useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { PhoneOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons';
import { PageHeader, Table, ActionIcons, Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import { CustomerCrmContact } from 'models/graphql';
import { useGetCustomerCrmContacts } from 'graphql/hooks/useGetCustomerCrmContacts';
import { EMAIL_REGEX } from '../../utils/global/regex';
import NewAddressBookModal from './AddressBookModals/NewAddressBookModal';
import UpdateAddressBookModal from './AddressBookModals/UpdateAddressBookModal';
import './AddressBookPage.scss';

const AddressBookPage: React.FC = () => {
  const translate = useTranslation();
  const [newVisible, setNewVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);

  const [contactToEdit, setContactToEdit] = useState<CustomerCrmContact | undefined>();

  const { customerCrmContacts, customerCrmContactsLoading } = useGetCustomerCrmContacts();

  const openUpdateModal = (customerContact: CustomerCrmContact) => {
    setUpdateVisible(true);
    setContactToEdit(customerContact);
  };

  const closeUpdateModal = () => {
    setUpdateVisible(false);
    setContactToEdit(undefined);
  };

  const isEmail = (value: string) => EMAIL_REGEX.test(String(value).toLowerCase());

  const addressBookColumns: ColumnsType<CustomerCrmContact> = [
    {
      title: translate('name'),
      dataIndex: 'firstName',
      key: 'firstName',
      render: (_text, record: CustomerCrmContact) => (
        <span
          className="link-like"
          tabIndex={0}
          role="button"
          onClick={() => openUpdateModal(record)}
        >
          {`${record.firstName || ''} ${record.lastName || ''}`.trim()}
        </span>
      ),
    },
    {
      title: translate('group'),
      dataIndex: 'group',
      key: 'group',
      render: (_text, record: CustomerCrmContact) => (
        <div className="groups">
          {record.groups &&
            record.groups.map((group) => (
              <span key={group.groupId}>
                {group.group.name} - {group.subGroup.name}
              </span>
            ))}
        </div>
      ),
    },
    {
      title: translate('functionName'),
      dataIndex: 'functionName',
      key: 'functionName',
      render: (_text, record: CustomerCrmContact) => <span>{record.functionName || ''}</span>,
    },
    {
      title: translate('contactInfo'),
      key: 'communications',
      dataIndex: 'communications',
      render: (_text, record: CustomerCrmContact) => (
        <div className="contact">
          {record.communications &&
            record.communications.map(
              (communication) =>
                communication.value && (
                  <span key={communication.value}>
                    {isEmail(communication.value) ? (
                      <span className="mail-contact">
                        <MailOutlined />
                        {communication.value}
                      </span>
                    ) : (
                      <span className="phone-contact">
                        <PhoneOutlined />
                        <MessageOutlined />
                        {communication.value}
                      </span>
                    )}
                  </span>
                ),
            )}
        </div>
      ),
    },
    {
      title: translate('address'),
      key: 'addresses',
      dataIndex: 'addresses',
      render: (_text, record: CustomerCrmContact) => (
        <div className="groups">
          {record.addresses &&
            record.addresses.map((address) => (
              <div key={address.id} className="address groups">
                <span>{address.address}</span>
                <span>
                  {address.postalCode} {address.city}
                </span>
              </div>
            ))}
        </div>
      ),
    },
    {
      key: 'action',
      render: (_text, record: CustomerCrmContact) => (
        <div className="actions">
          {/* TODO: Replace span with button like in User page + ADD <FormOutlined /> next to it */}
          <span
            className="link-like"
            role="button"
            onClick={() => openUpdateModal(record)}
            tabIndex={0}
          >
            {translate('edit')}
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="address-book-page">
      <PageHeader title={translate('crmContacts')} actions={<ActionIcons />} />
      <Button
        text={translate('newCrmContact')}
        type={ButtonTypes.Blue}
        onClick={() => setNewVisible(true)}
      />
      <NewAddressBookModal visible={newVisible} onCloseModal={() => setNewVisible(false)} />
      <UpdateAddressBookModal
        visible={updateVisible}
        customerCrmContact={contactToEdit}
        onCloseModal={closeUpdateModal}
      />
      <Table
        rowKey="addressBook"
        columns={addressBookColumns}
        data={customerCrmContacts?.items}
        loading={customerCrmContactsLoading}
      />
    </div>
  );
};

export default AddressBookPage;
