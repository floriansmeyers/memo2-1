import React from 'react';
import { Form, Row, Col, Input, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { SortOrder, useGetCountriesQuery } from 'models/graphql';
import { useGetFormInputRequiredRule, useTranslation } from 'utils';

export interface IContactAddressInputProps {
  id: number;
  fieldKey: number;
  onRemoveClick: (index: number | number[]) => void;
}

const ContactAddressInput: React.FC<IContactAddressInputProps> = ({
  onRemoveClick,
  id,
  fieldKey,
}) => {
  const translate = useTranslation();
  const {
    data: countriesData,
    loading: countriesLoading,
    error: countriesError,
  } = useGetCountriesQuery({ variables: { sort: [{ field: 'name', order: SortOrder.Asc }] } });

  const handleRemove = (idx: number) => {
    onRemoveClick(idx);
  };

  return (
    <div className="contact-address-input">
      <Row gutter={15}>
        <Col span={22}>
          <Row gutter={15}>
            <Col span={6}>
              <Form.Item
                fieldKey={[fieldKey, 'postalCode']}
                name={[id, 'postalCode']}
                label={translate('postalCode')}
              >
                <Input placeholder={translate('postalCode')} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                fieldKey={[fieldKey, 'city']}
                name={[id, 'city']}
                label={translate('city')}
              >
                <Input placeholder={translate('city')} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                fieldKey={[fieldKey, 'country']}
                name={[id, 'country']}
                label={translate('country')}
              >
                <Select placeholder={translate('country')}>
                  {countriesData?.countries.items.map((country) => (
                    <Select.Option key={country.iso} value={country.iso}>
                      {country.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item
                fieldKey={[fieldKey, 'address']}
                name={[id, 'address']}
                label={translate('address')}
              >
                <Input placeholder={translate('address')} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                fieldKey={[fieldKey, 'description']}
                name={[id, 'description']}
                label={translate('description')}
                rules={[useGetFormInputRequiredRule()]}
              >
                <Input placeholder={translate('description')} />
              </Form.Item>
            </Col>
          </Row>
        </Col>

        <Col span={2} className="icon">
          <DeleteOutlined onClick={() => handleRemove(id)} />
        </Col>
      </Row>
    </div>
  );
};

export default ContactAddressInput;
