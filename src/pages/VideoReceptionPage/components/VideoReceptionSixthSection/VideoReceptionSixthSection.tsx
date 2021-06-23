import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { ButtonTypes, useTranslation } from 'utils';
import { Button } from 'components';
import { CustomerLocation } from 'models/graphql';
import SixthSectionContent from './SixthSectionContent/SixthSectionContent';
import './VideoReceptionSixthSection.scss';

interface IVideoReceptionSixthSectionProps {
  locations?: CustomerLocation[];
}

const VideoReceptionSixthSection: React.FC<IVideoReceptionSixthSectionProps> = ({ locations }) => {
  const translate = useTranslation();

  const [locationKey, setLocationKey] = useState(0);
  const [locationKeys, setLocationKeys] = useState<(number | string)[]>([]);

  useEffect(() => {
    if (locations) {
      setLocationKeys(locations.map((loc) => loc.id));
    }
  }, [locations]);

  const addLocation = () => {
    const nextKeys = locationKeys.concat(locationKey);
    setLocationKey(locationKey + 1);
    setLocationKeys(nextKeys);
  };

  const removeLocation = (removeKey: number | string) => {
    const nextKeys = locationKeys.filter((key) => key !== removeKey);
    setLocationKeys(nextKeys);
  };

  const renderContent = () =>
    locationKeys.map((key) => (
      <SixthSectionContent key={key} currentLocationKey={key} removeLocation={removeLocation} />
    ));

  return (
    <>
      {renderContent()}
      <Button
        icon={<PlusOutlined />}
        text={translate('form.addLocation')}
        type={ButtonTypes.LightBlue}
        onClick={() => addLocation()}
      />
    </>
  );
};

export default VideoReceptionSixthSection;
