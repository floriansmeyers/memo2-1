import * as React from 'react';
import { useRef } from 'react';
import { SearchMessage, Message } from 'models/graphql';
import { InboxSource } from 'types/inbox';
import { useTranslation } from 'utils';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';

interface IProps {
  item: SearchMessage;
}

export const SearchResultMessage: React.FC<IProps> = ({ item }) => {
  const { message } = item;
  const { sender, messageTime, channelType, content, conversationId } = message as Message;
  const translate = useTranslation();
  const history = useHistory();
  const text = useRef<HTMLParagraphElement>(null);
  const title = useRef<HTMLParagraphElement>(null);

  return (
    <div
      className="result-card"
      role="button"
      tabIndex={0}
      // TODO: fix url for messages page, at the moment in the url we don't have: `/inbox/${conversationId}`
      onClick={() => history.push(`/messages/${InboxSource.CallCenter}inbox/${conversationId}`)}
    >
      <div>
        <div className="header-left">
          <h2 ref={title} style={{ marginLeft: 0 }}>{`${sender.firstName} ${sender.lastName}`}</h2>
        </div>
        <p>
          {format(new Date(messageTime), 'LLL')} - {translate(channelType)}
        </p>
      </div>
      <p ref={text} dangerouslySetInnerHTML={{ __html: content || 'no content' }} />
    </div>
  );
};
