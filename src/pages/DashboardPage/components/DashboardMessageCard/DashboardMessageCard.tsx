import React from 'react';
import { capitalizeString } from 'utils/global/capitalizeString';
import { stringUnderscoreToSpace } from 'utils/global/stringUnderscoreToSpace';
import { IMessages, useTranslation } from 'utils';
import './DashboardMessageCard.scss';

interface IDashboardMessageCardProps extends Omit<IMessages, 'icon'> {
  icon: JSX.Element | null;
}

const DashboardMessageCard: React.FC<IDashboardMessageCardProps> = ({ status, icon, qty }) => {
  const translate = useTranslation();

  return (
    <div className={`message-card message-card--${status.toLowerCase()}`}>
      <div className="message-card__main">
        {icon} {stringUnderscoreToSpace(capitalizeString(translate(status)))}
      </div>
      <div className="message-card__qty">{qty}</div>
    </div>
  );
};

export default DashboardMessageCard;
