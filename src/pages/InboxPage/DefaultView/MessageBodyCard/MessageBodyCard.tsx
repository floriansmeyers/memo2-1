import React, { useState } from 'react';
import { ExportOutlined, FormOutlined, PaperClipOutlined } from '@ant-design/icons';
import { Button } from 'components';
import { ButtonTypes, useTranslation, mockMessageBodyCardTitle, formattedDate } from 'utils';
import { Spin } from 'antd';
import { MeccaBlankConversationModel } from 'models/graphql';
import MessageBodyUploadAttachmentModal from '../../InboxModals/MessageBodyUploadAttachmentModal';

import './MessageBodyCard.scss';

interface IProps {
  content: MeccaBlankConversationModel;
  loading: boolean;
}

const MessageBodyCard: React.FC<IProps> = ({ content, loading }) => {
  const translate = useTranslation();
  const [attachmentsModalVisible, setAttachmentsModalVisible] = useState(false);

  return (
    <div className="message-body__container">
      {loading ? (
        <Spin size="small" />
      ) : (
        <>
          <div className="message-body__main">
            <div className="message-body__text">
              <span className="message-body__title">{mockMessageBodyCardTitle}</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: content?.htmlMessage || 'no data',
                }}
              />
            </div>
            <div className="message-body__dateTime">
              {content ? formattedDate(content?.createdAt).hourMinutes : 'no data'}
            </div>
          </div>
          <div className="message-body__actions">
            <div className="message-body__action-icons">
              <PaperClipOutlined onClick={() => setAttachmentsModalVisible(true)} />
              <FormOutlined />
              <ExportOutlined />
            </div>
            <MessageBodyUploadAttachmentModal
              visible={attachmentsModalVisible}
              onCloseModal={() => setAttachmentsModalVisible(false)}
            />
            <Button text={translate('respond')} type={ButtonTypes.Blue} />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageBodyCard;
