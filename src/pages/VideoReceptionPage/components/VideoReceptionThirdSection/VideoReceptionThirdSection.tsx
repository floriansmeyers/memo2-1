import React from 'react';
import { Form } from 'antd';
import { useTranslation, IVideoReceptionSectionProps } from 'utils';
import ColorPicker from './ColorPicker/ColorPicker';
import './VideoReceptionThirdSection.scss';

const VideoReceptionThirdSection: React.FC<IVideoReceptionSectionProps> = ({ form }) => {
  const translate = useTranslation();

  const colorPickersData = [
    {
      name: 'buttonsBackground',
      label: translate('form.buttonsBackground'),
    },
    {
      name: 'buttonsText',
      label: translate('form.buttonsText'),
    },
    {
      name: 'text',
      label: translate('form.text'),
    },
    {
      name: 'background',
      label: translate('form.background'),
    },
  ];

  const renderColorPickers = () =>
    colorPickersData.map(({ name, label }) => (
      <Form.Item key={label} name={name} className="color-picker__input-container" label={label}>
        <ColorPicker name={name} form={form} />
      </Form.Item>
    ));

  return <>{renderColorPickers()}</>;
};

export default VideoReceptionThirdSection;
