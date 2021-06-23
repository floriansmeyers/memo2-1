import React, { useState } from 'react';
import { Spin, Tabs } from 'antd';
import { ButtonTypes, useTranslation } from 'utils';
import { MeccaConversationModel, SocialConversationModel } from 'models/graphql';
import { InboxSource, MessagesSource } from 'types/inbox';
import CallCenterHeaderPartial from '../CallCenterHeader/CallCenterHeaderPartial/CallCenterHeaderPartial';
import { IInboxMessagesCheckbox } from '../../../interfaces/inbox-messages-checkbox.interface';
import { CheckBoxBlock } from '../CallCenterHeader';
import { Button } from '../../../components';
import DefaultViewTabs from './Tabs/Tabs';
import MessagePreviewCard from './MessagePreviewCard/MessagePreviewCard';
import './DefaultView.scss';

const { TabPane } = Tabs;

interface IDefaultViewProps extends IInboxMessagesCheckbox {
  singleMessageView: boolean;
  loading: boolean;
  setSingleMessageView: (singleMessageView: boolean) => void;
  setMessagesSource: (messagesSource: MessagesSource) => void;
  messages: Array<MeccaConversationModel | SocialConversationModel>;
  messageCount: number;
  increasePage: () => void;
  messageSubpageType: string;
}

const DefaultView: React.FC<IDefaultViewProps> = ({
  singleMessageView,
  setSingleMessageView,
  messages,
  setMessagesSource,
  messageSubpageType,
  setAllChecked,
  checkedMessages,
  checkMessageFactory,
  allChecked,
  checkByFilter,
  messageCount,
  increasePage,
  loading,
}) => {
  const [messageId, setMessageId] = useState('');

  const translate = useTranslation();

  const onChangeTabsHandler = (tab: string): void => {
    const source = MessagesSource[tab as keyof typeof MessagesSource];

    setMessagesSource(source);
  };

  return (
    <div className="call-center-default">
      <div className="call-center-left-block">
        <CallCenterHeaderPartial
          className="call-center-header__left"
          singleMessageView={singleMessageView}
          setSingleMessageView={setSingleMessageView}
          toggleCheckbox={setAllChecked}
          allChecked={allChecked}
          checkByFilter={checkByFilter}
        />

        <div className="call-center-content__left">
          <div className="call-center-left-tabs">
            <CheckBoxBlock
              checkByFilter={checkByFilter}
              checked={allChecked}
              toggleCheckbox={setAllChecked}
            />
            <Tabs onChange={onChangeTabsHandler} defaultActiveKey="0">
              <TabPane tab={translate('allMessages')} key={MessagesSource.Inbox} />
              <TabPane tab={translate('followUp')} key={MessagesSource.FollowUp} />
              {messageSubpageType !== InboxSource.CallCenter && (
                <TabPane tab={translate('archive')} key={MessagesSource.Archive} />
              )}
            </Tabs>
          </div>
          <div className="messages">
            {!!messages?.length &&
              messages.map(
                (message: MeccaConversationModel | SocialConversationModel, key: number) => (
                  <MessagePreviewCard
                    key={message.id}
                    status={message.status || ''}
                    text={
                      ('htmlMessage' in message && message?.htmlMessage) ||
                      '' ||
                      ('preview' in message && message.preview?.content) ||
                      ''
                    }
                    time={message.createdAt || 'No time'}
                    id={message.id}
                    read={message.read}
                    messageNr={key}
                    name={message.createdBy?.displayName || 'No name'}
                    setMessageId={setMessageId}
                    messageId={messageId}
                    checkbox={{
                      isChecked: checkedMessages[message.id],
                      setIsChecked: checkMessageFactory(message.id),
                    }}
                  />
                ),
              )}

            <div className="message-loader">
              {loading && <Spin size="default" />}{' '}
              {!messages?.length && !loading && (
                <Button text={translate('empty')} type={ButtonTypes.Gray} disabled />
              )}
            </div>

            {messages?.length < messageCount && (
              <div className="message-loader">
                <Button
                  text={translate('loadMore')}
                  type={ButtonTypes.Blue}
                  onClick={() => increasePage()}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {messageId && (
        <DefaultViewTabs messageId={messageId} messageSubpageType={messageSubpageType} />
      )}
    </div>
  );
};

export default DefaultView;
