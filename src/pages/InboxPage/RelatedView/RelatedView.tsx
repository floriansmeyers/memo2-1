import React from 'react';
import { message, Spin } from 'antd';
import { FolderOpenFilled, TagOutlined } from '@ant-design/icons';
import {
  useGetSocialRelatedConversationsQuery,
  useUpdateMeccaConversationMutation,
  useUpdateSocialConversationMutation,
} from 'models/graphql';
import { formattedDate, useTranslation } from 'utils';
import { InboxSource } from 'types/inbox';
import './RelatedView.scss';

interface IProps {
  conversationId: string;
  messageSubpageType: string;
}

const RelatedView: React.FC<IProps> = ({ conversationId, messageSubpageType }) => {
  const translate = useTranslation();

  const [updateConversation, { loading: isLoading }] = useUpdateSocialConversationMutation();
  const { data: relatedItems, loading, error } = useGetSocialRelatedConversationsQuery({
    variables: {
      id: conversationId,
    },
  });

  const allConversations = relatedItems?.socialConversation.related;

  const conversationFlagUpdate = (source: string) => {
    if (source === InboxSource.SocialNetworks) {
      return useUpdateSocialConversationMutation;
    }

    return useUpdateMeccaConversationMutation;
  };
  const [updateConversationFlag, { loading: isLoadingFlag }] = conversationFlagUpdate(
    messageSubpageType,
  )();

  const onClickFlagHandler = async (flagged: boolean, archived: boolean, id: string) => {
    if (isLoadingFlag) {
      return;
    }

    const variables = {
      id,
      input: {
        flagged: !flagged,
        // archived
      },
    };

    try {
      const result = await updateConversationFlag({
        variables,
      });

      if (result) {
        const msg = !flagged ? 'flagged' : 'unflagged';
        message.success(msg);
      }
    } catch (errorMess) {
      message.error(errorMess.message);
    }
  };

  const onClickArchiveHandler = async (archived: boolean, id: string) => {
    if (isLoading) {
      return;
    }

    const variables = {
      id,
      input: {
        archived: !archived,
        flagged: false,
      },
    };

    try {
      const result = await updateConversation({
        variables,
      });

      if (result) {
        const msg = !archived
          ? 'conversationSuccesfullyArchived'
          : 'conversationSuccesfullyUnarchived';
        message.success(translate(msg));
      }
    } catch (errorMess) {
      message.error(errorMess.message);
    }
  };

  const renderContent = () => {
    if (error) {
      return <p>{error.message}</p>;
    }
    if (loading) {
      return <Spin size="small" />;
    }

    return (
      <>
        {allConversations ? (
          allConversations?.map((item) => (
            <div key={item.id} className="related-item">
              <div className="related-meta">
                <p className="related-meta__name">{item.createdBy?.displayName}</p>
                <p className="related-meta__time">{formattedDate(item.createdAt!).fullDate}</p>
                <p className="related-meta__content">{item.preview?.content}</p>
              </div>
              <div className="related-actions">
                <button
                  type="button"
                  onClick={() => onClickArchiveHandler(item.archived, item.id)}
                  className="related-actions__button"
                >
                  <FolderOpenFilled className={item.archived ? `icon--active` : `icon`} />
                </button>
                <button
                  type="button"
                  className="related-actions__button"
                  onClick={() => onClickFlagHandler(item.flagged, item.archived, item.id)}
                >
                  <TagOutlined className={item.flagged ? `icon--active` : `icon`} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No data yet</p>
        )}
      </>
    );
  };

  return <div className="related-items">{renderContent()}</div>;
};

export default RelatedView;
