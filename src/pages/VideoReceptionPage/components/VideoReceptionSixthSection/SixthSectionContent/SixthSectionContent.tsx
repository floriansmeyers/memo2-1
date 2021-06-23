import React from 'react';
import { Form, Input, Select } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { IVideoReceptionFields, renderFields, useTranslation } from 'utils';
import './SixthSectionContent.scss';

const { Option } = Select;

interface ISixthSectionContent {
  currentLocationKey: number | string;
  removeLocation: (currentLocationKey: number | string) => void;
}

const SixthSectionContent: React.FC<ISixthSectionContent> = ({
  currentLocationKey,
  removeLocation,
}) => {
  const translate = useTranslation();

  const requiredTrueRule = {
    required: true,
    message: translate('form.isrequired'),
    whitespace: true,
  };

  const selectField = (
    <Select>
      <Option key="0" value={0}>
        0 deg
      </Option>
      <Option key="90" value={90}>
        90 deg
      </Option>
      <Option key="180" value={180}>
        180 deg
      </Option>
      <Option key="270" value={270}>
        270 deg
      </Option>
    </Select>
  );

  const sixthSectionFields: IVideoReceptionFields[] = [
    {
      name: `locations.${currentLocationKey}.title`,
      label: translate('form.locationTitle'),
      rules: [requiredTrueRule],
      field: <Input />,
    },
    {
      name: `locations.${currentLocationKey}.description`,
      label: translate('form.locationDescription'),
      rules: [requiredTrueRule],
      field: <Input />,
    },
    {
      name: `locations.${currentLocationKey}.agentSideRotation`,
      label: translate('video.userScreenRotate'),
      rules: [{ ...requiredTrueRule, type: 'number' }],
      field: selectField,
    },
    {
      name: `locations.${currentLocationKey}.clientSideRotation`,
      label: translate('video.visitorScreenRotate'),
      rules: [{ ...requiredTrueRule, type: 'number' }],
      field: selectField,
    },
    {
      name: `locations.${currentLocationKey}.clientSideRotationInputStream`,
      label: translate('video.visitorScreenRotateInputStream'),
      rules: [{ ...requiredTrueRule, type: 'number' }],
      field: selectField,
    },
    {
      name: `locations.${currentLocationKey}.id`,
      field: <Input type="hidden" />,
    },
  ];

  return (
    <Form.Item className="video-reception__sixth-section-content">
      <MinusCircleOutlined onClick={() => removeLocation(currentLocationKey)} />
      {renderFields(sixthSectionFields)}
    </Form.Item>
  );
};

export default SixthSectionContent;
