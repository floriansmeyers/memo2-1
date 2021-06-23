import * as React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'utils';
import {
  useGetThemeQuery,
  NotificationInvoice,
  NotificationConversation,
  NotificationTypes,
  ConversationStatus,
  User,
} from 'models/graphql';
import './DashboardNotification.scss';

interface IProps {
  notification: NotificationInvoice | NotificationConversation;
}

const getName = (_createdBy: User) => {
  if (_createdBy.displayName) {
    return _createdBy.displayName;
  }

  return `${_createdBy.firstName} ${_createdBy.lastName}`;
};

const getCreatedByName = (_status: ConversationStatus, createdBy?: User | null): string | null => {
  if (!createdBy) {
    return null;
  }

  switch (_status) {
    case ConversationStatus.Callback:
      return `${getName(createdBy)} `;
    default:
      return null;
  }
};

const DashboardNotification: React.FC<IProps> = ({ notification }) => {
  const translate = useTranslation();
  const { data: colorsData } = useGetThemeQuery();
  const { status, conversation } = notification as NotificationConversation;

  switch (notification.type) {
    case NotificationTypes.Invoice:
      return (
        <div className="notification-item">
          <div className="notification-item__icon" />
          <div className="notification-item__content">
            <p className="notification-item__meta">{translate('newInvoiceAvailable')}</p>
            <p className="notification-item__meta">
              {format(new Date(notification.date), 'dd / MM / yyyy')}
            </p>
          </div>
        </div>
      );
    case NotificationTypes.Conversation:
      return (
        <div className="notification-item">
          <div className="notification-item__icon" />
          <div className="notification-item__content">
            <p className="notification-item__meta">
              {getCreatedByName(status, conversation.createdBy)}
              {translate(`${status}Notification`)}
            </p>
            <p className="notification-item__meta">
              {format(new Date(notification.date), 'dd / MM / yyyy')}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default DashboardNotification;
