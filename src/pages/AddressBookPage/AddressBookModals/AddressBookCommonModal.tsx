import React, { useEffect } from 'react';
import { Form, Row, Col, Input, message } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import {
  User,
  CustomerCrmContact,
  CustomerCrmContactCommunication,
  CustomerCrmContactCommunicationInput,
  CustomerCrmContactGroupRelationInput,
  useCreateCustomerCrmContactMutation,
  useUpdateCustomerCrmContactMutation,
} from 'models/graphql';
import { AddOrEditModal } from 'components';
import { IAddOrEditModalSections, useTranslation, useGetFormInputRequiredRule } from 'utils';
import ContactAddressSection from './AddressBookModalSections/ContactAddressSection/ContactAddressSection';
import ContactGroupSection from './AddressBookModalSections/ContactGroupSection/ContactGroupSection';
import ContactCommunicationSection from './AddressBookModalSections/ContactCommunicationSection/ContactCommunicationSection';

type UserType =
  | (User & { communications: CustomerCrmContactCommunicationInput[] })
  | { [key: string]: string[] };

interface IAddressBookCommonModalProps {
  title: string;
  visible: boolean;
  onCloseModal: () => void;
  customerCrmContact?: CustomerCrmContact;
  initialValues?: UserType;
  form: FormInstance;
}

const AddressBookCommonModal: React.FC<IAddressBookCommonModalProps> = ({
  title,
  visible,
  onCloseModal,
  customerCrmContact,
  initialValues,
  form,
}) => {
  const translate = useTranslation();

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(initialValues);
  }, [customerCrmContact]);

  const [updateCustomerCrmContact] = useUpdateCustomerCrmContactMutation();
  const [createCustomerCrmContact] = useCreateCustomerCrmContactMutation({
    refetchQueries: ['getCustomerCrmContacts'],
    awaitRefetchQueries: true,
  });

  const onFinish = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    const { addresses, groups, firstName, lastName, functionName, communications } = values;

    const mappedCommunications = communications.map(
      (communication: CustomerCrmContactCommunication & { typeId: number }) => {
        const { type, typeId, ...other } = communication;

        return {
          ...other,
          typeId: typeId || type.id,
        };
      },
    );

    const mappedGroups = groups?.map(
      ({ groupId, subGroupId }: CustomerCrmContactGroupRelationInput) => ({
        groupId,
        subGroupId,
      }),
    );

    if (customerCrmContact) {
      const res = await updateCustomerCrmContact({
        variables: {
          id: customerCrmContact.id,
          input: {
            firstName,
            lastName,
            functionName,
            addresses,
            groups: mappedGroups,
            communications: mappedCommunications,
          },
        },
      });

      if (res.data) {
        message.success(translate('updatedSuccesfully'));

        onCloseModal();
      }

      if (res.errors) {
        message.error(translate('errorOccured'));
      }

      return;
    }

    const res = await createCustomerCrmContact({
      variables: {
        input: {
          firstName,
          lastName,
          functionName,
          addresses,
          groups,
          communications: mappedCommunications,
        },
      },
    });

    if (res.data) {
      message.success(translate('createdSuccesfully'));

      onCloseModal();
    }

    if (res.errors) {
      message.error(translate('errorOccured'));
    }
  };

  const generalInfoSection = (
    <>
      <Row gutter={20}>
        <Col span={24}>
          <Form.Item name="functionName" label={translate('functionName')}>
            <Input placeholder={translate('functionName')} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            rules={[useGetFormInputRequiredRule()]}
            name="firstName"
            label={translate('form.givenname')}
          >
            <Input placeholder={translate('form.givenname')} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            rules={[useGetFormInputRequiredRule()]}
            name="lastName"
            label={translate('form.familyname')}
          >
            <Input placeholder={translate('form.familyname')} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );

  const addressSections: IAddOrEditModalSections[] = [
    {
      id: 'generalInformation',
      Section: generalInfoSection,
    },
    {
      id: 'addressInformation',
      props: { form },
      Component: ContactAddressSection,
    },
    {
      id: 'groups',
      props: { form },
      Component: ContactGroupSection,
    },
    {
      id: 'communications',
      props: { form },
      Component: () => (
        <ContactCommunicationSection
          initialValues={
            initialValues! as User & { communications: CustomerCrmContactCommunicationInput[] }
          }
        />
      ),
    },
  ];

  return (
    <AddOrEditModal
      title={title}
      sections={addressSections}
      visible={visible}
      onCloseModal={onCloseModal}
      form={form}
      onFinish={onFinish}
    />
  );
};

export default AddressBookCommonModal;
