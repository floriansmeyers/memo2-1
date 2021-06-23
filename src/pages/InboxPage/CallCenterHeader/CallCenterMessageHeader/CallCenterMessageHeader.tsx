import React from 'react';
import { PhoneOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button } from 'components';
import {
  ButtonTypes,
  useTranslation,
  mockMessagePreviewTitle,
  mockCallCenterHeaderSubtitle,
} from 'utils';
import './CallCenterMessageHeader.scss';

const CallCenterMessageHeader: React.FC = () => {
  const translate = useTranslation();

  return (
    <div className="call-center-message-header">
      <div className="call-center-message-title">
        {mockMessagePreviewTitle}
        <span className="call-center-submessages">{mockCallCenterHeaderSubtitle}</span>
      </div>

      <div className="call-center-message-icons">
        <PrinterOutlined />
        <Button text={translate('markAsRead')} type={ButtonTypes.LightBlue} />
        <Button icon={<PhoneOutlined />} text={translate('CALLBACK')} type={ButtonTypes.Beige} />
      </div>
    </div>
  );
};

export default CallCenterMessageHeader;
