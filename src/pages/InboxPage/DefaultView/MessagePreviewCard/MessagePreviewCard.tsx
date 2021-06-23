import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { TagOutlined, MailOutlined } from '@ant-design/icons';
import { getIcon } from 'pages/DashboardPage/DashboardPage';
import { mockMessagePreviewTitle, formattedDate, useTranslation } from 'utils';
import './MessagePreviewCard.scss';

interface IProps {
  status: string;
  text: string;
  time: string;
  id: string;
  read: boolean;
  messageNr: number;
  name: string;
  messageId: string;
  setMessageId: (messageId: string) => void;
  checkbox: {
    isChecked: boolean;
    setIsChecked: (bool: boolean) => void;
  };
}

const MessagePreviewCard: React.FC<IProps> = ({
  status,
  text,
  time,
  id,
  read,
  messageNr,
  name,
  messageId,
  setMessageId,
  checkbox: { isChecked, setIsChecked },
}) => {
  const translate = useTranslation();

  const onMessageIdHandler = (msgId: string) => {
    setMessageId(msgId);
  };

  useEffect(() => {
    if (messageNr === 0) {
      onMessageIdHandler(id);
    }
  }, []);

  const setClass = (isRead: boolean) => {
    const activeClass = messageId === id ? 'message-preview__container--active' : '';
    if (isRead) {
      return `message-preview__container message-preview__container--read ${activeClass}`;
    }
    return `message-preview__container ${activeClass}`;
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={setClass(read)}
      onClick={() => onMessageIdHandler(id)}
    >
      <div className="message-preview__top">
        <div className="message-preview__info">
          <div className="preview-title-block">
            <div className="preview-checkbox-block">
              <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              <TagOutlined />
            </div>
            <div className="preview-title">{mockMessagePreviewTitle}</div>
          </div>
          <div className="preview-status-badge">
            {getIcon(status)} <span>{status || 'No status'}</span>
          </div>
          <div className="preview-user">
            <p className="preview-user__name">
              {translate('name')}: <span className="txt-bold">{name}</span>
            </p>
          </div>
        </div>

        <div className="message-preview__dayTime">
          <span className="preview-day">Vandaag</span>
          <span className="preview-time">{formattedDate(time).hourMinutes}</span>
        </div>
      </div>

      <div className="message-preview__bottom">
        <span
          dangerouslySetInnerHTML={{
            __html: text || 'no data yet',
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(MessagePreviewCard);
