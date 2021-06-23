import React, { useEffect } from 'react';
import { Form, Row, Col, Input, Select, message } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { AddOrEditModal } from 'components';
import { IAddOrEditModalSections, useTranslation } from 'utils';
import { useGetCustomersQuery, User } from 'models/graphql';

const { Option } = Select;

interface IUserCommonModalProps {
  title: string;
  visible: boolean;
  onCloseModal: () => void;
  initialValues?: {};
  form: FormInstance;
  userId?: string;
  user?: User;
  onFinish: () => void;
}

const UserCommonModal: React.FC<IUserCommonModalProps> = ({
  title,
  visible,
  onCloseModal,
  initialValues,
  form,
  user,
  onFinish,
}) => {
  const translate = useTranslation();
  const { data: customersData, loading: customersLoading } = useGetCustomersQuery();
  const allCustomers = customersData?.customers.items || [];

  useEffect(() => {
    if (user) {
      form?.setFieldsValue({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        emailAddress: user.emailAddress || '',
        phoneNumber: user.phoneNumber || '',
        role: user.role || '',
        customers: user.customers || [],
      });
    }
  }, [user, form]);

  const userTypeSection = (
    <Row gutter={20} className="user-modal-row">
      <Col span={24}>
        <Form.Item name="role">
          <Select>
            <Option value="agent">Agent</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );

  const userCustomersSection = (
    <Row gutter={20} className="user-modal-row">
      <Col span={24}>
        <Form.Item name="customers" label={translate('customers')}>
          <Select mode="multiple" maxTagCount={5}>
            {[...allCustomers]
              ?.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
              .map((customer) =>
                customer.groupId ? (
                  <Select.Option
                    key={`${customer.name}-${customer.groupId}`}
                    value={customer.groupId.toString()}
                  >
                    {customer.name}
                  </Select.Option>
                ) : null,
              )}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );

  const userPersonalInfoSection = (
    <>
      <Row gutter={20} className="user-modal-row">
        <Col span={12}>
          <Form.Item name="firstName" label={translate('firstName')}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="lastName" label={translate('lastName')}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item name="emailAddress" label={translate('email')}>
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="phoneNumber" label={translate('phoneNumber')}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );

  const userPasswordSection = (
    <Row gutter={20} className="user-modal-row">
      <Col span={12}>
        <Form.Item name="password" label={translate('form.password')}>
          <Input type="password" autoComplete="new-password" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="repeatPassword" label={translate('form.passwordrepeat')}>
          <Input type="password" />
        </Form.Item>
      </Col>
    </Row>
  );

  const userSections: IAddOrEditModalSections[] = [
    {
      id: 'admin.userType',
      props: { form },
      Section: userTypeSection,
    },
    {
      id: 'customers',
      props: { form },
      Section: userCustomersSection,
    },
    {
      id: 'admin.personalInformation',
      props: { form },
      Section: userPersonalInfoSection,
    },
    {
      id: 'form.password',
      props: { form },
      Section: userPasswordSection,
    },
  ];

  return (
    <div>
      <AddOrEditModal
        title={title}
        sections={userSections}
        visible={visible}
        onCloseModal={onCloseModal}
        form={form}
        onFinish={onFinish}
      />
    </div>
  );
};

export default UserCommonModal;
