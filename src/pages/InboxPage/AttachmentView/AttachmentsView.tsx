/* eslint-disable jsx-a11y/anchor-is-valid */
// FIXME replace the 'a' component with a button
import React from 'react';
import { message, Spin } from 'antd';
import { DownloadOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Attachment,
  useRemoveMeccaConversationAttachementMutation,
  useRemoveSocialConversationAttachementMutation,
} from 'models/graphql';
import { isContainingFileNameImageExtension } from 'utils/global/isTxtContainingImgExtension';
import { InboxSource } from 'types/inbox';
import './AttachmentsView.scss';

interface IProps {
  attachment: Attachment[];
  refetchConversation: () => void;
  messageSubpageType: string;
  conversationId: string;
  loading: boolean;
  conversationError: Error;
}

const AttachmentsView: React.FC<IProps> = ({
  attachment,
  refetchConversation,
  messageSubpageType,
  conversationId,
  loading,
  conversationError,
}) => {
  const items = attachment.filter(Boolean).flat();

  const [deleteSocialAttachment] = useRemoveSocialConversationAttachementMutation({
    onCompleted: () => {
      refetchConversation();
    },
    onError: (error) => message.error(error.message),
  });

  const [deleteMeccaAttachment] = useRemoveMeccaConversationAttachementMutation({
    onCompleted: () => {
      refetchConversation();
      message.error('Success');
    },
    onError: (error) => message.error(error.message),
  });

  const onDeleteAttachmentHandler = async (identifier: string) => {
    if (messageSubpageType === InboxSource.SocialNetworks) {
      await deleteSocialAttachment({
        variables: {
          input: {
            conversationId,
            attachmentUrl: identifier,
          },
        },
      });
    } else {
      await deleteMeccaAttachment({
        variables: {
          input: {
            messageId: parseInt(conversationId, 10),
            attachmentId: parseInt(identifier, 10),
          },
        },
      });
    }
  };

  const onOpenImgAttachmentHandler = (url: string) => {
    const img = `<img src="${url}">`;
    const popup = window.open();
    if (popup) {
      popup.document.write(img);
      popup.print();
    }
  };

  const renderContent = () => {
    if (conversationError) {
      return <p>Error: {conversationError.message}</p>;
    }
    if (loading) {
      return <Spin size="small" />;
    }
    return items.length ? (
      items.map((i) => (
        <div key={i.url} className="attachment">
          <div className="attachment-meta">
            <div className="attachment-meta__title">Attachment</div>
          </div>
          <div className="attachment-actions">
            {isContainingFileNameImageExtension(i.url) && (
              <button
                onClick={() => onOpenImgAttachmentHandler(i.url)}
                type="button"
                className="attachment-actions__button"
              >
                <EyeOutlined />
              </button>
            )}
            <a
              role="button"
              tabIndex={0}
              className="attachment-actions__button"
              onClick={() => {
                window.open(
                  i.url,
                  'popUpWindow',
                  'height=700,width=900,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes',
                );
              }}
              download
            >
              <DownloadOutlined />
            </a>
            <button
              onClick={() => onDeleteAttachmentHandler(i.url)}
              type="button"
              className="attachment-actions__button"
            >
              <DeleteOutlined />
            </button>
          </div>
        </div>
      ))
    ) : (
      <p>No data yet</p>
    );
  };

  return <div className="attachments">{renderContent()}</div>;
};

export default AttachmentsView;
