import React from 'react';
import { MeccaConversationModel, SocialConversationModel } from 'models/graphql';
import CallCenterHeaderPartial from '../CallCenterHeader/CallCenterHeaderPartial/CallCenterHeaderPartial';
import { IInboxMessagesCheckbox } from '../../../interfaces/inbox-messages-checkbox.interface';
import SingleMessageViewCard from './SingleMessageViewCard/SingleMessageViewCard';
import './SingleMessageView.scss';

interface ISingleMessageViewProps extends IInboxMessagesCheckbox {
  singleMessageView: boolean;
  setSingleMessageView: (singleMessageView: boolean) => void;
  messages: Array<MeccaConversationModel | SocialConversationModel>;
}

const SingleMessageView: React.FC<ISingleMessageViewProps> = ({
  singleMessageView,
  setSingleMessageView,
  messages,
  setAllChecked,
  allChecked,
  checkByFilter,
}) => (
  <div className="call-center-single-message">
    <CallCenterHeaderPartial
      className="single-message-header"
      singleMessageView={singleMessageView}
      setSingleMessageView={setSingleMessageView}
      toggleCheckbox={setAllChecked}
      allChecked={allChecked}
      checkByFilter={checkByFilter}
    />

    <div className="single-message-content">
      {messages?.length ? (
        messages.map((message: MeccaConversationModel | SocialConversationModel) => (
          <SingleMessageViewCard
            key={message.id}
            status={message.status!}
            text={
              ('htmlMessage' in message ? message.htmlMessage : '') ||
              ('preview' in message ? message?.preview!.content : '')
            }
            time={message.createdAt!}
            id={message.id}
            read={message.read}
          />
        ))
      ) : (
        <p>No data...</p>
      )}
    </div>
  </div>
);

export default SingleMessageView;
