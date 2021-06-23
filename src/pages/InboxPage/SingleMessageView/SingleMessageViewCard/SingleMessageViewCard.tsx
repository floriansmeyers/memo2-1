import React from 'react';
import { Checkbox } from 'antd';
import {
  FilterOutlined,
  MailOutlined,
  DownOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { ActionIcons, Button } from 'components';
import {
  ButtonTypes,
  mockMessageBodyCardTitle,
  mockMessagePreviewTitle,
  useTranslation,
  formattedDate,
} from 'utils';
import { Maybe } from 'graphql/jsutils/Maybe';
import './SingleMessageViewCard.scss';

interface IProps {
  status: string;
  text: Maybe<string>;
  time: string;
  id: string;
  setMessageId?: (messageId: string) => void;
  read: boolean;
}

const SingleMessageViewCard: React.FC<IProps> = ({
  status,
  text,
  id,
  time,
  setMessageId,
  read,
}) => {
  const translate = useTranslation();

  return (
    <div
      className={
        !read ? `single-card__container` : `single-card__container single-card__container--read`
      }
    >
      <div className="single-card__info">
        <Checkbox />
        <div className="single-card__info-main">
          <div className="single-card__title-block">
            <div className="single-card__title">{mockMessagePreviewTitle}</div>
            <div className="single-card__dateTime">
              {time ? formattedDate(time).hourMinutes : 'no time'}
            </div>
            <div className="single-card__status-badge">
              <MailOutlined /> <span>{status || 'no status'}</span>
            </div>
          </div>

          <div className="single-card__bottom-select">
            <span>
              <UsergroupAddOutlined />
            </span>
            <span>
              <DownOutlined />
            </span>
          </div>
        </div>
      </div>

      <div className="single-card__main-container">
        <div className="single-card__main">
          <div className="single-card__text">
            <span className="single-card-main__title">{mockMessageBodyCardTitle}</span>
            <span
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: text || 'no data',
              }}
            />
          </div>
        </div>
        <div className="single-card__actions">
          <div className="single-card__icons">
            <ActionIcons endIcon={<FilterOutlined />} />
            <ActionIcons />
          </div>
          <Button text={translate('respond')} type={ButtonTypes.Blue} />
        </div>
      </div>
    </div>
  );
};

export default SingleMessageViewCard;
