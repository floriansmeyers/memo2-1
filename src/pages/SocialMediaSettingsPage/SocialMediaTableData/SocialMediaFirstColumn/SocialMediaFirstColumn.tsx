import React from 'react';
import { Button as AntdButton } from 'antd';
import { ChannelType } from 'models/graphql';
import { PLATFORMS, STATES } from '../../../../constants';
import './SocialMediaFirstColumn.scss';

interface ISocialMediaFirstColumnProps {
  active: boolean;
  type: string;
  name?: string;
}

export const getChannelIcon = {
  [ChannelType.TextFacebook]: `/socials/facebook.png`,
  [ChannelType.TextTwitter]: `/socials/twitter.png`,
  [ChannelType.TextWhatsapp]: `/socials/whatsapp.png`,
};

export type Icon = keyof typeof getChannelIcon;

const SocialMediaFirstColumn: React.FC<ISocialMediaFirstColumnProps> = ({ active, type }) => {
  const getSocialPlatformName = (str: string): string | undefined =>
    PLATFORMS.find((i) => str.toLowerCase().includes(i));

  const platformName = getSocialPlatformName(type);

  const getState = (state: boolean) => {
    const states = {
      true: STATES.active,
      false: STATES.pause,
    };
    return states[String(state) as keyof typeof states];
  };

  return (
    <div className="social-media__first-column">
      <AntdButton className={`platform-button platform-button--${getState(active).toLowerCase()}`}>
        {getState(active)}
      </AntdButton>
      <img
        src={getChannelIcon[type as Icon]}
        alt={platformName}
        className={`platform-logo platform-logo--${platformName}`}
      />
      <span className="platform-name">{platformName}</span>
    </div>
  );
};

export default SocialMediaFirstColumn;
