import * as React from 'react';

import Icon, {
  CheckCircleFilled,
  ClockCircleFilled,
  ExclamationCircleFilled,
  ExclamationOutlined,
  InfoCircleFilled,
  MailOutlined,
  MehFilled,
  MinusCircleFilled,
  QuestionCircleFilled,
  WarningFilled,
} from '@ant-design/icons';

import { Tooltip } from 'antd';
import { ConversationStatus, useGetThemeQuery } from 'models/graphql';
import { useTranslation } from 'utils';

interface IProps {
  status: ConversationStatus;
  noTooltip?: boolean;
}

export const StatusIndicator: React.FC<IProps> = ({ status, noTooltip }) => {
  const { data: colorsData } = useGetThemeQuery();
  const translate = useTranslation();

  const renderIcon = () => {
    switch (status) {
      case ConversationStatus.Callback:
        return (
          <Icon name="ReturnCallToCaller" style={{ color: colorsData?.theme.colors.secondary }} />
        );

      case ConversationStatus.Cancellation:
        return <MinusCircleFilled style={{ color: colorsData?.theme.colors.secondaryDarkShade }} />;

      case ConversationStatus.Finished:
        return <CheckCircleFilled style={{ color: colorsData?.theme.colors.success }} />;

      case ConversationStatus.Info:
        return <InfoCircleFilled style={{ color: colorsData?.theme.colors.primary }} />;

      case ConversationStatus.Open:
        return <ClockCircleFilled style={{ color: colorsData?.theme.colors.secondary }} />;

      case ConversationStatus.Question:
        return <QuestionCircleFilled style={{ color: colorsData?.theme.colors.primary }} />;

      case ConversationStatus.Urgent:
        return <ExclamationCircleFilled style={{ color: colorsData?.theme.colors.error }} />;

      case ConversationStatus.Important:
        return <ExclamationOutlined style={{ color: colorsData?.theme.colors.primary }} />;

      case ConversationStatus.CallbackHimself:
        return (
          <Icon
            name="ReturnCallFromCallerSvg"
            style={{ color: colorsData?.theme.colors.secondary }}
          />
        );

      case ConversationStatus.High:
        return <WarningFilled style={{ color: colorsData?.theme.colors.primary }} />;

      case ConversationStatus.EmailBack:
        return <MailOutlined style={{ color: colorsData?.theme.colors.success }} />;

      default:
        return <MehFilled style={{ color: colorsData?.theme.colors.primary }} />;
    }
  };

  if (noTooltip) {
    return renderIcon();
  }

  const tooltipTitle = translate(status.toString());

  return <Tooltip title={tooltipTitle}>{renderIcon()}</Tooltip>;
};
