import React from 'react';
import { FileOutlined } from '@ant-design/icons';
import { useTranslation } from 'utils';
import './CustomerInfoWelcomeSection.scss';

interface IProps {
  message?: string;
}

const CustomerInfoWelcomeSection: React.FC<IProps> = ({ message }) => {
  const translate = useTranslation();

  return (
    <div className="customer-info-section">
      <div className="customer-welcome-container">
        <div className="customer-welcome__message-col">
          <div className="customer-welcome__title-container">
            <FileOutlined />
            <span className="customer-welcome__title-message">{translate('welcomeMessage')}</span>
          </div>
          <div className="customer-welcome__incoming-message">
            {message && (
              <span
                className="message"
                dangerouslySetInnerHTML={{
                  __html: message!,
                }}
              />
            )}
          </div>
        </div>
        <p>{translate('editWelcomeMessage')}</p>
      </div>
    </div>
  );
};

export default CustomerInfoWelcomeSection;
