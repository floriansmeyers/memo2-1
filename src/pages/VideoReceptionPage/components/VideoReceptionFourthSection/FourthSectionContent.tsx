import React from 'react';
import { Input } from 'antd';
import { useTranslation, IVideoReceptionFields, renderFields } from 'utils';

const { TextArea } = Input;

interface IFourthSectionContentProps {
  language: string;
  placeholders: {
    initiateCall: string;
    welcome: string;
    intro: string;
    closed: string;
    unavailable: string;
  };
}

const FourthSectionContent: React.FC<IFourthSectionContentProps> = ({ language, placeholders }) => {
  const translate = useTranslation();

  const { welcome, intro, closed, unavailable, initiateCall } = placeholders;

  const fourthSectionFields: IVideoReceptionFields[] = [
    {
      name: `locale.${language}.initiateCall`,
      label: translate('form.initiateCall'),
      rules: [],
      field: <Input placeholder={initiateCall} />,
    },
    {
      name: `locale.${language}.welcome`,
      label: translate('form.welcome'),
      rules: [],
      field: <Input placeholder={welcome} />,
    },
    {
      name: `locale.${language}.intro`,
      label: translate('form.intro'),
      rules: [],
      field: <TextArea placeholder={intro} />,
    },
    {
      name: `locale.${language}.closed`,
      label: translate('form.closed'),
      rules: [],
      field: <TextArea placeholder={closed} />,
    },
    {
      name: `locale.${language}.unavailable`,
      label: translate('form.unavailable'),
      rules: [],
      field: <TextArea placeholder={unavailable} />,
    },
  ];

  return <> {renderFields(fourthSectionFields)} </>;
};

export default FourthSectionContent;
