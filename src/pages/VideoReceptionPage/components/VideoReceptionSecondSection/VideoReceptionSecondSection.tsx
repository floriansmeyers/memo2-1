import React from 'react';
import { Select } from 'antd';
import {
  useTranslation,
  IVideoReceptionFields,
  renderFields,
  renderOptions,
  IVideoReceptionSectionProps,
} from 'utils';
import './VideoReceptionSecondSection.scss';

const VideoReceptionSecondSection: React.FC<IVideoReceptionSectionProps> = ({
  logoImage,
  backgroundImage,
}) => {
  const translate = useTranslation();

  const requiredTrueRule = [{ required: true, message: translate('form.isrequired') }];

  let logo = null;
  let background = null;

  if (logoImage) {
    logo = <img className="preview" alt="preview" src={logoImage} />;
  }

  if (backgroundImage) {
    background = <img className="preview" alt="preview" src={backgroundImage} />;
  }

  const templates = ['default', 'custom-corda'];

  const secondSectionFields: IVideoReceptionFields[] = [
    {
      name: 'template',
      label: translate('form.template'),
      rules: requiredTrueRule,
      field: <Select>{renderOptions(templates)}</Select>,
    },
    {
      name: 'logoImage',
      label: translate('form.logoImage'),
      rules: requiredTrueRule,
      field: logo,
    },
    {
      name: 'backgroundImage',
      label: translate('form.backgroundImage'),
      rules: [],
      field: background,
    },
  ];

  return <>{renderFields(secondSectionFields)}</>;
};

export default VideoReceptionSecondSection;
