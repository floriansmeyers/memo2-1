import React from 'react';
import { Spin } from 'antd';
import { ConversationUnflaggedEvent } from 'models/graphql';
import { formattedDate, useTranslation } from 'utils';
import './LogbookView.scss';

interface IProps {
  events: ConversationUnflaggedEvent[];
  loading: boolean;
  conversationError: Error;
}

const LogbookView: React.FC<IProps> = ({ events, loading, conversationError }) => {
  const translate = useTranslation();

  const renderContent = () => {
    if (conversationError) {
      return <p>Error: {conversationError.message}</p>;
    }
    if (loading) {
      return <Spin size="small" />;
    }

    return events.length ? (
      events.map((ev, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={ev.eventTime + key} className="logbook-item">
          <div className="logbook-item__name">
            {/* eslint-disable-next-line no-underscore-dangle */}
            {translate(`event.${ev.__typename?.toLowerCase()}`)}
          </div>
          <div className="logbook-item__time">{`${formattedDate(ev.eventTime).fullDate}${
            formattedDate(ev.eventTime).hourMinutes
          }`}</div>
        </div>
      ))
    ) : (
      <p>No data yet</p>
    );
  };

  return <div className="logbook-items">{renderContent()}</div>;
};

export default LogbookView;
