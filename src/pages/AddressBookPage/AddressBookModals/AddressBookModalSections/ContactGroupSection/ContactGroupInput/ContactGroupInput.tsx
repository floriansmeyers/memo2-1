import React, { useState } from 'react';
import { Form, Row, Col, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { CustomerCrmContactSubGroup, useGetCustomerCrmContactGroupsQuery } from 'models/graphql';
import { useTranslation } from 'utils';
import { SelectValue } from 'antd/es/select';

export interface IContactGroupInputProps {
  id: number;
  onRemoveClick: (index: number | number[]) => void;
  fieldKey: number;
}

const ContactGroupInput: React.FC<IContactGroupInputProps> = ({ onRemoveClick, id, fieldKey }) => {
  const translate = useTranslation();
  const [group, setGroup] = useState<SelectValue>();
  const {
    data: crmContactGroupsData,
    loading: crmContactGroupsLoading,
  } = useGetCustomerCrmContactGroupsQuery();

  const subGroups = React.useMemo((): CustomerCrmContactSubGroup[] => {
    if (group) {
      const sub = crmContactGroupsData?.customerCrmContactGroups.items.find(
        (contactGroup) => contactGroup.id === group,
      );

      if (sub?.subGroups) {
        return sub.subGroups;
      }
    }

    return [];
  }, [group, crmContactGroupsData?.customerCrmContactGroups]);

  return (
    <div className="contact-group-input">
      <Row gutter={15}>
        <Col span={11}>
          <Form.Item
            fieldKey={[fieldKey, 'groupId']}
            name={[id, 'groupId']}
            label={translate('group')}
          >
            <Select onChange={(v) => setGroup(v)} placeholder={translate('group')}>
              {crmContactGroupsData?.customerCrmContactGroups.items.map((crmContactGroup) => (
                <Select.Option key={crmContactGroup.id} value={crmContactGroup.id}>
                  {crmContactGroup.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            fieldKey={[fieldKey, 'subGroupId']}
            name={[id, 'subGroupId']}
            label={translate('subgroup')}
          >
            <Select disabled={!group} placeholder={translate('subgroup')}>
              {subGroups.map((crmContactGroup) => (
                <Select.Option key={crmContactGroup.id} value={crmContactGroup.id}>
                  {crmContactGroup.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={2} className="icon">
          <DeleteOutlined style={{ marginTop: 20 }} onClick={() => onRemoveClick(id)} />
        </Col>
      </Row>
    </div>
  );
};

export default ContactGroupInput;
