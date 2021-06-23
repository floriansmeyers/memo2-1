import { ChannelType, ConversationStatus } from 'models/graphql';

export enum PeriodEnum {
  TODAY = 'TODAY',
  YESTERDAY = 'YESTERDAY',
  THREE_DAYS = '3_DAYS',
  SEVEN_DAYS = '7_DAYS',
  THIRTY_DAYS = '30_DAYS',
  THREE_MONTH = '30_MONTHS',
}

export interface IPeriodOptions {
  key: PeriodEnum;
  label: string;
  values: string;
}

export const channelOptions = [
  ChannelType.TextFacebook,
  ChannelType.TextTwitter,
  ChannelType.TextWhatsapp,
];

export const statusOptions = Object.values(ConversationStatus);
