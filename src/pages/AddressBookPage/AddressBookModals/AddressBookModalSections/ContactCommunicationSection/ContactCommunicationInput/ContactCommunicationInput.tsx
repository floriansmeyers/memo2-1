import React, { useState } from 'react';
import { Form, Row, Col, Input, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { SelectValue } from 'antd/es/select';
import {
  CustomerCrmContactCommunicationInput,
  CustomerCrmContactCommunicationStatusses,
  useGetCustomerCrmContactCommunicationTypesQuery,
  User,
} from 'models/graphql';
import { useGetFormInputRequiredRule, useTranslation } from 'utils';

export interface IContactCommunicationInputProps {
  id: number;
  fieldKey: number;
  onRemoveClick: (index: number | number[]) => void;
  initialValues: User & { communications: CustomerCrmContactCommunicationInput[] };
}

const ContactCommunicationInput: React.FC<IContactCommunicationInputProps> = ({
  onRemoveClick,
  id,
  fieldKey,
  initialValues,
}) => {
  const translate = useTranslation();
  const [type, setType] = useState<SelectValue>();
  const [forwardStatus, setForwardStatus] = useState<SelectValue>();
  const [passThroughStatus, setPassThroughStatus] = useState<SelectValue>();
  const { data: communicationTypesData } = useGetCustomerCrmContactCommunicationTypesQuery();
  const statuses: CustomerCrmContactCommunicationStatusses[] = [
    CustomerCrmContactCommunicationStatusses.Always,
    CustomerCrmContactCommunicationStatusses.Never,
    CustomerCrmContactCommunicationStatusses.UnderConditions,
  ];

  const category = React.useMemo(() => {
    const match = communicationTypesData?.customerCrmContactCommunicationTypes.items.find(
      (crmContactItem) => crmContactItem.id === type,
    );

    if (match?.name) {
      return match.name;
    }

    return translate('none');
  }, [type]);

  const fwdStatusFromApi = initialValues.communications[fieldKey]?.forwardStatus as string;
  const passThroughConditionFromApi = initialValues.communications[fieldKey]
    ?.passThroughStatus as string;

  const conditionToDisplay = (selectedValue: SelectValue | undefined, apiValue: string) => {
    if (
      apiValue === CustomerCrmContactCommunicationStatusses.UnderConditions &&
      (!selectedValue || selectedValue === CustomerCrmContactCommunicationStatusses.UnderConditions)
    ) {
      return true;
    }

    return selectedValue === CustomerCrmContactCommunicationStatusses.UnderConditions;
  };

  return (
    <div className="contact-communication-input">
      <Row className="row">
        <Col span={22}>
          <Row gutter={20} className="row">
            <Col span={12}>
              <Form.Item
                fieldKey={[fieldKey, 'sequence']}
                name={[fieldKey, 'sequence']}
                hidden={true}
                initialValue={fieldKey + 1}
                style={{ display: 'none' }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={translate('communicationCategory')}
                fieldKey={[fieldKey, 'typeId']}
                name={[id, 'typeId']}
                rules={[useGetFormInputRequiredRule()]}
              >
                <Select
                  onChange={(v) => setType(v)}
                  placeholder={translate('communicationCategory')}
                >
                  {communicationTypesData?.customerCrmContactCommunicationTypes.items.map(
                    (communicationType) => (
                      <Select.Option key={communicationType.id} value={communicationType.id}>
                        {communicationType.name}
                      </Select.Option>
                    ),
                  )}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[useGetFormInputRequiredRule()]}
                label={category}
                fieldKey={[fieldKey, 'value']}
                name={[id, 'value']}
              >
                <Input placeholder={category} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={20} className="row">
            <Col span={12}>
              <Form.Item
                label={translate('forwarding')}
                fieldKey={[fieldKey, 'forwardStatus']}
                name={[id, 'forwardStatus']}
                rules={[useGetFormInputRequiredRule()]}
              >
                <Select onChange={(v) => setForwardStatus(v)} placeholder={translate('forwarding')}>
                  {statuses.map((status) => (
                    <Select.Option key={`forward${status}`} value={status}>
                      {translate(status)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[useGetFormInputRequiredRule()]}
                label={translate('passThrough')}
                fieldKey={[fieldKey, 'passThroughStatus']}
                name={[id, 'passThroughStatus']}
              >
                <Select
                  onChange={(v) => setPassThroughStatus(v)}
                  placeholder={translate('passThrough')}
                >
                  {statuses.map((status) => (
                    <Select.Option key={`passThrough${status}`} value={status}>
                      {translate(status)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              {conditionToDisplay(forwardStatus, fwdStatusFromApi) && (
                <Form.Item
                  label={translate('forwardCondition')}
                  fieldKey={[fieldKey, 'forwardCondition']}
                  name={[id, 'forwardCondition']}
                  rules={[{ required: true, message: translate('form.isrequired') }]}
                >
                  <Input placeholder={translate('condition')} />
                </Form.Item>
              )}
            </Col>
            <Col span={12}>
              {conditionToDisplay(passThroughStatus, passThroughConditionFromApi) && (
                <Form.Item
                  fieldKey={[fieldKey, 'passThroughCondition']}
                  name={[id, 'passThroughCondition']}
                  label={translate('passThroughCondition')}
                  rules={[{ required: true, message: translate('form.isrequired') }]}
                >
                  <Input placeholder={translate('condition')} />
                </Form.Item>
              )}
            </Col>
          </Row>
        </Col>
        <Col span={2} className="icon">
          <DeleteOutlined onClick={() => onRemoveClick(id)} />
        </Col>
      </Row>
    </div>
  );
};

export default ContactCommunicationInput;
