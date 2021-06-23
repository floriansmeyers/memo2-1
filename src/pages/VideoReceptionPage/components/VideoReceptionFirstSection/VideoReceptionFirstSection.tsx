import React from 'react';
import { Input, Select, Checkbox } from 'antd';
import {
  useTranslation,
  IVideoReceptionFields,
  renderFields,
  renderOptions,
  IVideoReceptionSectionProps,
} from 'utils';
import './VideoReceptionFirstSection.scss';

const CheckboxGroup = Checkbox.Group;

const VideoReceptionFirstSection: React.FC<IVideoReceptionSectionProps> = ({
  form,
  selectedLanguages,
  setSelectedLanguages = () => {},
}) => {
  const translate = useTranslation();

  const updateLanguages = (checkedValues: string[]) => {
    const defaultLanguage = form?.getFieldValue('defaultLanguage');

    checkedValues.includes(defaultLanguage) ||
      form?.setFieldsValue({
        defaultLanguage: checkedValues[0],
      });

    setSelectedLanguages(checkedValues);
  };

  const checkboxOptions = [
    { label: translate('dutch'), value: 'NL' },
    { label: translate('french'), value: 'FR' },
    { label: translate('english'), value: 'EN' },
    { label: translate('german'), value: 'DE' },
  ];

  const requiredTrueRule = [{ required: true, message: translate('form.isrequired') }];

  const firstSectionFields: IVideoReceptionFields[] = [
    {
      name: 'name',
      label: translate('form.name'),
      rules: requiredTrueRule,
      field: <Input />,
    },
    {
      name: 'languages',
      label: translate('form.languages'),
      rules: requiredTrueRule,
      field: (
        <CheckboxGroup
          options={checkboxOptions}
          onChange={(checkedValues) => updateLanguages(checkedValues as string[])}
        />
      ),
    },
    {
      name: 'defaultLanguage',
      label: translate('form.defaultLanguage'),
      rules: requiredTrueRule,
      field: <Select>{renderOptions(selectedLanguages)}</Select>,
    },
  ];

  return <>{renderFields(firstSectionFields)}</>;
};

export default VideoReceptionFirstSection;
