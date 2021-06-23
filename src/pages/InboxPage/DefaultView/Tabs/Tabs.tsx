import React, { useState } from 'react';
import {
  BookOutlined,
  NodeIndexOutlined,
  TeamOutlined,
  PaperClipOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import { Tabs } from 'antd';
import {
  useGetSocialConversationQuery,
  useGetMeccaConversationQuery,
  Attachment,
  Message,
} from 'models/graphql';
import { InboxSource } from 'types/inbox';
import { useTranslation } from 'utils';
import AttachmentsView from '../../AttachmentView';
import ConversationView from '../../ConversationView';
import LogbookView from '../../LogbookView';
import RelatedView from '../../RelatedView';
import MessageBodyCard from '../MessageBodyCard/MessageBodyCard';
import { CallCenterMessageHeader } from '../../CallCenterHeader';

const { TabPane } = Tabs;

const fetchConversation = (source: string) => {
  if (source === InboxSource.SocialNetworks) {
    return useGetSocialConversationQuery;
  }

  return useGetMeccaConversationQuery;
};

export const TABS_LIST = [
  {
    name: 'conversation',
    icon: <CommentOutlined />,
  },
  {
    name: 'team',
    icon: <TeamOutlined />,
  },
  {
    name: 'logbook',
    icon: <BookOutlined />,
  },
  {
    name: 'attachments',
    icon: <PaperClipOutlined />,
  },
  {
    name: 'relatedConversations',
    icon: <NodeIndexOutlined />,
  },
];

interface IProps {
  messageSubpageType: string;
  messageId: string;
}

const DefaultViewTabs: React.FC<IProps> = ({ messageSubpageType, messageId }) => {
  const translate = useTranslation();
  const [multipleTabsValue, setMultipleTabsValue] = useState(
    messageSubpageType === InboxSource.CallCenter ? 'team' : 'conversation',
  );

  const setDisableTabs = (tabsToBeDisabled: string[], tab: string) =>
    tabsToBeDisabled.includes(tab);

  const disableTabsByPage = (tabName: string) => {
    if (messageSubpageType === InboxSource.CallCenter) {
      return setDisableTabs(['conversation', 'logbook', 'relatedConversations'], tabName);
    }

    return setDisableTabs(['team'], tabName);
  };

  const renderTabs = (): React.ReactNode =>
    TABS_LIST.map(({ name, icon }) => (
      <TabPane
        tab={
          <span>
            {icon} {translate(name)}
          </span>
        }
        key={name}
        disabled={disableTabsByPage(name)}
      />
    ));

  const onChangeMultipleTabsHandler = (tab: string): void => {
    setMultipleTabsValue(tab);
  };

  const {
    data: conversationData,
    loading: conversationLoading,
    error: conversationError,
    refetch: refetchConversation,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any = fetchConversation(messageSubpageType)({
    variables: {
      id: messageId,
    },
    fetchPolicy: 'no-cache',
  });

  const messagesData =
    conversationData?.socialConversation && conversationData.socialConversation.messages
      ? conversationData.socialConversation.messages
      : [];

  const events = conversationData?.socialConversation?.events
    ? conversationData?.socialConversation.events
    : [];

  const conversation = conversationData?.socialConversation || conversationData?.meccaConversation;

  const agentMessages = conversation?.agentMessages ? conversation.agentMessages : [];

  const getAttachments = () =>
    ([...messagesData, ...agentMessages, conversation].map((msg: Message) =>
      msg?.attachments?.map((attachment: Attachment) => attachment),
    ) as unknown) as Attachment[];

  const renderTabViews = {
    conversation: (
      <ConversationView
        loading={conversationLoading}
        conversationError={conversationError}
        messages={conversationData?.socialConversation}
        conversationId={messageId}
      />
    ),
    team: (
      <MessageBodyCard
        loading={conversationLoading}
        content={conversationData?.meccaConversation}
      />
    ),
    logbook: (
      <LogbookView
        loading={conversationLoading}
        conversationError={conversationError}
        events={events}
      />
    ),
    attachments: (
      <AttachmentsView
        conversationId={messageId}
        messageSubpageType={messageSubpageType}
        refetchConversation={refetchConversation}
        attachment={getAttachments()}
        loading={conversationLoading}
        conversationError={conversationError}
      />
    ),
    relatedConversations: (
      <RelatedView messageSubpageType={messageSubpageType} conversationId={messageId} />
    ),
  };

  const renderTabsViewHandler = () => {
    if (messageSubpageType === InboxSource.CallCenter && multipleTabsValue === 'team') {
      return 'team';
    }
    if (messageSubpageType === InboxSource.SocialNetworks && multipleTabsValue === 'conversation') {
      return 'conversation';
    }
    return multipleTabsValue;
  };

  return (
    <div className="call-center-right-block">
      <CallCenterMessageHeader />

      <div className="call-center-content__right">
        <div className="call-center-right-tabs">
          <Tabs
            onChange={onChangeMultipleTabsHandler}
            defaultActiveKey={
              messageSubpageType === InboxSource.CallCenter ? 'team' : 'conversations'
            }
            className="call-center-header-tabs"
          >
            {renderTabs()}
          </Tabs>
        </div>
        {renderTabViews[renderTabsViewHandler() as keyof typeof renderTabViews]}
      </div>
    </div>
  );
};

export default React.memo(DefaultViewTabs);
