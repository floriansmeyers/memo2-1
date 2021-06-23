import React, { useState, useEffect } from 'react';
import { useGetDefaultLocale } from 'graphql/hooks/useGetDefaultLocale';
import { Loader } from 'components';
import { IVideoReceptionSectionProps } from 'utils';
import FourthSectionContent from './FourthSectionContent';
import './VideoReceptionFourthSection.scss';

const VideoReceptionFourthSection: React.FC<IVideoReceptionSectionProps> = ({
  selectedLanguages,
}) => {
  const { defaultLocale, defaultLocaleLoading } = useGetDefaultLocale();
  const [activeLanguage, setActiveLanguage] = useState('NL');
  const [placeholders, setPlaceholders] = useState({
    initiateCall: '',
    welcome: '',
    intro: '',
    closed: '',
    unavailable: '',
  });

  const renderSelectedLanguages = () =>
    selectedLanguages?.map((language: string) => (
      <span
        key={language}
        className={activeLanguage === language ? 'language-button active' : 'language-button'}
        role="button"
        tabIndex={0}
        onClick={() => setActiveLanguage(language)}
      >
        {language}
      </span>
    ));

  const getLocaleContent = (type: string) => {
    if (!defaultLocale.length) {
      return null;
    }

    const localeMatch = defaultLocale?.find((loc) => loc.type.toLowerCase() === type.toLowerCase());

    if (!localeMatch) {
      throw new Error(`No locale found with type "${type}"`);
    }

    const languageMatch = localeMatch.content.find(
      (content) => content.language.toLowerCase() === activeLanguage.toLowerCase(),
    );

    return languageMatch?.value;
  };

  useEffect(() => {
    Object.keys(placeholders).forEach((field) => {
      const newFieldValue = getLocaleContent(field);

      if (newFieldValue) {
        setPlaceholders((prevState) => ({ ...prevState, [field]: newFieldValue }));
      }
    });
  }, [activeLanguage, defaultLocale]);

  if (defaultLocaleLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="language-buttons-container">{renderSelectedLanguages()}</div>
      <FourthSectionContent language={activeLanguage} placeholders={placeholders} />
    </>
  );
};

export default VideoReceptionFourthSection;
