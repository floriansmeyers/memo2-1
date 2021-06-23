import React, { useEffect, useState } from 'react';
import { Form, Input, Switch } from 'antd';
import {
  useTranslation,
  IVideoReceptionFields,
  renderFields,
  IVideoReceptionSectionProps,
} from 'utils';
import './VideoReceptionFifthSection.scss';

const VideoReceptionFifthSection: React.FC<IVideoReceptionSectionProps> = ({ form }) => {
  const [checked, setChecked] = useState(!!form?.getFieldValue('redirect'));
  const translate = useTranslation();

  useEffect(() => {
    if (form && !!form.getFieldValue('redirect') !== checked) {
      form?.setFieldsValue({
        redirect: checked,
      });
    }
  }, [checked]);

  const requiredTrueRule = [{ required: true, message: translate('form.isrequired') }];

  const fifthSectionFields: IVideoReceptionFields[] = [
    {
      name: 'timeoutDelay',
      label: translate('form.timeoutDelay'),
      rules: requiredTrueRule,
      field: <Input type="number" />,
    },
    {
      name: 'redirect',
      label: translate('form.redirect'),
      rules: [],
      field: (
        <Switch
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
      ),
    },
    {
      name: 'redirectDelay',
      label: translate('form.redirectDelay'),
      rules: requiredTrueRule,
      field: <Input type="number" />,
    },
  ];

  return (
    <Form.Item className="video-reception__fifth-section">
      {renderFields(fifthSectionFields)}
    </Form.Item>
  );
};

export default VideoReceptionFifthSection;
