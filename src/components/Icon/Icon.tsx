import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconAttachment } from './svg/attachment.svg';
import { ReactComponent as IconBook } from './svg/book.svg';
import { ReactComponent as IconIncoming } from './svg/incoming.svg';
import { ReactComponent as IconOutgoing } from './svg/outgoing.svg';
import { ReactComponent as SunIcon } from './svg/sun.svg';
import { ReactComponent as MoonIcon } from './svg/moon.svg';
import { ReactComponent as CallFromCaller } from './svg/returnCallFromCaller.svg';
import { ReactComponent as CallToCaller } from './svg/returnCallToCaller.svg';
import { ReactComponent as IconDefault } from './svg/default.svg';
import './Icon.scss';

interface IIconProps {
  name: string;
}

const Icon: React.FC<IIconProps> = ({ name }): JSX.Element => {
  switch (name) {
    case 'attachment':
      return <IconAttachment className="icon-tab" />;
    case 'book':
      return <IconBook className="icon-tab" />;
    case 'incoming':
      return <IconIncoming className="icon-tab" />;
    case 'outgoing':
      return <IconOutgoing className="icon-tab" />;
    case 'sun':
      return <SunIcon className="icon-tab" />;
    case 'moon':
      return <MoonIcon className="icon-tab" />;
    case 'returnCallFromCaller':
      return <CallFromCaller className="icon-tab" />;
    case 'returnCallToCaller':
      return <CallToCaller className="icon-tab" />;
    default:
      return <IconDefault className="icon-default" />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
