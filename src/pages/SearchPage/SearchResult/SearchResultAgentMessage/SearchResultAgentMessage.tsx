import * as React from 'react';
import { useRef } from 'react';
import { SearchAgentMessage, AgentMessage } from 'models/graphql';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'utils';
import { InboxSource } from 'types/inbox';
import { format } from 'date-fns';

interface IProps {
  item: SearchAgentMessage;
}

export const SearchResultAgentMessage: React.FC<IProps> = ({ item }) => {
  const { agentMessage } = item;
  const {
    channelType,
    content,
    sender,
    messageTime,
    conversationId,
  } = agentMessage as AgentMessage;
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
      onClick={() => history.push(`/messages/${InboxSource.CallCenter}/inbox/${conversationId}`)}
    >
      <div className="header-left">
        <h2 ref={title} style={{ marginLeft: 0 }}>
          {sender.id ? `${sender.firstName} ${sender.lastName}` : 'Agent'}
        </h2>
      </div>
      <p>
        {format(new Date(messageTime), 'lll')} - {translate(channelType)}
      </p>
      <p ref={text}>{content}</p>
    </div>
  );
};
