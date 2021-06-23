import React, { useEffect } from 'react';
import { Form, Row, Col, Input, Select } from 'antd';
import { SaveFilled } from '@ant-design/icons';
import { Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import {
  AddressInput,
  CustomerContactInformation,
  CustomerContactInformationInput,
  CustomerContactInformationTypes,
  Maybe,
  Scalars,
  useUpdateCustomerMutation,
} from 'models/graphql';
import './CustomerInfoForm.scss';

const { Option } = Select;

export interface ICustomerInfoFormProps {
  informationList?: CustomerContactInformation[];
  customerContactInformationType: CustomerContactInformationTypes;
  customerId?: Maybe<Scalars['ID']>;
}

const CustomerInfoForm: React.FC<ICustomerInfoFormProps> = ({
  informationList,
  customerContactInformationType,
  customerId,
}) => {
  const [updateCustomer, { loading: updateCustomerLoading }] = useUpdateCustomerMutation();

  const translate = useTranslation();
  const [form] = Form.useForm();

  const user = informationList?.find((info) => info.type === customerContactInformationType);

  useEffect(() => {
    const address = user?.address;
    form.setFieldsValue({
      street: address?.street?.trim(),
      streetNumber: address?.streetNumber?.trim(),
      box: address?.box?.trim(),
      postalCode: address?.postalCode?.trim(),
      city: address?.city?.trim(),
      country: address?.country?.trim(),
      mobilePhoneNumber: user?.mobilePhoneNumber?.trim(),
      phoneNumber1: user?.phoneNumber1?.trim(),
      phoneNumber2: user?.phoneNumber2?.trim(),
      faxNumber: user?.faxNumber?.trim(),
      emailAddress: user?.emailAddress?.trim(),
      website: user?.website?.trim(),
    });
  }, [user]);

  const emptyData: CustomerContactInformation = {
    type: customerContactInformationType,
    address: {
      city: null,
      country: null,
      postalCode: null,
      street: null,
      streetNumber: null,
    },
    emailAddress: null,
    faxNumber: null,
    mobilePhoneNumber: null,
    phoneNumber1: null,
    phoneNumber2: null,
    website: null,
  };

  const informationListWithoutTypename = informationList?.map(
    ({ __typename, address, ...rest }): CustomerContactInformationInput => {
      const addressInfo = {
        street: address?.street,
        streetNumber: address?.streetNumber,
        box: address?.box,
        postalCode: address?.postalCode,
        city: address?.city,
        country: address?.country,
      };

      return { ...rest, address: { ...addressInfo } };
    },
  );

  const onEmptyClickHandler = async () => {
    const newInformationList = informationListWithoutTypename?.map((item) =>
      item.type === customerContactInformationType ? emptyData : item,
    );

    await updateCustomer({
      variables: {
        id: customerId!,
        input: {
          info: {
            contactInformationList: newInformationList!,
          },
        },
      },
    });
  };

  const onFinishHandler = async (values: CustomerContactInformation & AddressInput) => {
    const newData: CustomerContactInformation = {
      type: customerContactInformationType,
      address: {
        city: values.city,
        country: values.country,
        postalCode: values.postalCode,
        street: values.street,
        streetNumber: values.streetNumber,
        box: values.box,
      },
      emailAddress: values.emailAddress,
      faxNumber: values.faxNumber,
      mobilePhoneNumber: values.mobilePhoneNumber,
      phoneNumber1: values.phoneNumber1,
      phoneNumber2: values.phoneNumber2,
      website: values.website,
    };

    const newInformationList = informationListWithoutTypename?.map((item) =>
      item.type === customerContactInformationType ? newData : item,
    );

    await updateCustomer({
      variables: {
        id: customerId!,
        input: {
          info: {
            contactInformationList: newInformationList!,
          },
        },
      },
    });
  };

  return (
    <Form form={form} onFinish={onFinishHandler} className="customer-info-form">
      <Form.Item className="top-form">
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item name="street" label={translate('street')}>
              <Input placeholder={translate('street')} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="streetNumber" label={translate('streetNumber')}>
              <Input placeholder={translate('streetNumber')} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="box" label={translate('box')}>
              <Input placeholder={translate('box')} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={8}>
            <Form.Item name="postalCode" label={translate('postalCode')}>
              <Input placeholder={translate('postalCode')} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="city" label={translate('city')}>
              <Input placeholder={translate('city')} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="country" label={translate('country')}>
              <Select className="form-select" placeholder={translate('country')}>
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item className="bottom-form">
        <Row gutter={20}>
          <Col span={8}>
            <Form.Item name="mobilePhoneNumber" label={translate('mobilePhoneNumber')}>
              <Input placeholder={translate('mobilePhoneNumber')} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="phoneNumber1" label={translate('phoneNumber1')}>
              <Input placeholder={translate('phoneNumber1')} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="phoneNumber2" label={translate('phoneNumber2')}>
              <Input placeholder={translate('phoneNumber2')} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={8}>
            <Form.Item name="faxNumber" label={translate('faxNumber')}>
              <Input placeholder={translate('faxNumber')} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="emailAddress" label={translate('emailAddress')}>
              <Input placeholder={translate('emailAddress')} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="website" label={translate('website')}>
              <Input placeholder={translate('website')} />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Row justify="end" className="info-form-actions">
        <Row>
          <Button
            onClick={onEmptyClickHandler}
            text={translate('empty')}
            type={ButtonTypes.Gray}
            disabled={updateCustomerLoading}
          />
          <Button
            htmlType="submit"
            icon={<SaveFilled />}
            text={translate('save')}
            type={ButtonTypes.Blue}
            disabled={updateCustomerLoading}
          />
        </Row>
      </Row>
    </Form>
  );
};

export default CustomerInfoForm;
