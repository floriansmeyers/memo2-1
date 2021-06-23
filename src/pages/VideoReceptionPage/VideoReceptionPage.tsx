import React, { useEffect, useState, useCallback, createElement } from 'react';
import { Form } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  useCreateVideoCallSettingsMutation,
  useUpdateVideoCallSettingsMutation,
} from 'models/graphql';
import { useGetVideoCallSettings } from 'graphql/hooks/useGetVideoCallSettings';
import { ButtonTypes, IVideoReceptionSectionProps, useTranslation } from 'utils';
import { Button, Loader } from 'components';
import {
  VideoReceptionWrapper,
  VideoReceptionFirstSection,
  VideoReceptionSecondSection,
  VideoReceptionThirdSection,
  VideoReceptionFourthSection,
  VideoReceptionFifthSection,
  VideoReceptionSixthSection,
  VideoReceptionModal,
} from './components';
import './VideoReceptionPage.scss';

interface IVideoReceptionSections {
  title: string;
  props: IVideoReceptionSectionProps;
  Component: React.FC<IVideoReceptionSectionProps>;
}

const VideoReceptionPage: React.FC = () => {
  const translate = useTranslation();
  const [form] = Form.useForm();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const { videoCallSettings, videoCallSettingsLoading } = useGetVideoCallSettings();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    name,
    defaultLanguage,
    logoImage,
    backgroundImage,
    locale,
    colors,
    locations,
    timeoutDelay = 30,
    redirect = true,
    redirectDelay = 30,
    languages = ['NL'],
    template = ['DEFAULT'],
  } = videoCallSettings || {};

  const upperCaseLanguages = languages?.map((language: string) => language.toUpperCase());
  const upperCaseDefaultLanguage = defaultLanguage?.toUpperCase() || upperCaseLanguages?.[0];
  let upperCaseTemplate: string | string[];

  if (Array.isArray(template)) {
    upperCaseTemplate = template?.map((_template: string) => _template.toUpperCase());
  } else {
    upperCaseTemplate = template?.toUpperCase();
  }

  const mapLocales = useCallback(
    () =>
      upperCaseLanguages?.reduce((acc, language) => {
        const mappedLocales: { [type: string]: string } | undefined =
          locale &&
          locale
            .map((item) => ({
              type: item.type,
              content: item.content.find(
                (content) => content.language.toLowerCase() === language.toLowerCase(),
              ),
            }))
            .reduce(
              (previous, current) => ({
                ...previous,
                [current.type]: current.content ? current.content.value : '',
              }),
              {},
            );

        return {
          ...acc,
          ...Object.entries(mappedLocales || {}).reduce(
            (innerAcc, [key, value]) => ({
              ...innerAcc,
              [`locale.${language}.${key}`]: value,
            }),
            {},
          ),
        };
      }, {}),
    [locale],
  );

  const mapLocations = () => {
    const newArr = locations?.reduce(
      (acc, location) => ({
        ...acc,
        ...Object.entries(location || {})
          .filter(([key]) => key !== '__typename')
          .reduce(
            (innerAcc, [key, value]) => ({
              ...innerAcc,
              [`locations.${location.id}.${key}`]: value,
            }),
            {},
          ),
      }),
      {},
    );

    return newArr;
  };

  const {
    buttonsBackground = '#00678F',
    buttonsText = '#FFFFFF',
    text = '#474747',
    background = '#FFFFFF',
  } = colors || {};

  useEffect(() => {
    form.resetFields();

    upperCaseLanguages && setSelectedLanguages(upperCaseLanguages);
    form.setFieldsValue({
      ...mapLocales(),
      ...mapLocations(),
      name,
      timeoutDelay,
      redirect,
      redirectDelay,
      buttonsBackground,
      buttonsText,
      text,
      background,
      languages: upperCaseLanguages,
      defaultLanguage: upperCaseDefaultLanguage,
      template: upperCaseTemplate,
    });
  }, [videoCallSettings]);

  useEffect(() => {
    setSelectedLanguages(form?.getFieldValue('languages'));
  }, [form?.getFieldValue('languages')]);

  useCreateVideoCallSettingsMutation();
  useUpdateVideoCallSettingsMutation();

  const videoReceptionSections: IVideoReceptionSections[] = [
    {
      title: translate('general'),
      props: { form, selectedLanguages, setSelectedLanguages },
      Component: VideoReceptionFirstSection,
    },
    {
      title: 'Opmaak',
      props: {
        logoImage,
        backgroundImage,
      },
      Component: VideoReceptionSecondSection,
    },
    {
      title: 'Kleuren',
      props: { form },
      Component: VideoReceptionThirdSection,
    },
    {
      title: 'Berichten',
      props: { selectedLanguages },
      Component: VideoReceptionFourthSection,
    },
    {
      title: translate('formTitle.delays'),
      props: { form },
      Component: VideoReceptionFifthSection,
    },
    {
      title: translate('formTitle.locations'),
      props: { locations },
      Component: VideoReceptionSixthSection,
    },
  ];

  const renderSections = () =>
    videoReceptionSections.map(({ title, props, Component }) => (
      <VideoReceptionWrapper key={title} title={title}>
        {createElement<typeof props>(Component, props)}
      </VideoReceptionWrapper>
    ));

  if (videoCallSettingsLoading) {
    return <Loader />;
  }

  return (
    <div className="video-reception-page">
      {videoCallSettings && (
        <Button
          icon={<QuestionCircleOutlined />}
          text={translate('howToImplementVideoReception')}
          type={ButtonTypes.Green}
          onClick={() => setModalVisible(true)}
        />
      )}
      <VideoReceptionModal
        visible={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        defaultLanguage={defaultLanguage}
        locations={locations}
      />

      <Form
        form={form}
        // onFinish={onFinishHandler}
        className="video-reception__form"
        initialValues={{
          ...mapLocales(),
          ...mapLocations(),
          name,
          timeoutDelay,
          redirect,
          redirectDelay,
          buttonsBackground,
          buttonsText,
          text,
          background,
          languages: upperCaseLanguages,
          defaultLanguage: upperCaseDefaultLanguage,
          template: upperCaseTemplate,
        }}
      >
        {renderSections()}
      </Form>
    </div>
  );
};

export default VideoReceptionPage;
