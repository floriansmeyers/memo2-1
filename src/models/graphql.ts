import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File | FileList | Blob;
};

export type AddConversationAgentMessage = {
  attachments?: Maybe<Array<Scalars['Upload']>>;
  content?: Maybe<Scalars['String']>;
  fieldValues: Array<ConversationStructuredTypeValueFieldValueInput>;
};

export type AddMeccaMessageAttachmentInputModel = {
  messageId: Scalars['Float'];
  attachments?: Maybe<Array<Scalars['Upload']>>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  box?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  box?: Maybe<Scalars['String']>;
};

export type AgentMessage = {
  __typename?: 'AgentMessage';
  id: Scalars['ID'];
  channelType: ChannelType;
  content?: Maybe<Scalars['String']>;
  conversationId: Scalars['ID'];
  destination: Scalars['String'];
  external?: Maybe<Scalars['Boolean']>;
  messageTime: Scalars['DateTime'];
  sender: User;
  serviceId: Scalars['String'];
  source: Scalars['String'];
};

export type AgentMessageResult = {
  __typename?: 'AgentMessageResult';
  id: Scalars['ID'];
  messages: Array<AgentMessage>;
  attachments: Array<Attachment>;
  structuredMessage?: Maybe<AgentMessageStructuredMessage>;
  status: AgentMessageStatus;
};

/** The different statusses of agent message */
export enum AgentMessageStatus {
  Normal = 'NORMAL',
  Important = 'IMPORTANT',
  Urgent = 'URGENT',
  VeryUrgent = 'VERY_URGENT',
  CallbackFromCaller = 'CALLBACK_FROM_CALLER',
  CallbackToCaller = 'CALLBACK_TO_CALLER',
  MailBack = 'MAIL_BACK',
}

export type AgentMessageStructuredMessage = {
  __typename?: 'AgentMessageStructuredMessage';
  name: Scalars['String'];
  fields: Array<ConversationStructuredTypeField>;
  values: Array<AgentMessageStructuredMessageValue>;
};

export type AgentMessageStructuredMessageValue = {
  __typename?: 'AgentMessageStructuredMessageValue';
  sequence: Scalars['Float'];
  value?: Maybe<Scalars['String']>;
};

/** Agents status for Customer */
export enum AgentsStatus {
  Available = 'AVAILABLE',
  Away = 'AWAY',
  Closed = 'CLOSED',
}

export type AgentsStatusResponse = {
  __typename?: 'AgentsStatusResponse';
  agentsStatus: AgentsStatus;
};

export type Attachment = {
  __typename?: 'Attachment';
  id: Scalars['ID'];
  fileName?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type BlankConversation = Conversation & {
  __typename?: 'BlankConversation';
  id: Scalars['ID'];
  archived: Scalars['Boolean'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged: Scalars['Boolean'];
  participants: Array<ConversationParticipant>;
  priority: Scalars['Float'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<Conversation>;
};

export type CallBaseReporting = {
  totalNrOfCalls: Scalars['Int'];
  title: Scalars['String'];
  yAxisTitle: Scalars['String'];
  xAxisTitle: Scalars['String'];
  yAxisValues: Array<Scalars['Float']>;
  xAxisValues: Array<Scalars['String']>;
};

export type CallFilterInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type CallModel = {
  __typename?: 'CallModel';
  dayNight: DayNightCallTypes;
  callDateTime: Scalars['DateTime'];
  callDuration: Scalars['Int'];
  caller?: Maybe<Scalars['String']>;
};

export type CallReportingResult = {
  __typename?: 'CallReportingResult';
  waitingTimeStatistics: WaitingTimeReporting;
  durationTimeStatistics: DurationTimeReporting;
  missedCallStatistics: MissedCallsReporting;
  nrOfCallsPerHourStatistics: NrOfCallsPerHourReporting;
};

export type CallResult = {
  __typename?: 'CallResult';
  phoneNumber: Scalars['String'];
  callStats: CallStats;
  callList: Array<CallModel>;
};

export type CallStats = {
  __typename?: 'CallStats';
  nrOfCallsDay: Scalars['Int'];
  nrOfCallsNight: Scalars['Int'];
  totalDurationDay: Scalars['Int'];
  totalDurationNight: Scalars['Int'];
};

/** Possible channels for communication */
export enum ChannelType {
  Blank = 'BLANK',
  CallMecca = 'CALL_MECCA',
  TextFacebook = 'TEXT_FACEBOOK',
  TextTwitter = 'TEXT_TWITTER',
  TextWhatsapp = 'TEXT_WHATSAPP',
  VideoMemo = 'VIDEO_MEMO',
}

export type Colors = {
  __typename?: 'Colors';
  error: Scalars['String'];
  info: Scalars['String'];
  primary: Scalars['String'];
  primaryDarkShade: Scalars['String'];
  primaryLightShade: Scalars['String'];
  secondary: Scalars['String'];
  secondaryDarkShade: Scalars['String'];
  secondaryLightShade: Scalars['String'];
  success: Scalars['String'];
  warning: Scalars['String'];
};

export type CompanyResultModel = {
  __typename?: 'CompanyResultModel';
  id: Scalars['Float'];
  profileName: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  language: Language;
  value: Scalars['String'];
};

export type Conversation = {
  id: Scalars['ID'];
  archived: Scalars['Boolean'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged: Scalars['Boolean'];
  participants: Array<ConversationParticipant>;
  priority: Scalars['Float'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<Conversation>;
};

export type ConversationArchivedEvent = EventModel & {
  __typename?: 'ConversationArchivedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

export type ConversationClosedEvent = EventModel & {
  __typename?: 'ConversationClosedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

export type ConversationCreatedEvent = EventModel & {
  __typename?: 'ConversationCreatedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
  source?: Maybe<Scalars['String']>;
};

export type ConversationFlaggedEvent = EventModel & {
  __typename?: 'ConversationFlaggedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

export type ConversationForwardedEvent = EventModel & {
  __typename?: 'ConversationForwardedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

export type ConversationParticipant = {
  __typename?: 'ConversationParticipant';
  channel: ChannelType;
  channelId: Scalars['ID'];
  destination: Scalars['String'];
  source: Scalars['String'];
};

export type ConversationPriorityChangedEvent = EventModel & {
  __typename?: 'ConversationPriorityChangedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
  newPriority: Scalars['Float'];
};

export type ConversationReadedEvent = EventModel & {
  __typename?: 'ConversationReadedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

/** The different conversation statusses */
export enum ConversationStatus {
  Callback = 'CALLBACK',
  Cancellation = 'CANCELLATION',
  Finished = 'FINISHED',
  Info = 'INFO',
  Open = 'OPEN',
  Question = 'QUESTION',
  Urgent = 'URGENT',
  Important = 'IMPORTANT',
  High = 'HIGH',
  CallbackHimself = 'CALLBACK_HIMSELF',
  EmailBack = 'EMAIL_BACK',
}

export type ConversationStatusChangedEvent = EventModel & {
  __typename?: 'ConversationStatusChangedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
  newStatus: ConversationStatus;
};

export type ConversationStructuredType = {
  __typename?: 'ConversationStructuredType';
  name: Scalars['String'];
  fields: Array<ConversationStructuredTypeField>;
};

export type ConversationStructuredTypeField = {
  __typename?: 'ConversationStructuredTypeField';
  sequence: Scalars['Float'];
  fieldType: ConversationStructuredTypeFieldType;
  label: Scalars['String'];
  description: Scalars['String'];
  required: Scalars['Boolean'];
  readonly: Scalars['Boolean'];
  isEditableByCustomer: Scalars['Boolean'];
  defaultValue?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Scalars['String']>>;
};

export type ConversationStructuredTypeFieldType = {
  __typename?: 'ConversationStructuredTypeFieldType';
  name: Scalars['String'];
  regExForValidation?: Maybe<Scalars['String']>;
  regExForValidChars?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['String']>;
  maxLength: Scalars['Float'];
  errorMessage?: Maybe<Scalars['String']>;
};

export type ConversationStructuredTypeValueFieldValueInput = {
  sequence: Scalars['Float'];
  value: Scalars['String'];
};

export type ConversationStructuredTypesResult = {
  __typename?: 'ConversationStructuredTypesResult';
  count: Scalars['Int'];
  items: Array<ConversationStructuredType>;
};

export type ConversationUnflaggedEvent = EventModel & {
  __typename?: 'ConversationUnflaggedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

export type ConversationUpdatedEvent = EventModel & {
  __typename?: 'ConversationUpdatedEvent';
  eventTime: Scalars['DateTime'];
  type: EventTypes;
  source?: Maybe<Scalars['String']>;
};

export type CountriesResult = {
  __typename?: 'CountriesResult';
  count: Scalars['Int'];
  items: Array<Country>;
};

export type Country = {
  __typename?: 'Country';
  iso: Scalars['String'];
  name: Scalars['String'];
};

export type CountryFilter = {
  iso: Array<Scalars['String']>;
};

export type CreateContactRequestInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
};

export type CreateCustomerAttachmentInput = {
  name: Scalars['String'];
  validFrom: Scalars['DateTime'];
  validTill: Scalars['DateTime'];
  attachment: Scalars['Upload'];
};

export type CreateCustomerCrmContactInput = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  sex?: Maybe<CustomerCrmContactSexes>;
  functionName?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<CustomerCrmContactAddressInput>>;
  communications?: Maybe<Array<CustomerCrmContactCommunicationInput>>;
  groups?: Maybe<Array<CustomerCrmContactGroupRelationInput>>;
};

export type CreateCustomerTemporaryInstructionInput = {
  name: Scalars['String'];
  content: Scalars['String'];
  validFrom: Scalars['DateTime'];
  validUntil: Scalars['DateTime'];
};

export type CreateMeccaConversationInputModel = {
  channelType: ChannelType;
  status: ConversationStatus;
  attachments?: Maybe<Array<Scalars['Upload']>>;
  content?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  emails?: Maybe<Array<Scalars['String']>>;
  phones?: Maybe<Array<Scalars['String']>>;
  structuredType?: Maybe<MeccaConversationStructuredTypeValueInput>;
  notify?: Maybe<Scalars['Boolean']>;
};

export type CreateRoleInput = {
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type CreateStandbyInput = {
  from: StandbyHoursInput;
  to: StandbyHoursInput;
  crmContactIds?: Maybe<Array<Scalars['Int']>>;
  notifyChannels?: Maybe<Array<StandbyNotifyChannels>>;
};

export type CreateUserInput = {
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  role: UserRole;
  username: Scalars['String'];
  password: Scalars['String'];
  lastName: Scalars['String'];
  customers: Array<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  platformId?: Maybe<Scalars['ID']>;
  appointmentContractYn?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  groupId?: Maybe<Scalars['ID']>;
  info?: Maybe<CustomerInfo>;
};

export type CustomerAttachment = {
  __typename?: 'CustomerAttachment';
  id: Scalars['Int'];
  name: Scalars['String'];
  validFrom: Scalars['DateTime'];
  validTill: Scalars['DateTime'];
  type: Scalars['String'];
  attachment: Attachment;
  active: Scalars['Boolean'];
  version: Scalars['Float'];
};

export type CustomerAttachmentFilter = {
  ids: Array<Scalars['Int']>;
};

export type CustomerAttachmentVersion = {
  __typename?: 'CustomerAttachmentVersion';
  id: Scalars['Int'];
  active: Scalars['Boolean'];
  validFrom: Scalars['DateTime'];
  attachment: Attachment;
  type: Scalars['String'];
  validTill: Scalars['DateTime'];
  version: Scalars['Int'];
};

export type CustomerAttachmentWithVersions = {
  __typename?: 'CustomerAttachmentWithVersions';
  id: Scalars['Int'];
  name: Scalars['String'];
  validFrom: Scalars['DateTime'];
  validTill: Scalars['DateTime'];
  type: Scalars['String'];
  attachment: Attachment;
  active: Scalars['Boolean'];
  version: Scalars['Float'];
  versions: Array<CustomerAttachmentVersion>;
};

export type CustomerAttachmentsResult = {
  __typename?: 'CustomerAttachmentsResult';
  count: Scalars['Int'];
  items: Array<CustomerAttachmentWithVersions>;
};

export type CustomerChatData = {
  __typename?: 'CustomerChatData';
  guid: Scalars['String'];
  username: Scalars['String'];
  extension: Scalars['Float'];
  mainFicheId: Scalars['ID'];
  customerId: Scalars['ID'];
  userEmail: Scalars['ID'];
  serviceGroup: Scalars['String'];
};

export type CustomerContactInformation = {
  __typename?: 'CustomerContactInformation';
  type: CustomerContactInformationTypes;
  address?: Maybe<Address>;
  emailAddress?: Maybe<Scalars['String']>;
  faxNumber?: Maybe<Scalars['String']>;
  mobilePhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber1?: Maybe<Scalars['String']>;
  phoneNumber2?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CustomerContactInformationInput = {
  type: CustomerContactInformationTypes;
  address?: Maybe<AddressInput>;
  emailAddress?: Maybe<Scalars['String']>;
  faxNumber?: Maybe<Scalars['String']>;
  mobilePhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber1?: Maybe<Scalars['String']>;
  phoneNumber2?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** The different types of customer contact information */
export enum CustomerContactInformationTypes {
  Business_1 = 'BUSINESS_1',
  Business_2 = 'BUSINESS_2',
  Private_1 = 'PRIVATE_1',
  Private_2 = 'PRIVATE_2',
}

export type CustomerCrmContact = {
  __typename?: 'CustomerCrmContact';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  sex?: Maybe<CustomerCrmContactSexes>;
  functionName?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<CustomerCrmContactAddress>>;
  communications?: Maybe<Array<CustomerCrmContactCommunication>>;
  groups?: Maybe<Array<CustomerCrmContactGroupRelation>>;
};

export type CustomerCrmContactAddress = {
  __typename?: 'CustomerCrmContactAddress';
  id: Scalars['Int'];
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  description: Scalars['String'];
};

export type CustomerCrmContactAddressInput = {
  id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  description: Scalars['String'];
};

export type CustomerCrmContactCommunication = {
  __typename?: 'CustomerCrmContactCommunication';
  type: CustomerCrmContactCommunicationType;
  sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  forwardStatus: CustomerCrmContactCommunicationStatusses;
  forwardCondition?: Maybe<Scalars['String']>;
  passThroughStatus: CustomerCrmContactCommunicationStatusses;
  passThroughCondition?: Maybe<Scalars['String']>;
};

export type CustomerCrmContactCommunicationInput = {
  typeId: Scalars['Int'];
  sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  forwardStatus?: Maybe<CustomerCrmContactCommunicationStatusses>;
  forwardCondition?: Maybe<Scalars['String']>;
  passThroughStatus?: Maybe<CustomerCrmContactCommunicationStatusses>;
  passThroughCondition?: Maybe<Scalars['String']>;
};

/** The different types of customer crm contact communication statusses */
export enum CustomerCrmContactCommunicationStatusses {
  Always = 'ALWAYS',
  UnderConditions = 'UNDER_CONDITIONS',
  Never = 'NEVER',
}

export type CustomerCrmContactCommunicationType = {
  __typename?: 'CustomerCrmContactCommunicationType';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  category: CustomerCrmContactCommunicationTypeCategories;
};

/** The different types of customer crm contact communication categories */
export enum CustomerCrmContactCommunicationTypeCategories {
  None = 'NONE',
  Landline = 'LANDLINE',
  Mobile = 'MOBILE',
  Fax = 'FAX',
  Email = 'EMAIL',
}

export type CustomerCrmContactCommunicationTypeFilter = {
  ids: Array<Scalars['Int']>;
};

export type CustomerCrmContactCommunicationTypesResult = {
  __typename?: 'CustomerCrmContactCommunicationTypesResult';
  count: Scalars['Int'];
  items: Array<CustomerCrmContactCommunicationType>;
};

export type CustomerCrmContactFilter = {
  ids?: Maybe<Array<Scalars['Int']>>;
  communicationValueSearch?: Maybe<Scalars['String']>;
};

export type CustomerCrmContactGroup = {
  __typename?: 'CustomerCrmContactGroup';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  subGroups?: Maybe<Array<CustomerCrmContactSubGroup>>;
};

export type CustomerCrmContactGroupFilter = {
  ids: Array<Scalars['Int']>;
};

export type CustomerCrmContactGroupRelation = {
  __typename?: 'CustomerCrmContactGroupRelation';
  groupId: Scalars['Int'];
  group: CustomerCrmContactGroup;
  subGroupId: Scalars['Int'];
  subGroup: CustomerCrmContactSubGroup;
};

export type CustomerCrmContactGroupRelationInput = {
  groupId: Scalars['Int'];
  subGroupId: Scalars['Int'];
};

export type CustomerCrmContactGroupsResult = {
  __typename?: 'CustomerCrmContactGroupsResult';
  count: Scalars['Int'];
  items: Array<CustomerCrmContactGroup>;
};

/** The different types of customer crm contact genders */
export enum CustomerCrmContactSexes {
  Male = 'MALE',
  Female = 'FEMALE',
}

export type CustomerCrmContactSubGroup = {
  __typename?: 'CustomerCrmContactSubGroup';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type CustomerCrmContactsResult = {
  __typename?: 'CustomerCrmContactsResult';
  count: Scalars['Int'];
  items: Array<CustomerCrmContact>;
};

export type CustomerFilterInput = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type CustomerFixedInstruction = {
  __typename?: 'CustomerFixedInstruction';
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  content: Scalars['String'];
};

export type CustomerFixedInstructionFilterInput = {
  ids?: Maybe<Array<Scalars['Int']>>;
};

export type CustomerFixedInstructionsResult = {
  __typename?: 'CustomerFixedInstructionsResult';
  count: Scalars['Int'];
  items: Array<CustomerFixedInstruction>;
};

export type CustomerInfo = {
  __typename?: 'CustomerInfo';
  contactInformationList: Array<CustomerContactInformation>;
  welcomeMessage?: Maybe<Scalars['String']>;
};

export type CustomerInfoInput = {
  contactInformationList: Array<CustomerContactInformationInput>;
};

export type CustomerLocation = {
  __typename?: 'CustomerLocation';
  id: Scalars['ID'];
  description: Scalars['String'];
  title: Scalars['String'];
  clientSideRotation?: Maybe<Scalars['Float']>;
  clientSideRotationInputStream?: Maybe<Scalars['Float']>;
  agentSideRotation?: Maybe<Scalars['Float']>;
};

export type CustomerLocationInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  clientSideRotation?: Maybe<Scalars['Float']>;
  clientSideRotationInputStream?: Maybe<Scalars['Float']>;
  agentSideRotation?: Maybe<Scalars['Float']>;
};

export type CustomerScreenColors = {
  __typename?: 'CustomerScreenColors';
  background: Scalars['String'];
  buttonsBackground: Scalars['String'];
  buttonsText: Scalars['String'];
  text: Scalars['String'];
};

export type CustomerScreenColorsInput = {
  buttonsBackground?: Maybe<Scalars['String']>;
  buttonsText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type CustomerScreenLocale = {
  __typename?: 'CustomerScreenLocale';
  content: Array<TextByLanguage>;
  type: Scalars['String'];
};

export type CustomerScreenLocaleInput = {
  content?: Maybe<Array<TextByLanguageInput>>;
  type?: Maybe<Scalars['String']>;
};

export type CustomerTemporaryInstruction = {
  __typename?: 'CustomerTemporaryInstruction';
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  content: Scalars['String'];
  validFrom: Scalars['DateTime'];
  validUntil: Scalars['DateTime'];
  active: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
};

export type CustomerTemporaryInstructionFilterInput = {
  ids?: Maybe<Array<Scalars['Int']>>;
  type: InstructionTypes;
};

export type CustomerTemporaryInstructionsResult = {
  __typename?: 'CustomerTemporaryInstructionsResult';
  count: Scalars['Int'];
  items: Array<CustomerTemporaryInstruction>;
};

export type CustomersResult = {
  __typename?: 'CustomersResult';
  count: Scalars['Int'];
  items: Array<Customer>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  meccaConversations: DashboardConversation;
  socialConversations: DashboardConversation;
  invoices: DashboardInvoice;
  notifications: NotificationsResult;
};

export type DashboardNotificationsArgs = {
  filter?: Maybe<NotificationFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type DashboardConversation = {
  __typename?: 'DashboardConversation';
  total: Scalars['Int'];
  countsByStatus: Array<DashboardConversationStatus>;
};

export type DashboardConversationStatus = {
  __typename?: 'DashboardConversationStatus';
  status: ConversationStatus;
  total: Scalars['Int'];
};

export type DashboardInvoice = {
  __typename?: 'DashboardInvoice';
  current?: Maybe<Scalars['Float']>;
  open: Scalars['Int'];
};

/** The different types of day/night calls */
export enum DayNightCallTypes {
  Daylight = 'DAYLIGHT',
  Day = 'DAY',
  Night = 'NIGHT',
}

export type DefaultLocale = {
  __typename?: 'DefaultLocale';
  content: Array<Content>;
  type: TextLocation;
};

export type DownloadResult = {
  __typename?: 'DownloadResult';
  content: Scalars['String'];
  contentType: Scalars['String'];
  fileName: Scalars['String'];
};

export type DurationTimeReporting = CallBaseReporting & {
  __typename?: 'DurationTimeReporting';
  totalNrOfCalls: Scalars['Int'];
  title: Scalars['String'];
  yAxisTitle: Scalars['String'];
  xAxisTitle: Scalars['String'];
  yAxisValues: Array<Scalars['Float']>;
  xAxisValues: Array<Scalars['String']>;
  averageDuration: Scalars['Float'];
};

export type EditMeccaConversationInputModel = {
  messageId: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Scalars['String']>>;
  phones?: Maybe<Array<Scalars['String']>>;
  structuredType?: Maybe<MeccaConversationStructuredTypeValueInput>;
};

export type EventModel = {
  eventTime: Scalars['DateTime'];
  type: EventTypes;
};

/** The different types of events */
export enum EventTypes {
  ConversationCreated = 'ConversationCreated',
  ConversationUpdated = 'ConversationUpdated',
  ConversationForwarded = 'ConversationForwarded',
  ConversationReaded = 'ConversationReaded',
  ConversationFlagged = 'ConversationFlagged',
  ConversationUnflagged = 'ConversationUnflagged',
  ConversationArchived = 'ConversationArchived',
  ConversationClosed = 'ConversationClosed',
  ConversationStatusChanged = 'ConversationStatusChanged',
  ConversationPriorityChanged = 'ConversationPriorityChanged',
}

export type FilterInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type FilterMeccaConversationInputModel = {
  ids?: Maybe<Array<Scalars['ID']>>;
  read?: Maybe<Scalars['Boolean']>;
  channelType?: Maybe<Array<ChannelType>>;
  flagged?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['DateTime']>;
  inboxType?: Maybe<Scalars['String']>;
  priorityFrom?: Maybe<Scalars['Int']>;
  priorityTill?: Maybe<Scalars['Int']>;
  till?: Maybe<Scalars['DateTime']>;
  statusses?: Maybe<Array<ConversationStatus>>;
};

export type ForwardConversationAgentMessage = {
  emails?: Maybe<Array<Scalars['String']>>;
  phones?: Maybe<Array<Scalars['String']>>;
};

export type Image = {
  __typename?: 'Image';
  type: Scalars['String'];
  url: Scalars['String'];
};

/** The different types of invoices */
export enum InstructionTypes {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Future = 'FUTURE',
}

export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['Int'];
  amount: Scalars['Float'];
  date: Scalars['DateTime'];
  dueDate?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
  month: Scalars['Int'];
  invoiceNr: Scalars['Int'];
  paid: Scalars['Boolean'];
  type: InvoiceTypes;
  attachment?: Maybe<Attachment>;
};

export type InvoiceFilterInput = {
  ids?: Maybe<Array<Scalars['Int']>>;
  paid?: Maybe<Scalars['Boolean']>;
};

/** The different types of invoices */
export enum InvoiceTypes {
  Invoice = 'INVOICE',
  CreditNota = 'CREDIT_NOTA',
}

export type InvoicesResult = {
  __typename?: 'InvoicesResult';
  count: Scalars['Int'];
  items: Array<Invoice>;
};

export enum LangEnum {
  En = 'en',
  Fr = 'fr',
  De = 'de',
  Nl = 'nl',
}

export enum Language {
  De = 'DE',
  En = 'EN',
  Fr = 'FR',
  Nl = 'NL',
}

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<LocationAddress>;
  customerId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  clientSideRotation?: Maybe<Scalars['Float']>;
  clientSideRotationInputStream?: Maybe<Scalars['Float']>;
  agentSideRotation?: Maybe<Scalars['Float']>;
};

export type LocationAddress = {
  __typename?: 'LocationAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
};

export type MeccaBlankConversationModel = MeccaConversationModel & {
  __typename?: 'MeccaBlankConversationModel';
  id: Scalars['ID'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged?: Maybe<Scalars['Boolean']>;
  participants: Array<MeccaConversationParticipant>;
  priority: Scalars['Float'];
  lastMessageTime: Scalars['DateTime'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<MeccaConversationModel>;
  unformattedBodyText?: Maybe<Scalars['String']>;
  unformattedText?: Maybe<Scalars['String']>;
  htmlBodyText?: Maybe<Scalars['String']>;
  htmlStructuredMessage?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<MessageAttachmentModel>>;
  channel?: Maybe<PairedChannel>;
  channelsActive: Scalars['Boolean'];
};

export type MeccaConversationModel = {
  id: Scalars['ID'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged?: Maybe<Scalars['Boolean']>;
  participants: Array<MeccaConversationParticipant>;
  priority: Scalars['Float'];
  lastMessageTime: Scalars['DateTime'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<MeccaConversationModel>;
  unformattedBodyText?: Maybe<Scalars['String']>;
  unformattedText?: Maybe<Scalars['String']>;
  htmlBodyText?: Maybe<Scalars['String']>;
  htmlStructuredMessage?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<MessageAttachmentModel>>;
};

export type MeccaConversationParticipant = {
  __typename?: 'MeccaConversationParticipant';
  channel: ChannelType;
  channelId: Scalars['ID'];
  destination: Scalars['String'];
  source: Scalars['String'];
};

export type MeccaConversationResultModel = {
  __typename?: 'MeccaConversationResultModel';
  count: Scalars['Int'];
  items: Array<MeccaConversationModel>;
};

export type MeccaConversationStructuredTypeValueFieldValueInput = {
  label: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type MeccaConversationStructuredTypeValueInput = {
  name: Scalars['String'];
  fieldValues: Array<MeccaConversationStructuredTypeValueFieldValueInput>;
};

export type MeccaTextConversationModel = MeccaConversationModel & {
  __typename?: 'MeccaTextConversationModel';
  id: Scalars['ID'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged?: Maybe<Scalars['Boolean']>;
  participants: Array<MeccaConversationParticipant>;
  priority: Scalars['Float'];
  lastMessageTime: Scalars['DateTime'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<MeccaConversationModel>;
  unformattedBodyText?: Maybe<Scalars['String']>;
  unformattedText?: Maybe<Scalars['String']>;
  htmlBodyText?: Maybe<Scalars['String']>;
  htmlStructuredMessage?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<MessageAttachmentModel>>;
  preview?: Maybe<MeccaTextConversationPreviewModel>;
  multipleResponsesTill?: Maybe<Scalars['DateTime']>;
  canSendResponse?: Maybe<Scalars['Boolean']>;
  channel?: Maybe<PairedChannel>;
  channelsActive: Scalars['Boolean'];
  messages: Array<Message>;
  agentMessages: Array<AgentMessageResult>;
};

export type MeccaTextConversationPreviewModel = {
  type: TextConversationPreviewTypes;
};

export type MeccaTextConversationPreviewModelTextAndAttachments = MeccaTextConversationPreviewModel & {
  __typename?: 'MeccaTextConversationPreviewModelTextAndAttachments';
  type: TextConversationPreviewTypes;
  messageTime: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
};

export type MeccaTextConversationPreviewModelTextAndAttachmentsWithStructuredMessage = MeccaTextConversationPreviewModel & {
  __typename?: 'MeccaTextConversationPreviewModelTextAndAttachmentsWithStructuredMessage';
  type: TextConversationPreviewTypes;
  messageTime: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
  structuredMessage?: Maybe<AgentMessageStructuredMessage>;
};

export type MeccaVideoConversationModel = MeccaConversationModel & {
  __typename?: 'MeccaVideoConversationModel';
  id: Scalars['ID'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged?: Maybe<Scalars['Boolean']>;
  participants: Array<MeccaConversationParticipant>;
  priority: Scalars['Float'];
  lastMessageTime: Scalars['DateTime'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<MeccaConversationModel>;
  unformattedBodyText?: Maybe<Scalars['String']>;
  unformattedText?: Maybe<Scalars['String']>;
  htmlBodyText?: Maybe<Scalars['String']>;
  htmlStructuredMessage?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<MessageAttachmentModel>>;
  callId: Scalars['String'];
  redirected: Scalars['Boolean'];
  videoUrl: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  attachments?: Maybe<Array<Attachment>>;
  channelType: ChannelType;
  content?: Maybe<Scalars['String']>;
  conversationId: Scalars['ID'];
  destination: Scalars['String'];
  eventTime: Scalars['DateTime'];
  external?: Maybe<Scalars['Boolean']>;
  messageTime: Scalars['DateTime'];
  sender: User;
  serviceId: Scalars['String'];
  source: Scalars['String'];
};

export type MessageAttachmentModel = {
  __typename?: 'MessageAttachmentModel';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  fileTypeId?: Maybe<Scalars['Int']>;
  dateTimeAdded?: Maybe<Scalars['DateTime']>;
};

export type MissedCallsReporting = CallBaseReporting & {
  __typename?: 'MissedCallsReporting';
  totalNrOfCalls: Scalars['Int'];
  title: Scalars['String'];
  yAxisTitle: Scalars['String'];
  xAxisTitle: Scalars['String'];
  yAxisValues: Array<Scalars['Float']>;
  xAxisValues: Array<Scalars['String']>;
  canBeDisplayed?: Maybe<Scalars['Boolean']>;
  averageWaitingTime: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCustomer: Customer;
  activateChannel: MutationResult;
  deactivateChannel: MutationResult;
  pairChannel: PairedChannel;
  restoreChannel: MutationResult;
  unpairChannel: MutationResult;
  updateChannel: PairedChannel;
  createRole: Role;
  updateRole: Role;
  deleteRole: Role;
  createUser: User;
  updateUser: User;
  updateCurrentUserLocale: Scalars['Boolean'];
  deleteUser: MutationResult;
  updateUserStatus: UserStatus;
  createCustomerCrmContact: CustomerCrmContact;
  updateCustomerCrmContact: CustomerCrmContact;
  deleteCustomerCrmContact: MutationResult;
  createMeccaConversation: MeccaConversationModel;
  editMeccaConversation: MeccaConversationModel;
  removeMeccaMessageAttachment: Scalars['Boolean'];
  addMeccaMessageAttachment: Scalars['Boolean'];
  updateMeccaConversation: MeccaConversationModel;
  bulkUpdateMeccaConversations: Array<MeccaConversationModel>;
  addMeccaConversationAgentMessage: MutationResult;
  forwardMeccaConversationAgentMessage: MutationResult;
  forwardMeccaConversationsAgent: MutationResult;
  bulkUpdateSocialConversations: Array<SocialConversationModel>;
  updateSocialConversation: SocialConversationModel;
  sendSocialConversationText: MutationResult;
  removeSocialConversationAttachment: Scalars['Boolean'];
  createCustomerAttachment: CustomerAttachment;
  updateCustomerAttachment: CustomerAttachment;
  deleteCustomerAttachment: MutationResult;
  payInvoice: PayInvoiceResult;
  sendContactRequest: MutationResult;
  createCustomerTemporaryInstruction: CustomerTemporaryInstruction;
  updateCustomerTemporaryInstruction: CustomerTemporaryInstruction;
  deleteCustomerTemporaryInstruction: MutationResult;
  initiateVideoCall: VideoCallInfo;
  endVideoCall: MutationResult;
  removeScheduledVideoCall: MutationResult;
  createVideoCallSettings: VideoCallSettings;
  updateVideoCallSettings: VideoCallSettings;
  updateVideoCallSettingsLocation: VideoCallSettings;
  answerVideoCall: VideoCallInfo;
  createStandby: Standby;
  updateStandby: Standby;
  deleteStandby: MutationResult;
  registerWebpush: MutationResult;
};

export type MutationUpdateCustomerArgs = {
  id: Scalars['ID'];
  input: UpdateCustomerInput;
};

export type MutationActivateChannelArgs = {
  id: Scalars['ID'];
};

export type MutationDeactivateChannelArgs = {
  id: Scalars['ID'];
};

export type MutationPairChannelArgs = {
  input: PairChannelInput;
};

export type MutationRestoreChannelArgs = {
  id: Scalars['ID'];
};

export type MutationUnpairChannelArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateChannelArgs = {
  input: PairedChannelUpdateInput;
  id: Scalars['ID'];
};

export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};

export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
  id: Scalars['ID'];
};

export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  id: Scalars['ID'];
};

export type MutationUpdateCurrentUserLocaleArgs = {
  locale: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateUserStatusArgs = {
  input: UpdateUserStatusInput;
};

export type MutationCreateCustomerCrmContactArgs = {
  input: CreateCustomerCrmContactInput;
};

export type MutationUpdateCustomerCrmContactArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerCrmContactInput;
};

export type MutationDeleteCustomerCrmContactArgs = {
  id: Scalars['Int'];
};

export type MutationCreateMeccaConversationArgs = {
  input: CreateMeccaConversationInputModel;
};

export type MutationEditMeccaConversationArgs = {
  input: EditMeccaConversationInputModel;
};

export type MutationRemoveMeccaMessageAttachmentArgs = {
  input: RemoveMeccaMessageAttachmentInputModel;
};

export type MutationAddMeccaMessageAttachmentArgs = {
  input: AddMeccaMessageAttachmentInputModel;
};

export type MutationUpdateMeccaConversationArgs = {
  input: UpdateMeccaConversationInputModel;
  id: Scalars['ID'];
};

export type MutationBulkUpdateMeccaConversationsArgs = {
  input: UpdateMeccaConversationInputModel;
  ids: Array<Scalars['ID']>;
};

export type MutationAddMeccaConversationAgentMessageArgs = {
  input: AddConversationAgentMessage;
  agentMessageId: Scalars['ID'];
  conversationId: Scalars['ID'];
};

export type MutationForwardMeccaConversationAgentMessageArgs = {
  conversationId: Scalars['ID'];
  agentMessageId: Scalars['ID'];
  input: ForwardConversationAgentMessage;
};

export type MutationForwardMeccaConversationsAgentArgs = {
  messagesIds: Array<Scalars['ID']>;
  input: ForwardConversationAgentMessage;
};

export type MutationBulkUpdateSocialConversationsArgs = {
  input: UpdateSocialConversationInputModel;
  ids: Array<Scalars['ID']>;
};

export type MutationUpdateSocialConversationArgs = {
  input: UpdateSocialConversationInputModel;
  id: Scalars['ID'];
};

export type MutationSendSocialConversationTextArgs = {
  input: SendConversationTextInput;
  id: Scalars['ID'];
};

export type MutationRemoveSocialConversationAttachmentArgs = {
  input: RemoveSocialMessageAttachmentInputModel;
};

export type MutationCreateCustomerAttachmentArgs = {
  input: CreateCustomerAttachmentInput;
};

export type MutationUpdateCustomerAttachmentArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerAttachmentInput;
};

export type MutationDeleteCustomerAttachmentArgs = {
  id: Scalars['Int'];
};

export type MutationPayInvoiceArgs = {
  id: Scalars['Int'];
};

export type MutationSendContactRequestArgs = {
  input: CreateContactRequestInput;
};

export type MutationCreateCustomerTemporaryInstructionArgs = {
  input: CreateCustomerTemporaryInstructionInput;
};

export type MutationUpdateCustomerTemporaryInstructionArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerTemporaryInstructionInput;
};

export type MutationDeleteCustomerTemporaryInstructionArgs = {
  id: Scalars['Int'];
};

export type MutationInitiateVideoCallArgs = {
  platformId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
};

export type MutationEndVideoCallArgs = {
  platformId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  callId: Scalars['ID'];
};

export type MutationRemoveScheduledVideoCallArgs = {
  platformId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  callId: Scalars['ID'];
};

export type MutationCreateVideoCallSettingsArgs = {
  input: VideoCallSettingsInput;
};

export type MutationUpdateVideoCallSettingsArgs = {
  input: VideoCallSettingsInput;
};

export type MutationUpdateVideoCallSettingsLocationArgs = {
  input: UpdateVideoCallSettingsLocationInput;
};

export type MutationAnswerVideoCallArgs = {
  callId: Scalars['ID'];
};

export type MutationCreateStandbyArgs = {
  input: CreateStandbyInput;
};

export type MutationUpdateStandbyArgs = {
  id: Scalars['ID'];
  input: UpdateStandbyInput;
};

export type MutationDeleteStandbyArgs = {
  id: Scalars['ID'];
};

export type MutationRegisterWebpushArgs = {
  input: RegisterWebPushInput;
};

export type MutationResult = {
  __typename?: 'MutationResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Notification = {
  date: Scalars['DateTime'];
  type: NotificationTypes;
};

export type NotificationConversation = Notification & {
  __typename?: 'NotificationConversation';
  date: Scalars['DateTime'];
  type: NotificationTypes;
  status: ConversationStatus;
  conversationId: Scalars['String'];
  conversation: SocialConversationModel;
};

export type NotificationFilter = {
  types: Array<NotificationTypes>;
};

export type NotificationInvoice = Notification & {
  __typename?: 'NotificationInvoice';
  date: Scalars['DateTime'];
  type: NotificationTypes;
  amount: Scalars['Float'];
  invoice: Invoice;
};

/** The different types of notifications */
export enum NotificationTypes {
  Invoice = 'INVOICE',
  Conversation = 'CONVERSATION',
}

export type NotificationsResult = {
  __typename?: 'NotificationsResult';
  count: Scalars['Int'];
  items: Array<Notification>;
};

export type NrOfCallsPerHourReporting = CallBaseReporting & {
  __typename?: 'NrOfCallsPerHourReporting';
  totalNrOfCalls: Scalars['Int'];
  title: Scalars['String'];
  yAxisTitle: Scalars['String'];
  xAxisTitle: Scalars['String'];
  yAxisValues: Array<Scalars['Float']>;
  xAxisValues: Array<Scalars['String']>;
};

export type PairChannelFacebookInput = {
  accessToken: Scalars['String'];
  pageId: Scalars['String'];
};

export type PairChannelInput = {
  channelIdentifier: Scalars['String'];
  type: ChannelType;
  facebook?: Maybe<PairChannelFacebookInput>;
  twitter?: Maybe<PairChannelTwitterInput>;
  whatsapp?: Maybe<PairChannelWhatsappInput>;
};

export type PairChannelTwitterInput = {
  forUserId: Scalars['String'];
};

export type PairChannelWhatsappInput = {
  number: Scalars['String'];
};

export type PairedChannel = {
  id: Scalars['ID'];
  account: Scalars['ID'];
  active: Scalars['Boolean'];
  channelIdentifier?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
  type: ChannelType;
};

export type PairedChannelBlank = PairedChannel & {
  __typename?: 'PairedChannelBlank';
  id: Scalars['ID'];
  account: Scalars['ID'];
  active: Scalars['Boolean'];
  channelIdentifier?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
  type: ChannelType;
};

export type PairedChannelFacebook = PairedChannel & {
  __typename?: 'PairedChannelFacebook';
  id: Scalars['ID'];
  account: Scalars['ID'];
  active: Scalars['Boolean'];
  channelIdentifier?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
  type: ChannelType;
  pageId: Scalars['String'];
};

export type PairedChannelFilterInput = {
  account?: Maybe<Scalars['ID']>;
  channelIdentifier?: Maybe<Scalars['String']>;
};

export type PairedChannelTwitter = PairedChannel & {
  __typename?: 'PairedChannelTwitter';
  id: Scalars['ID'];
  account: Scalars['ID'];
  active: Scalars['Boolean'];
  channelIdentifier?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
  type: ChannelType;
  forUserId: Scalars['String'];
};

export type PairedChannelUpdateInput = {
  channelIdentifier?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
};

export type PairedChannelVideo = PairedChannel & {
  __typename?: 'PairedChannelVideo';
  id: Scalars['ID'];
  account: Scalars['ID'];
  active: Scalars['Boolean'];
  channelIdentifier?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
  type: ChannelType;
};

export type PairedChannelWhatsapp = PairedChannel & {
  __typename?: 'PairedChannelWhatsapp';
  id: Scalars['ID'];
  account: Scalars['ID'];
  active: Scalars['Boolean'];
  channelIdentifier?: Maybe<Scalars['String']>;
  deleted: Scalars['Boolean'];
  redirect?: Maybe<Scalars['Boolean']>;
  redirectDelay?: Maybe<Scalars['Int']>;
  type: ChannelType;
  number: Scalars['String'];
};

export type PairedChannelsResult = {
  __typename?: 'PairedChannelsResult';
  count: Scalars['Int'];
  items: Array<PairedChannel>;
};

export type PayInvoiceResult = {
  __typename?: 'PayInvoiceResult';
  redirectUrl?: Maybe<Scalars['String']>;
};

export type PropertySearch = {
  fields?: Maybe<Array<Scalars['String']>>;
  search: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCurrentCompany: CompanyResultModel;
  getCurrentCommunicationCompany: CompanyResultModel;
  customer: Customer;
  customerChatData: CustomerChatData;
  customers: CustomersResult;
  sessionCustomer: Customer;
  pairedChannels: PairedChannelsResult;
  conversationStructuredTypes: ConversationStructuredTypesResult;
  roles: RolesResult;
  users: UsersResult;
  user: User;
  logout: Scalars['Boolean'];
  getCurrentUser: User;
  userStatus: UserStatus;
  customerCrmContacts: CustomerCrmContactsResult;
  customerCrmContactCommunicationTypes: CustomerCrmContactCommunicationTypesResult;
  customerCrmContactGroups: CustomerCrmContactGroupsResult;
  meccaConversation: MeccaConversationModel;
  meccaConversations: MeccaConversationResultModel;
  meccaConversationsByFilter: Array<MeccaConversationModel>;
  checkConversationLocked: Scalars['Boolean'];
  socialConversations: SocialConversationsResultModel;
  socialConversation: SocialConversationModel;
  customerAttachments: CustomerAttachmentsResult;
  invoices: InvoicesResult;
  incomingCalls: Array<CallResult>;
  outgoingCalls: Array<CallResult>;
  countries: CountriesResult;
  customerFixedInstructions: CustomerFixedInstructionsResult;
  customerTemporaryInstructions: CustomerTemporaryInstructionsResult;
  dashboard: Dashboard;
  agentsStatus: AgentsStatusResponse;
  videoCallSettings?: Maybe<VideoCallSettings>;
  defaultLocale: Array<DefaultLocale>;
  videoCall: VideoCall;
  videoCalls: VideoCallResult;
  callReporting?: Maybe<CallReportingResult>;
  downloadIncomingCallReporting: DownloadResult;
  downloadOutgoingCallReporting: DownloadResult;
  videoCallReporting: VideoCallReportingResult;
  downloadVideoCallReporting: DownloadResult;
  search: SearchResult;
  standby: StandbysResult;
  theme: Theme;
};

export type QueryCustomerArgs = {
  filter?: Maybe<CustomerFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
  search?: Maybe<PropertySearch>;
};

export type QueryCustomersArgs = {
  filter?: Maybe<CustomerFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
  search?: Maybe<PropertySearch>;
};

export type QueryPairedChannelsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
  filter?: Maybe<PairedChannelFilterInput>;
};

export type QueryConversationStructuredTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
  filter?: Maybe<RolesFilterInput>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
  filter?: Maybe<UsersFilterInput>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryCustomerCrmContactsArgs = {
  filter?: Maybe<CustomerCrmContactFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryCustomerCrmContactCommunicationTypesArgs = {
  filter?: Maybe<CustomerCrmContactCommunicationTypeFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryCustomerCrmContactGroupsArgs = {
  filter?: Maybe<CustomerCrmContactGroupFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryMeccaConversationArgs = {
  id: Scalars['ID'];
};

export type QueryMeccaConversationsArgs = {
  sort?: Maybe<SortOrder>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterMeccaConversationInputModel>;
};

export type QueryMeccaConversationsByFilterArgs = {
  till?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['DateTime']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryCheckConversationLockedArgs = {
  agentMessageId: Scalars['ID'];
  conversationId: Scalars['ID'];
};

export type QuerySocialConversationsArgs = {
  sort?: Maybe<SortOrder>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<SocialConversationFilterModel>;
};

export type QuerySocialConversationArgs = {
  id: Scalars['ID'];
};

export type QueryCustomerAttachmentsArgs = {
  filter?: Maybe<CustomerAttachmentFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryInvoicesArgs = {
  filter?: Maybe<InvoiceFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryIncomingCallsArgs = {
  filter?: Maybe<CallFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  ignoreLimitOffset?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryOutgoingCallsArgs = {
  filter?: Maybe<CallFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  ignoreLimitOffset?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryCustomerFixedInstructionsArgs = {
  filter?: Maybe<CustomerFixedInstructionFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryCustomerTemporaryInstructionsArgs = {
  filter?: Maybe<CustomerTemporaryInstructionFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryAgentsStatusArgs = {
  platformId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
};

export type QueryVideoCallSettingsArgs = {
  platformId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
};

export type QueryVideoCallArgs = {
  callId: Scalars['ID'];
};

export type QueryVideoCallsArgs = {
  filter?: Maybe<VideoCallFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryCallReportingArgs = {
  filter?: Maybe<FilterInput>;
};

export type QueryDownloadIncomingCallReportingArgs = {
  filter?: Maybe<FilterInput>;
  sort?: Maybe<Array<SortInput>>;
  phoneNumber?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
};

export type QueryDownloadOutgoingCallReportingArgs = {
  filter?: Maybe<FilterInput>;
  sort?: Maybe<Array<SortInput>>;
  phoneNumber?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
};

export type QueryVideoCallReportingArgs = {
  filter?: Maybe<FilterInput>;
};

export type QueryDownloadVideoCallReportingArgs = {
  filter?: Maybe<FilterInput>;
  sort?: Maybe<Array<SortInput>>;
  phoneNumber?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
};

export type QuerySearchArgs = {
  filter?: Maybe<SearchFilterInput>;
  search: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type QueryStandbyArgs = {
  filter?: Maybe<StandbyFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
};

export type RegisterWebPushInput = {
  endpoint: Scalars['String'];
  keys: WebPushKeysInput;
};

export type RemoveMeccaMessageAttachmentInputModel = {
  attachmentId: Scalars['Float'];
  messageId: Scalars['Float'];
};

export type RemoveSocialMessageAttachmentInputModel = {
  attachmentUrl: Scalars['String'];
  conversationId: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type RolesFilterInput = {
  value?: Maybe<Scalars['String']>;
};

export type RolesResult = {
  __typename?: 'RolesResult';
  count: Scalars['Int'];
  items: Array<Role>;
};

export type Search = {
  type: SearchTypes;
};

export type SearchAgentMessage = Search & {
  __typename?: 'SearchAgentMessage';
  type: SearchTypes;
  agentMessage?: Maybe<AgentMessage>;
};

export type SearchAttachment = Search & {
  __typename?: 'SearchAttachment';
  type: SearchTypes;
  attachment?: Maybe<Attachment>;
};

export type SearchCustomerCrmContact = Search & {
  __typename?: 'SearchCustomerCrmContact';
  type: SearchTypes;
  customerCrmContact?: Maybe<CustomerCrmContact>;
};

export type SearchCustomerFixedInstruction = Search & {
  __typename?: 'SearchCustomerFixedInstruction';
  type: SearchTypes;
  customerFixedInstruction?: Maybe<CustomerFixedInstruction>;
};

export type SearchCustomerTemporaryInstruction = Search & {
  __typename?: 'SearchCustomerTemporaryInstruction';
  type: SearchTypes;
  customerTemporaryInstruction?: Maybe<CustomerTemporaryInstruction>;
};

export type SearchFilterInput = {
  types?: Maybe<Array<SearchTypes>>;
};

export type SearchMessage = Search & {
  __typename?: 'SearchMessage';
  type: SearchTypes;
  message?: Maybe<Message>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  count: Scalars['Int'];
  countByType: Array<SearchTypeCount>;
  items: Array<Search>;
};

export type SearchTypeCount = {
  __typename?: 'SearchTypeCount';
  count: Scalars['Int'];
  type: SearchTypes;
};

/** The different types of search */
export enum SearchTypes {
  Message = 'MESSAGE',
  Agentmessage = 'AGENTMESSAGE',
  Attachment = 'ATTACHMENT',
  CustomerCrmContact = 'CUSTOMER_CRM_CONTACT',
  CustomerFixedInstruction = 'CUSTOMER_FIXED_INSTRUCTION',
  CustomerTemporaryInstruction = 'CUSTOMER_TEMPORARY_INSTRUCTION',
}

export type SendConversationTextInput = {
  attachments?: Maybe<Array<Scalars['Upload']>>;
  content?: Maybe<Scalars['String']>;
  messageTime: Scalars['DateTime'];
};

export type SocialConversationFilterModel = {
  read?: Maybe<Scalars['Boolean']>;
  channelType?: Maybe<Array<ChannelType>>;
  archived?: Maybe<Scalars['Boolean']>;
  flagged?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['DateTime']>;
  priorityFrom?: Maybe<Scalars['Int']>;
  priorityTill?: Maybe<Scalars['Int']>;
  till?: Maybe<Scalars['DateTime']>;
  statusses?: Maybe<Array<ConversationStatus>>;
};

export type SocialConversationModel = {
  __typename?: 'SocialConversationModel';
  id: Scalars['ID'];
  archived: Scalars['Boolean'];
  channelType?: Maybe<ChannelType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  lastUpdatedAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<EventModel>>;
  preview?: Maybe<SocialTextConversationPreviewModel>;
  multipleResponsesTill?: Maybe<Scalars['DateTime']>;
  canSendResponse?: Maybe<Scalars['Boolean']>;
  flagged: Scalars['Boolean'];
  participants?: Maybe<Array<SocialConversationParticipantModel>>;
  priority: Scalars['Int'];
  read: Scalars['Boolean'];
  status?: Maybe<ConversationStatus>;
  related?: Maybe<Array<SocialConversationModel>>;
  channel?: Maybe<PairedChannel>;
  channelsActive: Scalars['Boolean'];
  messages: Array<Message>;
};

export type SocialConversationParticipantModel = {
  __typename?: 'SocialConversationParticipantModel';
  channel: ChannelType;
  channelId: Scalars['ID'];
  destination: Scalars['String'];
  source: Scalars['String'];
};

export type SocialConversationsResultModel = {
  __typename?: 'SocialConversationsResultModel';
  count: Scalars['Int'];
  items: Array<SocialConversationModel>;
};

export type SocialTextConversationPreviewModel = {
  __typename?: 'SocialTextConversationPreviewModel';
  type: TextConversationPreviewTypes;
  messageTime: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
};

export type SortInput = {
  field: Scalars['String'];
  order: SortOrder;
};

/** ASC or DESC */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Standby = {
  __typename?: 'Standby';
  id: Scalars['ID'];
  from: StandbyHours;
  to: StandbyHours;
  notifyChannels?: Maybe<Array<StandbyNotifyChannels>>;
  crmContacts?: Maybe<Array<CustomerCrmContact>>;
};

export type StandbyFilter = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type StandbyHours = {
  __typename?: 'StandbyHours';
  hours: Scalars['Int'];
  minutes: Scalars['Int'];
};

export type StandbyHoursInput = {
  hours: Scalars['Int'];
  minutes: Scalars['Int'];
};

/** The different notify channels of standby */
export enum StandbyNotifyChannels {
  Sms = 'SMS',
  Email = 'EMAIL',
}

export type StandbysResult = {
  __typename?: 'StandbysResult';
  count: Scalars['Int'];
  items: Array<Standby>;
};

export type Subscription = {
  __typename?: 'Subscription';
  userStatusUpdated: UserStatus;
  meccaConversationCreated: MeccaTextConversationModel;
  meccaConversationUpdated: MeccaTextConversationModel;
  meccaConversationBulkUpdated: Array<MeccaTextConversationModel>;
  meccaConversationTextAdded: Message;
  socialConversationCreated: SocialConversationModel;
  SocialConversationUpdated: SocialConversationModel;
  SocialConversationBulkUpdated: Array<SocialConversationModel>;
  SocialNewReceivedMessage: Message;
  callNotification: VideoCallNotification;
  settingsUpdated: UpdateVideoCallSettingsNotification;
};

export type SubscriptionSettingsUpdatedArgs = {
  platformId: Scalars['String'];
  customerId: Scalars['String'];
};

export type TextByLanguage = {
  __typename?: 'TextByLanguage';
  language: Scalars['String'];
  value: Scalars['String'];
};

export type TextByLanguageInput = {
  language?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TextConversation = Conversation & {
  __typename?: 'TextConversation';
  id: Scalars['ID'];
  archived: Scalars['Boolean'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged: Scalars['Boolean'];
  participants: Array<ConversationParticipant>;
  priority: Scalars['Float'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<Conversation>;
  preview?: Maybe<TextConversationPreview>;
  multipleResponsesTill?: Maybe<Scalars['DateTime']>;
  canSendResponse?: Maybe<Scalars['Boolean']>;
};

export type TextConversationPreview = {
  type: TextConversationPreviewTypes;
};

export type TextConversationPreviewTextAndAttachments = TextConversationPreview & {
  __typename?: 'TextConversationPreviewTextAndAttachments';
  type: TextConversationPreviewTypes;
  messageTime: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
};

export type TextConversationPreviewTextAndAttachmentsWithStructuredMessage = TextConversationPreview & {
  __typename?: 'TextConversationPreviewTextAndAttachmentsWithStructuredMessage';
  type: TextConversationPreviewTypes;
  messageTime: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
  structuredMessage?: Maybe<AgentMessageStructuredMessage>;
};

/** The different types of preview */
export enum TextConversationPreviewTypes {
  TextAndAttachment = 'TextAndAttachment',
  TextAndAttachmentWithStructuredMessage = 'TextAndAttachmentWithStructuredMessage',
}

/** Translatable strings in the application */
export enum TextLocation {
  Closed = 'closed',
  InitiateCall = 'initiateCall',
  Intro = 'intro',
  Unavailable = 'unavailable',
  Welcome = 'welcome',
}

export type Theme = {
  __typename?: 'Theme';
  colors: Colors;
  images: Array<Image>;
};

export type UpdateCustomerAttachmentInput = {
  name?: Maybe<Scalars['String']>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validTill?: Maybe<Scalars['DateTime']>;
  attachment?: Maybe<Scalars['Upload']>;
};

export type UpdateCustomerCrmContactInput = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  sex?: Maybe<CustomerCrmContactSexes>;
  functionName?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<CustomerCrmContactAddressInput>>;
  communications?: Maybe<Array<CustomerCrmContactCommunicationInput>>;
  groups?: Maybe<Array<CustomerCrmContactGroupRelationInput>>;
};

export type UpdateCustomerInput = {
  info: CustomerInfoInput;
};

export type UpdateCustomerTemporaryInstructionInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type UpdateMeccaConversationInputModel = {
  flagged?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Boolean']>;
  read?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ConversationStatus>;
};

export type UpdateRoleInput = {
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type UpdateSocialConversationInputModel = {
  archived?: Maybe<Scalars['Boolean']>;
  flagged?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Boolean']>;
  read?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ConversationStatus>;
};

export type UpdateStandbyInput = {
  from?: Maybe<StandbyHoursInput>;
  to?: Maybe<StandbyHoursInput>;
  crmContactIds?: Maybe<Array<Scalars['Int']>>;
  notifyChannels?: Maybe<Array<StandbyNotifyChannels>>;
};

export type UpdateUserInput = {
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role: UserRole;
  customers: Array<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UpdateUserStatusInput = {
  active?: Maybe<Scalars['Boolean']>;
};

export type UpdateVideoCallSettingsLocationInput = {
  id?: Maybe<Scalars['String']>;
  agentSideRotation?: Maybe<Scalars['Float']>;
  clientSideRotation?: Maybe<Scalars['Float']>;
  clientSideRotationInputStream?: Maybe<Scalars['Float']>;
};

export type UpdateVideoCallSettingsNotification = {
  __typename?: 'UpdateVideoCallSettingsNotification';
  customerId: Scalars['String'];
  platformId: Scalars['String'];
  locations: Array<CustomerLocation>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  customers?: Maybe<Array<Scalars['String']>>;
  role?: Maybe<UserRole>;
};

/** User role */
export enum UserRole {
  Admin = 'admin',
  Superadmin = 'superadmin',
  Agent = 'agent',
}

export type UserStatus = {
  __typename?: 'UserStatus';
  active: Scalars['Boolean'];
};

export type UsersFilterInput = {
  value?: Maybe<Scalars['String']>;
};

export type UsersResult = {
  __typename?: 'UsersResult';
  count: Scalars['Int'];
  items: Array<User>;
};

export type VideoCall = {
  __typename?: 'VideoCall';
  id: Scalars['ID'];
  answeredAt?: Maybe<Scalars['DateTime']>;
  callAgent?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  customerId: Scalars['String'];
  endedAt?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  inProgress: Scalars['Boolean'];
  roomId?: Maybe<Scalars['String']>;
  /**
   * Returns duration in seconds. Returns 0 if
   *                       conversation is not answered or finished yet.
   */
  duration: Scalars['Int'];
};

export type VideoCallFilterInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  search?: Maybe<Scalars['String']>;
};

export type VideoCallInfo = {
  __typename?: 'VideoCallInfo';
  callId: Scalars['ID'];
  customerName?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  token: Scalars['String'];
};

export type VideoCallNotification = {
  __typename?: 'VideoCallNotification';
  callId: Scalars['String'];
  customerId: Scalars['String'];
  removeCall?: Maybe<Scalars['Boolean']>;
};

export type VideoCallReportingResult = {
  __typename?: 'VideoCallReportingResult';
  totalDuration: Scalars['Int'];
};

export type VideoCallResult = {
  __typename?: 'VideoCallResult';
  count: Scalars['Int'];
  items: Array<VideoCall>;
};

export type VideoCallSettings = {
  __typename?: 'VideoCallSettings';
  backgroundImage?: Maybe<Scalars['String']>;
  colors: CustomerScreenColors;
  defaultLanguage: Scalars['String'];
  languages: Array<Scalars['String']>;
  locale: Array<CustomerScreenLocale>;
  locations: Array<CustomerLocation>;
  logoImage: Scalars['String'];
  name: Scalars['String'];
  redirect: Scalars['Boolean'];
  redirectDelay: Scalars['Int'];
  template: Scalars['String'];
  timeoutDelay: Scalars['Int'];
};

export type VideoCallSettingsInput = {
  name?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Scalars['String']>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  logoImage?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['String']>;
  colors?: Maybe<CustomerScreenColorsInput>;
  locale?: Maybe<Array<CustomerScreenLocaleInput>>;
  locations?: Maybe<Array<CustomerLocationInput>>;
  redirectDelay: Scalars['Int'];
  timeoutDelay?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  redirect: Scalars['Boolean'];
};

export type VideoConversation = Conversation & {
  __typename?: 'VideoConversation';
  id: Scalars['ID'];
  archived: Scalars['Boolean'];
  channelType: ChannelType;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  lastUpdatedAt: Scalars['DateTime'];
  events: Array<EventModel>;
  flagged: Scalars['Boolean'];
  participants: Array<ConversationParticipant>;
  priority: Scalars['Float'];
  read: Scalars['Boolean'];
  status: ConversationStatus;
  related: Array<Conversation>;
  callId: Scalars['String'];
  redirected: Scalars['Boolean'];
  videoUrl: Scalars['String'];
};

export type WaitingTimeReporting = CallBaseReporting & {
  __typename?: 'WaitingTimeReporting';
  totalNrOfCalls: Scalars['Int'];
  title: Scalars['String'];
  yAxisTitle: Scalars['String'];
  xAxisTitle: Scalars['String'];
  yAxisValues: Array<Scalars['Float']>;
  xAxisValues: Array<Scalars['String']>;
  averageWaitingTime: Scalars['Float'];
};

export type WebPushKeysInput = {
  p256dh: Scalars['String'];
  auth: Scalars['String'];
};

export type CreateCustomerAttachmentMutationVariables = Exact<{
  input: CreateCustomerAttachmentInput;
}>;

export type CreateCustomerAttachmentMutation = { __typename?: 'Mutation' } & {
  createCustomerAttachment: { __typename?: 'CustomerAttachment' } & Pick<
    CustomerAttachment,
    'id' | 'name' | 'validFrom' | 'validTill' | 'active'
  > & { attachment: { __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'> };
};

export type DeleteCustomerAttachmentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteCustomerAttachmentMutation = { __typename?: 'Mutation' } & {
  deleteCustomerAttachment: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type GetCustomerAttachmentsQueryVariables = Exact<{
  filter?: Maybe<CustomerAttachmentFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetCustomerAttachmentsQuery = { __typename?: 'Query' } & {
  customerAttachments: { __typename?: 'CustomerAttachmentsResult' } & Pick<
    CustomerAttachmentsResult,
    'count'
  > & {
      items: Array<
        { __typename?: 'CustomerAttachmentWithVersions' } & Pick<
          CustomerAttachmentWithVersions,
          'id' | 'name' | 'validFrom' | 'validTill' | 'active' | 'type'
        > & {
            attachment: { __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>;
            versions: Array<
              { __typename?: 'CustomerAttachmentVersion' } & Pick<
                CustomerAttachmentVersion,
                'id' | 'validFrom' | 'validTill' | 'type' | 'active' | 'version'
              > & { attachment: { __typename?: 'Attachment' } & Pick<Attachment, 'url'> }
            >;
          }
      >;
    };
};

export type UpdateCustomerAttachmentMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCustomerAttachmentInput;
}>;

export type UpdateCustomerAttachmentMutation = { __typename?: 'Mutation' } & {
  updateCustomerAttachment: { __typename?: 'CustomerAttachment' } & Pick<
    CustomerAttachment,
    'id' | 'name' | 'validFrom' | 'validTill' | 'active'
  > & { attachment: { __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'> };
};

export type GetCurrentCommunicationCompanyQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentCommunicationCompanyQuery = { __typename?: 'Query' } & {
  getCurrentCommunicationCompany: { __typename: 'CompanyResultModel' } & Pick<
    CompanyResultModel,
    'id' | 'name' | 'profileName' | 'address1' | 'address2'
  >;
};

export type GetCurrentCompanyQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentCompanyQuery = { __typename?: 'Query' } & {
  getCurrentCompany: { __typename: 'CompanyResultModel' } & Pick<
    CompanyResultModel,
    'id' | 'name' | 'profileName' | 'address1' | 'address2'
  >;
};

export type SendContactRequestMutationVariables = Exact<{
  input: CreateContactRequestInput;
}>;

export type SendContactRequestMutation = { __typename?: 'Mutation' } & {
  sendContactRequest: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type AddMeccaConversationAgentMessageMutationVariables = Exact<{
  agentMessageId: Scalars['ID'];
  conversationId: Scalars['ID'];
  input: AddConversationAgentMessage;
}>;

export type AddMeccaConversationAgentMessageMutation = { __typename?: 'Mutation' } & {
  addMeccaConversationAgentMessage: { __typename?: 'MutationResult' } & Pick<
    MutationResult,
    'success'
  >;
};

export type AddMeccaConversationAttachmentMutationVariables = Exact<{
  input: AddMeccaMessageAttachmentInputModel;
}>;

export type AddMeccaConversationAttachmentMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'addMeccaMessageAttachment'
>;

export type BulkUpdateMeccaConversationsMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  input: UpdateMeccaConversationInputModel;
}>;

export type BulkUpdateMeccaConversationsMutation = { __typename?: 'Mutation' } & {
  bulkUpdateMeccaConversations: Array<
    | ({ __typename?: 'MeccaBlankConversationModel' } & Pick<MeccaBlankConversationModel, 'id'>)
    | ({ __typename?: 'MeccaTextConversationModel' } & Pick<MeccaTextConversationModel, 'id'>)
    | ({ __typename?: 'MeccaVideoConversationModel' } & Pick<MeccaVideoConversationModel, 'id'>)
  >;
};

export type CheckConversationLockedQueryVariables = Exact<{
  agentMessageId: Scalars['ID'];
  conversationId: Scalars['ID'];
}>;

export type CheckConversationLockedQuery = { __typename?: 'Query' } & Pick<
  Query,
  'checkConversationLocked'
>;

export type MeccaConversationBulkUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MeccaConversationBulkUpdatedSubscription = { __typename?: 'Subscription' } & {
  meccaConversationBulkUpdated: Array<
    {
      __typename?: 'MeccaTextConversationModel';
    } & MeccaConversationDetails_MeccaTextConversationModel_Fragment
  >;
};

type MeccaConversationDetails_MeccaBlankConversationModel_Fragment = {
  __typename?: 'MeccaBlankConversationModel';
} & Pick<MeccaBlankConversationModel, 'id'>;

type MeccaConversationDetails_MeccaTextConversationModel_Fragment = {
  __typename: 'MeccaTextConversationModel';
} & Pick<
  MeccaTextConversationModel,
  | 'channelType'
  | 'createdAt'
  | 'read'
  | 'flagged'
  | 'status'
  | 'unformattedBodyText'
  | 'unformattedText'
  | 'htmlStructuredMessage'
  | 'htmlMessage'
  | 'id'
> & {
    events: Array<
      | ({ __typename: 'ConversationArchivedEvent' } & Pick<ConversationArchivedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationClosedEvent' } & Pick<ConversationClosedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationCreatedEvent' } & Pick<ConversationCreatedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationFlaggedEvent' } & Pick<ConversationFlaggedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationForwardedEvent' } & Pick<
          ConversationForwardedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationPriorityChangedEvent' } & Pick<
          ConversationPriorityChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationReadedEvent' } & Pick<ConversationReadedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationStatusChangedEvent' } & Pick<
          ConversationStatusChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUnflaggedEvent' } & Pick<
          ConversationUnflaggedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUpdatedEvent' } & Pick<ConversationUpdatedEvent, 'eventTime'>)
    >;
    related: Array<
      | ({ __typename: 'MeccaBlankConversationModel' } & Pick<MeccaBlankConversationModel, 'id'>)
      | ({ __typename: 'MeccaTextConversationModel' } & Pick<MeccaTextConversationModel, 'id'>)
      | ({ __typename: 'MeccaVideoConversationModel' } & Pick<MeccaVideoConversationModel, 'id'>)
    >;
    channel?: Maybe<
      | ({ __typename: 'PairedChannelBlank' } & Pick<
          PairedChannelBlank,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelFacebook' } & Pick<
          PairedChannelFacebook,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelTwitter' } & Pick<
          PairedChannelTwitter,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelVideo' } & Pick<
          PairedChannelVideo,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelWhatsapp' } & Pick<
          PairedChannelWhatsapp,
          'channelIdentifier' | 'type'
        >)
    >;
    createdBy: { __typename: 'User' } & Pick<User, 'id' | 'displayName'>;
    messages: Array<{ __typename: 'Message' }>;
    agentMessages: Array<
      { __typename: 'AgentMessageResult' } & Pick<AgentMessageResult, 'id'> & {
          messages: Array<
            { __typename: 'AgentMessage' } & Pick<AgentMessage, 'content' | 'messageTime'> & {
                sender: { __typename: 'User' } & Pick<User, 'displayName'>;
              }
          >;
          attachments: Array<
            { __typename: 'Attachment' } & Pick<Attachment, 'id' | 'fileName' | 'url'>
          >;
          structuredMessage?: Maybe<
            { __typename: 'AgentMessageStructuredMessage' } & Pick<
              AgentMessageStructuredMessage,
              'name'
            > & {
                fields: Array<
                  { __typename: 'ConversationStructuredTypeField' } & Pick<
                    ConversationStructuredTypeField,
                    | 'sequence'
                    | 'label'
                    | 'description'
                    | 'required'
                    | 'readonly'
                    | 'defaultValue'
                    | 'options'
                  > & {
                      fieldType: { __typename: 'ConversationStructuredTypeFieldType' } & Pick<
                        ConversationStructuredTypeFieldType,
                        | 'name'
                        | 'regExForValidation'
                        | 'regExForValidChars'
                        | 'mask'
                        | 'maxLength'
                        | 'errorMessage'
                      >;
                    }
                >;
                values: Array<
                  { __typename: 'AgentMessageStructuredMessageValue' } & Pick<
                    AgentMessageStructuredMessageValue,
                    'sequence' | 'value'
                  >
                >;
              }
          >;
        }
    >;
    attachments?: Maybe<
      Array<
        { __typename?: 'MessageAttachmentModel' } & Pick<
          MessageAttachmentModel,
          'id' | 'fileName' | 'name' | 'fileTypeId' | 'dateTimeAdded' | 'url'
        >
      >
    >;
  };

type MeccaConversationDetails_MeccaVideoConversationModel_Fragment = {
  __typename?: 'MeccaVideoConversationModel';
} & Pick<MeccaVideoConversationModel, 'id'>;

export type MeccaConversationDetailsFragment =
  | MeccaConversationDetails_MeccaBlankConversationModel_Fragment
  | MeccaConversationDetails_MeccaTextConversationModel_Fragment
  | MeccaConversationDetails_MeccaVideoConversationModel_Fragment;

type MeccaConversationPreview_MeccaBlankConversationModel_Fragment = {
  __typename?: 'MeccaBlankConversationModel';
} & Pick<MeccaBlankConversationModel, 'id'>;

type MeccaConversationPreview_MeccaTextConversationModel_Fragment = {
  __typename: 'MeccaTextConversationModel';
} & Pick<
  MeccaTextConversationModel,
  | 'channelType'
  | 'createdAt'
  | 'read'
  | 'flagged'
  | 'status'
  | 'unformattedBodyText'
  | 'unformattedText'
  | 'htmlStructuredMessage'
  | 'htmlMessage'
  | 'id'
> & {
    channel?: Maybe<
      | ({ __typename: 'PairedChannelBlank' } & Pick<
          PairedChannelBlank,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelFacebook' } & Pick<
          PairedChannelFacebook,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelTwitter' } & Pick<
          PairedChannelTwitter,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelVideo' } & Pick<
          PairedChannelVideo,
          'channelIdentifier' | 'type'
        >)
      | ({ __typename: 'PairedChannelWhatsapp' } & Pick<
          PairedChannelWhatsapp,
          'channelIdentifier' | 'type'
        >)
    >;
    createdBy: { __typename: 'User' } & Pick<User, 'id' | 'displayName'>;
  };

type MeccaConversationPreview_MeccaVideoConversationModel_Fragment = {
  __typename?: 'MeccaVideoConversationModel';
} & Pick<MeccaVideoConversationModel, 'id'>;

export type MeccaConversationPreviewFragment =
  | MeccaConversationPreview_MeccaBlankConversationModel_Fragment
  | MeccaConversationPreview_MeccaTextConversationModel_Fragment
  | MeccaConversationPreview_MeccaVideoConversationModel_Fragment;

export type MeccaConversationUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MeccaConversationUpdatedSubscription = { __typename?: 'Subscription' } & {
  meccaConversationUpdated: {
    __typename?: 'MeccaTextConversationModel';
  } & MeccaConversationDetails_MeccaTextConversationModel_Fragment;
};

export type CreateMeccaConversationMutationVariables = Exact<{
  input: CreateMeccaConversationInputModel;
}>;

export type CreateMeccaConversationMutation = { __typename?: 'Mutation' } & {
  createMeccaConversation:
    | ({
        __typename?: 'MeccaBlankConversationModel';
      } & MeccaConversationPreview_MeccaBlankConversationModel_Fragment)
    | ({
        __typename?: 'MeccaTextConversationModel';
      } & MeccaConversationPreview_MeccaTextConversationModel_Fragment)
    | ({
        __typename?: 'MeccaVideoConversationModel';
      } & MeccaConversationPreview_MeccaVideoConversationModel_Fragment);
};

export type EditMeccaConversationMutationVariables = Exact<{
  input: EditMeccaConversationInputModel;
}>;

export type EditMeccaConversationMutation = { __typename?: 'Mutation' } & {
  editMeccaConversation:
    | ({
        __typename?: 'MeccaBlankConversationModel';
      } & MeccaConversationPreview_MeccaBlankConversationModel_Fragment)
    | ({
        __typename?: 'MeccaTextConversationModel';
      } & MeccaConversationPreview_MeccaTextConversationModel_Fragment)
    | ({
        __typename?: 'MeccaVideoConversationModel';
      } & MeccaConversationPreview_MeccaVideoConversationModel_Fragment);
};

export type ForwardMeccaConversationsAgentMutationVariables = Exact<{
  messagesIds: Array<Scalars['ID']> | Scalars['ID'];
  input: ForwardConversationAgentMessage;
}>;

export type ForwardMeccaConversationsAgentMutation = { __typename?: 'Mutation' } & {
  forwardMeccaConversationsAgent: { __typename?: 'MutationResult' } & Pick<
    MutationResult,
    'success'
  >;
};

export type GetMeccaConversationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetMeccaConversationQuery = { __typename?: 'Query' } & {
  meccaConversation:
    | ({
        __typename?: 'MeccaBlankConversationModel';
      } & MeccaConversationDetails_MeccaBlankConversationModel_Fragment)
    | ({
        __typename?: 'MeccaTextConversationModel';
      } & MeccaConversationDetails_MeccaTextConversationModel_Fragment)
    | ({
        __typename?: 'MeccaVideoConversationModel';
      } & MeccaConversationDetails_MeccaVideoConversationModel_Fragment);
};

export type GetMeccaConversationsPreviewQueryVariables = Exact<{
  filter?: Maybe<FilterMeccaConversationInputModel>;
  sort?: Maybe<SortOrder>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type GetMeccaConversationsPreviewQuery = { __typename?: 'Query' } & {
  meccaConversations: { __typename?: 'MeccaConversationResultModel' } & Pick<
    MeccaConversationResultModel,
    'count'
  > & {
      items: Array<
        | ({
            __typename?: 'MeccaBlankConversationModel';
          } & MeccaConversationPreview_MeccaBlankConversationModel_Fragment)
        | ({
            __typename?: 'MeccaTextConversationModel';
          } & MeccaConversationPreview_MeccaTextConversationModel_Fragment)
        | ({
            __typename?: 'MeccaVideoConversationModel';
          } & MeccaConversationPreview_MeccaVideoConversationModel_Fragment)
      >;
    };
};

export type MeccaConversationsByFilterQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  from?: Maybe<Scalars['DateTime']>;
  till?: Maybe<Scalars['DateTime']>;
}>;

export type MeccaConversationsByFilterQuery = { __typename?: 'Query' } & {
  meccaConversationsByFilter: Array<
    | ({
        __typename?: 'MeccaBlankConversationModel';
      } & MeccaConversationDetails_MeccaBlankConversationModel_Fragment)
    | ({
        __typename?: 'MeccaTextConversationModel';
      } & MeccaConversationDetails_MeccaTextConversationModel_Fragment)
    | ({
        __typename?: 'MeccaVideoConversationModel';
      } & MeccaConversationDetails_MeccaVideoConversationModel_Fragment)
  >;
};

export type RemoveMeccaConversationAttachementMutationVariables = Exact<{
  input: RemoveMeccaMessageAttachmentInputModel;
}>;

export type RemoveMeccaConversationAttachementMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'removeMeccaMessageAttachment'
>;

export type UpdateMeccaConversationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateMeccaConversationInputModel;
}>;

export type UpdateMeccaConversationMutation = { __typename?: 'Mutation' } & {
  updateMeccaConversation:
    | ({
        __typename?: 'MeccaBlankConversationModel';
      } & MeccaConversationPreview_MeccaBlankConversationModel_Fragment)
    | ({
        __typename?: 'MeccaTextConversationModel';
      } & MeccaConversationPreview_MeccaTextConversationModel_Fragment)
    | ({
        __typename?: 'MeccaVideoConversationModel';
      } & MeccaConversationPreview_MeccaVideoConversationModel_Fragment);
};

type ConversationDetail_BlankConversation_Fragment = { __typename: 'BlankConversation' } & Pick<
  BlankConversation,
  'id' | 'read' | 'archived'
> & {
    createdBy: { __typename?: 'User' } & Pick<User, 'displayName'>;
    events: Array<
      | ({ __typename: 'ConversationArchivedEvent' } & Pick<ConversationArchivedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationClosedEvent' } & Pick<ConversationClosedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationCreatedEvent' } & Pick<ConversationCreatedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationFlaggedEvent' } & Pick<ConversationFlaggedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationForwardedEvent' } & Pick<
          ConversationForwardedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationPriorityChangedEvent' } & Pick<
          ConversationPriorityChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationReadedEvent' } & Pick<ConversationReadedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationStatusChangedEvent' } & Pick<
          ConversationStatusChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUnflaggedEvent' } & Pick<
          ConversationUnflaggedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUpdatedEvent' } & Pick<ConversationUpdatedEvent, 'eventTime'>)
    >;
    participants: Array<
      { __typename?: 'ConversationParticipant' } & Pick<
        ConversationParticipant,
        'channel' | 'channelId'
      >
    >;
    related: Array<
      | ({ __typename?: 'BlankConversation' } & Pick<BlankConversation, 'id'>)
      | ({ __typename?: 'TextConversation' } & Pick<TextConversation, 'id'>)
      | ({ __typename?: 'VideoConversation' } & Pick<VideoConversation, 'id'>)
    >;
  };

type ConversationDetail_TextConversation_Fragment = { __typename: 'TextConversation' } & Pick<
  TextConversation,
  'id' | 'read' | 'archived'
> & {
    createdBy: { __typename?: 'User' } & Pick<User, 'displayName'>;
    events: Array<
      | ({ __typename: 'ConversationArchivedEvent' } & Pick<ConversationArchivedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationClosedEvent' } & Pick<ConversationClosedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationCreatedEvent' } & Pick<ConversationCreatedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationFlaggedEvent' } & Pick<ConversationFlaggedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationForwardedEvent' } & Pick<
          ConversationForwardedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationPriorityChangedEvent' } & Pick<
          ConversationPriorityChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationReadedEvent' } & Pick<ConversationReadedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationStatusChangedEvent' } & Pick<
          ConversationStatusChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUnflaggedEvent' } & Pick<
          ConversationUnflaggedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUpdatedEvent' } & Pick<ConversationUpdatedEvent, 'eventTime'>)
    >;
    participants: Array<
      { __typename?: 'ConversationParticipant' } & Pick<
        ConversationParticipant,
        'channel' | 'channelId'
      >
    >;
    related: Array<
      | ({ __typename?: 'BlankConversation' } & Pick<BlankConversation, 'id'>)
      | ({ __typename?: 'TextConversation' } & Pick<TextConversation, 'id'>)
      | ({ __typename?: 'VideoConversation' } & Pick<VideoConversation, 'id'>)
    >;
  };

type ConversationDetail_VideoConversation_Fragment = { __typename: 'VideoConversation' } & Pick<
  VideoConversation,
  'id' | 'read' | 'archived'
> & {
    createdBy: { __typename?: 'User' } & Pick<User, 'displayName'>;
    events: Array<
      | ({ __typename: 'ConversationArchivedEvent' } & Pick<ConversationArchivedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationClosedEvent' } & Pick<ConversationClosedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationCreatedEvent' } & Pick<ConversationCreatedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationFlaggedEvent' } & Pick<ConversationFlaggedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationForwardedEvent' } & Pick<
          ConversationForwardedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationPriorityChangedEvent' } & Pick<
          ConversationPriorityChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationReadedEvent' } & Pick<ConversationReadedEvent, 'eventTime'>)
      | ({ __typename: 'ConversationStatusChangedEvent' } & Pick<
          ConversationStatusChangedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUnflaggedEvent' } & Pick<
          ConversationUnflaggedEvent,
          'eventTime'
        >)
      | ({ __typename: 'ConversationUpdatedEvent' } & Pick<ConversationUpdatedEvent, 'eventTime'>)
    >;
    participants: Array<
      { __typename?: 'ConversationParticipant' } & Pick<
        ConversationParticipant,
        'channel' | 'channelId'
      >
    >;
    related: Array<
      | ({ __typename?: 'BlankConversation' } & Pick<BlankConversation, 'id'>)
      | ({ __typename?: 'TextConversation' } & Pick<TextConversation, 'id'>)
      | ({ __typename?: 'VideoConversation' } & Pick<VideoConversation, 'id'>)
    >;
  };

export type ConversationDetailFragment =
  | ConversationDetail_BlankConversation_Fragment
  | ConversationDetail_TextConversation_Fragment
  | ConversationDetail_VideoConversation_Fragment;

type ConversationPreview_BlankConversation_Fragment = { __typename: 'BlankConversation' } & Pick<
  BlankConversation,
  'id' | 'channelType' | 'createdAt' | 'flagged' | 'archived' | 'read'
> & { createdBy: { __typename?: 'User' } & Pick<User, 'displayName'> };

type ConversationPreview_TextConversation_Fragment = { __typename: 'TextConversation' } & Pick<
  TextConversation,
  'id' | 'channelType' | 'createdAt' | 'flagged' | 'archived' | 'read'
> & { createdBy: { __typename?: 'User' } & Pick<User, 'displayName'> };

type ConversationPreview_VideoConversation_Fragment = { __typename: 'VideoConversation' } & Pick<
  VideoConversation,
  'id' | 'channelType' | 'createdAt' | 'flagged' | 'archived' | 'read'
> & { createdBy: { __typename?: 'User' } & Pick<User, 'displayName'> };

export type ConversationPreviewFragment =
  | ConversationPreview_BlankConversation_Fragment
  | ConversationPreview_TextConversation_Fragment
  | ConversationPreview_VideoConversation_Fragment;

export type ConversationStructuredTypesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type ConversationStructuredTypesQuery = { __typename?: 'Query' } & {
  conversationStructuredTypes: { __typename?: 'ConversationStructuredTypesResult' } & Pick<
    ConversationStructuredTypesResult,
    'count'
  > & {
      items: Array<
        { __typename?: 'ConversationStructuredType' } & Pick<ConversationStructuredType, 'name'> & {
            fields: Array<
              { __typename?: 'ConversationStructuredTypeField' } & Pick<
                ConversationStructuredTypeField,
                | 'sequence'
                | 'isEditableByCustomer'
                | 'label'
                | 'description'
                | 'required'
                | 'readonly'
                | 'defaultValue'
                | 'options'
              > & {
                  fieldType: { __typename?: 'ConversationStructuredTypeFieldType' } & Pick<
                    ConversationStructuredTypeFieldType,
                    | 'name'
                    | 'regExForValidation'
                    | 'regExForValidChars'
                    | 'mask'
                    | 'maxLength'
                    | 'errorMessage'
                  >;
                }
            >;
          }
      >;
    };
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  socialConversations: { __typename?: 'SocialConversationsResultModel' } & Pick<
    SocialConversationsResultModel,
    'count'
  >;
};

export type BulkUpdateSocialConversationsMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  input: UpdateSocialConversationInputModel;
}>;

export type BulkUpdateSocialConversationsMutation = { __typename?: 'Mutation' } & {
  bulkUpdateSocialConversations: Array<
    { __typename?: 'SocialConversationModel' } & Pick<SocialConversationModel, 'id'>
  >;
};

export type SocialConversationBulkUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type SocialConversationBulkUpdatedSubscription = { __typename?: 'Subscription' } & {
  SocialConversationBulkUpdated: Array<
    { __typename?: 'SocialConversationModel' } & SocialConversationDetailsFragment
  >;
};

export type SocialConversationDetailsFragment = { __typename: 'SocialConversationModel' } & Pick<
  SocialConversationModel,
  | 'id'
  | 'channelType'
  | 'createdAt'
  | 'read'
  | 'archived'
  | 'flagged'
  | 'status'
  | 'multipleResponsesTill'
  | 'canSendResponse'
> & {
    createdBy?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'displayName'>>;
    channel?: Maybe<
      | ({ __typename?: 'PairedChannelBlank' } & Pick<
          PairedChannelBlank,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelFacebook' } & Pick<
          PairedChannelFacebook,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelTwitter' } & Pick<
          PairedChannelTwitter,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelVideo' } & Pick<
          PairedChannelVideo,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelWhatsapp' } & Pick<
          PairedChannelWhatsapp,
          'type' | 'channelIdentifier'
        >)
    >;
    preview?: Maybe<
      { __typename?: 'SocialTextConversationPreviewModel' } & Pick<
        SocialTextConversationPreviewModel,
        'type' | 'messageTime' | 'content'
      > & {
          attachments?: Maybe<
            Array<{ __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>>
          >;
        }
    >;
    events?: Maybe<
      Array<
        | ({ __typename: 'ConversationArchivedEvent' } & Pick<
            ConversationArchivedEvent,
            'eventTime'
          >)
        | ({ __typename: 'ConversationClosedEvent' } & Pick<ConversationClosedEvent, 'eventTime'>)
        | ({ __typename: 'ConversationCreatedEvent' } & Pick<ConversationCreatedEvent, 'eventTime'>)
        | ({ __typename: 'ConversationFlaggedEvent' } & Pick<ConversationFlaggedEvent, 'eventTime'>)
        | ({ __typename: 'ConversationForwardedEvent' } & Pick<
            ConversationForwardedEvent,
            'eventTime'
          >)
        | ({ __typename: 'ConversationPriorityChangedEvent' } & Pick<
            ConversationPriorityChangedEvent,
            'eventTime'
          >)
        | ({ __typename: 'ConversationReadedEvent' } & Pick<ConversationReadedEvent, 'eventTime'>)
        | ({ __typename: 'ConversationStatusChangedEvent' } & Pick<
            ConversationStatusChangedEvent,
            'eventTime'
          >)
        | ({ __typename: 'ConversationUnflaggedEvent' } & Pick<
            ConversationUnflaggedEvent,
            'eventTime'
          >)
        | ({ __typename: 'ConversationUpdatedEvent' } & Pick<ConversationUpdatedEvent, 'eventTime'>)
      >
    >;
    participants?: Maybe<
      Array<
        { __typename?: 'SocialConversationParticipantModel' } & Pick<
          SocialConversationParticipantModel,
          'channel' | 'channelId'
        >
      >
    >;
    related?: Maybe<
      Array<{ __typename?: 'SocialConversationModel' } & Pick<SocialConversationModel, 'id'>>
    >;
    messages: Array<
      { __typename?: 'Message' } & Pick<
        Message,
        | 'id'
        | 'channelType'
        | 'external'
        | 'content'
        | 'messageTime'
        | 'source'
        | 'destination'
        | 'conversationId'
      > & {
          attachments?: Maybe<
            Array<{ __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>>
          >;
          sender: { __typename: 'User' } & Pick<User, 'id' | 'displayName'>;
        }
    >;
  };

export type SocialConversationPreviewFragment = { __typename: 'SocialConversationModel' } & Pick<
  SocialConversationModel,
  'id' | 'channelType' | 'createdAt' | 'read' | 'archived' | 'flagged' | 'status'
> & {
    createdBy?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'displayName'>>;
    channel?: Maybe<
      | ({ __typename?: 'PairedChannelBlank' } & Pick<
          PairedChannelBlank,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelFacebook' } & Pick<
          PairedChannelFacebook,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelTwitter' } & Pick<
          PairedChannelTwitter,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelVideo' } & Pick<
          PairedChannelVideo,
          'type' | 'channelIdentifier'
        >)
      | ({ __typename?: 'PairedChannelWhatsapp' } & Pick<
          PairedChannelWhatsapp,
          'type' | 'channelIdentifier'
        >)
    >;
    preview?: Maybe<
      { __typename?: 'SocialTextConversationPreviewModel' } & Pick<
        SocialTextConversationPreviewModel,
        'type' | 'messageTime' | 'content'
      > & {
          attachments?: Maybe<
            Array<{ __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>>
          >;
        }
    >;
  };

export type SocialNewReceivedMessageSubscriptionVariables = Exact<{ [key: string]: never }>;

export type SocialNewReceivedMessageSubscription = { __typename?: 'Subscription' } & {
  SocialNewReceivedMessage: { __typename?: 'Message' } & Pick<
    Message,
    | 'channelType'
    | 'content'
    | 'external'
    | 'conversationId'
    | 'destination'
    | 'messageTime'
    | 'source'
  > & {
      attachments?: Maybe<
        Array<{ __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>>
      >;
      sender: { __typename: 'User' } & Pick<User, 'id' | 'displayName'>;
    };
};

export type SocialConversationUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type SocialConversationUpdatedSubscription = { __typename?: 'Subscription' } & {
  SocialConversationUpdated: {
    __typename?: 'SocialConversationModel';
  } & SocialConversationDetailsFragment;
};

export type GetSocialConversationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetSocialConversationQuery = { __typename?: 'Query' } & {
  socialConversation: {
    __typename?: 'SocialConversationModel';
  } & SocialConversationDetailsFragment;
};

export type GetSocialConversationsPreviewQueryVariables = Exact<{
  filter?: Maybe<SocialConversationFilterModel>;
  sort?: Maybe<SortOrder>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type GetSocialConversationsPreviewQuery = { __typename?: 'Query' } & {
  socialConversations: { __typename?: 'SocialConversationsResultModel' } & Pick<
    SocialConversationsResultModel,
    'count'
  > & {
      items: Array<{ __typename?: 'SocialConversationModel' } & SocialConversationPreviewFragment>;
    };
};

export type GetSocialRelatedConversationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetSocialRelatedConversationsQuery = { __typename?: 'Query' } & {
  socialConversation: { __typename?: 'SocialConversationModel' } & Pick<
    SocialConversationModel,
    'id'
  > & {
      related?: Maybe<
        Array<{ __typename?: 'SocialConversationModel' } & SocialConversationPreviewFragment>
      >;
    };
};

export type RemoveSocialConversationAttachementMutationVariables = Exact<{
  input: RemoveSocialMessageAttachmentInputModel;
}>;

export type RemoveSocialConversationAttachementMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'removeSocialConversationAttachment'
>;

export type SendSocialConversationTextMutationVariables = Exact<{
  id: Scalars['ID'];
  input: SendConversationTextInput;
}>;

export type SendSocialConversationTextMutation = { __typename?: 'Mutation' } & {
  sendSocialConversationText: { __typename?: 'MutationResult' } & Pick<
    MutationResult,
    'success' | 'message'
  >;
};

export type UpdateSocialConversationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateSocialConversationInputModel;
}>;

export type UpdateSocialConversationMutation = { __typename?: 'Mutation' } & {
  updateSocialConversation: {
    __typename?: 'SocialConversationModel';
  } & SocialConversationPreviewFragment;
};

export type CreateCustomerCrmContactMutationVariables = Exact<{
  input: CreateCustomerCrmContactInput;
}>;

export type CreateCustomerCrmContactMutation = { __typename?: 'Mutation' } & {
  createCustomerCrmContact: { __typename?: 'CustomerCrmContact' } & Pick<
    CustomerCrmContact,
    'id' | 'title' | 'firstName' | 'lastName' | 'sex' | 'functionName'
  > & {
      addresses?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContactAddress' } & Pick<
            CustomerCrmContactAddress,
            'id' | 'city' | 'country' | 'postalCode' | 'address' | 'description'
          >
        >
      >;
      communications?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContactCommunication' } & Pick<
            CustomerCrmContactCommunication,
            | 'sequence'
            | 'value'
            | 'description'
            | 'forwardStatus'
            | 'forwardCondition'
            | 'passThroughStatus'
            | 'passThroughCondition'
          > & {
              type: { __typename?: 'CustomerCrmContactCommunicationType' } & Pick<
                CustomerCrmContactCommunicationType,
                'id' | 'name' | 'category'
              >;
            }
        >
      >;
      groups?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContactGroupRelation' } & Pick<
            CustomerCrmContactGroupRelation,
            'groupId' | 'subGroupId'
          > & {
              group: { __typename?: 'CustomerCrmContactGroup' } & Pick<
                CustomerCrmContactGroup,
                'id' | 'name'
              > & {
                  subGroups?: Maybe<
                    Array<
                      { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                        CustomerCrmContactSubGroup,
                        'id' | 'name'
                      >
                    >
                  >;
                };
              subGroup: { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                CustomerCrmContactSubGroup,
                'id' | 'name'
              >;
            }
        >
      >;
    };
};

export type DeleteCustomerCrmContactMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteCustomerCrmContactMutation = { __typename?: 'Mutation' } & {
  deleteCustomerCrmContact: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type GetCustomerCrmContactCommunicationTypesQueryVariables = Exact<{
  filter?: Maybe<CustomerCrmContactCommunicationTypeFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetCustomerCrmContactCommunicationTypesQuery = { __typename?: 'Query' } & {
  customerCrmContactCommunicationTypes: {
    __typename?: 'CustomerCrmContactCommunicationTypesResult';
  } & Pick<CustomerCrmContactCommunicationTypesResult, 'count'> & {
      items: Array<
        { __typename?: 'CustomerCrmContactCommunicationType' } & Pick<
          CustomerCrmContactCommunicationType,
          'id' | 'name' | 'category'
        >
      >;
    };
};

export type GetCustomerCrmContactGroupsQueryVariables = Exact<{
  filter?: Maybe<CustomerCrmContactGroupFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetCustomerCrmContactGroupsQuery = { __typename?: 'Query' } & {
  customerCrmContactGroups: { __typename?: 'CustomerCrmContactGroupsResult' } & Pick<
    CustomerCrmContactGroupsResult,
    'count'
  > & {
      items: Array<
        { __typename?: 'CustomerCrmContactGroup' } & Pick<
          CustomerCrmContactGroup,
          'id' | 'name'
        > & {
            subGroups?: Maybe<
              Array<
                { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                  CustomerCrmContactSubGroup,
                  'id' | 'name'
                >
              >
            >;
          }
      >;
    };
};

export type GetCustomerCrmContactsQueryVariables = Exact<{
  filter?: Maybe<CustomerCrmContactFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetCustomerCrmContactsQuery = { __typename?: 'Query' } & {
  customerCrmContacts: { __typename?: 'CustomerCrmContactsResult' } & Pick<
    CustomerCrmContactsResult,
    'count'
  > & {
      items: Array<
        { __typename?: 'CustomerCrmContact' } & Pick<
          CustomerCrmContact,
          'id' | 'title' | 'firstName' | 'lastName' | 'sex' | 'functionName'
        > & {
            addresses?: Maybe<
              Array<
                { __typename?: 'CustomerCrmContactAddress' } & Pick<
                  CustomerCrmContactAddress,
                  'id' | 'city' | 'country' | 'postalCode' | 'address' | 'description'
                >
              >
            >;
            communications?: Maybe<
              Array<
                { __typename?: 'CustomerCrmContactCommunication' } & Pick<
                  CustomerCrmContactCommunication,
                  | 'sequence'
                  | 'value'
                  | 'description'
                  | 'forwardStatus'
                  | 'forwardCondition'
                  | 'passThroughStatus'
                  | 'passThroughCondition'
                > & {
                    type: { __typename?: 'CustomerCrmContactCommunicationType' } & Pick<
                      CustomerCrmContactCommunicationType,
                      'id' | 'name' | 'category'
                    >;
                  }
              >
            >;
            groups?: Maybe<
              Array<
                { __typename?: 'CustomerCrmContactGroupRelation' } & Pick<
                  CustomerCrmContactGroupRelation,
                  'groupId' | 'subGroupId'
                > & {
                    group: { __typename?: 'CustomerCrmContactGroup' } & Pick<
                      CustomerCrmContactGroup,
                      'id' | 'name'
                    > & {
                        subGroups?: Maybe<
                          Array<
                            { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                              CustomerCrmContactSubGroup,
                              'id' | 'name'
                            >
                          >
                        >;
                      };
                    subGroup: { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                      CustomerCrmContactSubGroup,
                      'id' | 'name'
                    >;
                  }
              >
            >;
          }
      >;
    };
};

export type UpdateCustomerCrmContactMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCustomerCrmContactInput;
}>;

export type UpdateCustomerCrmContactMutation = { __typename?: 'Mutation' } & {
  updateCustomerCrmContact: { __typename?: 'CustomerCrmContact' } & Pick<
    CustomerCrmContact,
    'id' | 'title' | 'firstName' | 'lastName' | 'sex' | 'functionName'
  > & {
      addresses?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContactAddress' } & Pick<
            CustomerCrmContactAddress,
            'id' | 'city' | 'country' | 'postalCode' | 'address' | 'description'
          >
        >
      >;
      communications?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContactCommunication' } & Pick<
            CustomerCrmContactCommunication,
            | 'sequence'
            | 'value'
            | 'description'
            | 'forwardStatus'
            | 'forwardCondition'
            | 'passThroughStatus'
            | 'passThroughCondition'
          > & {
              type: { __typename?: 'CustomerCrmContactCommunicationType' } & Pick<
                CustomerCrmContactCommunicationType,
                'id' | 'name' | 'category'
              >;
            }
        >
      >;
      groups?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContactGroupRelation' } & Pick<
            CustomerCrmContactGroupRelation,
            'groupId' | 'subGroupId'
          > & {
              group: { __typename?: 'CustomerCrmContactGroup' } & Pick<
                CustomerCrmContactGroup,
                'id' | 'name'
              > & {
                  subGroups?: Maybe<
                    Array<
                      { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                        CustomerCrmContactSubGroup,
                        'id' | 'name'
                      >
                    >
                  >;
                };
              subGroup: { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                CustomerCrmContactSubGroup,
                'id' | 'name'
              >;
            }
        >
      >;
    };
};

export type GetDashboardQueryVariables = Exact<{ [key: string]: never }>;

export type GetDashboardQuery = { __typename?: 'Query' } & {
  dashboard: { __typename?: 'Dashboard' } & {
    socialConversations: { __typename?: 'DashboardConversation' } & Pick<
      DashboardConversation,
      'total'
    > & {
        countsByStatus: Array<
          { __typename?: 'DashboardConversationStatus' } & Pick<
            DashboardConversationStatus,
            'status' | 'total'
          >
        >;
      };
    meccaConversations: { __typename?: 'DashboardConversation' } & Pick<
      DashboardConversation,
      'total'
    > & {
        countsByStatus: Array<
          { __typename?: 'DashboardConversationStatus' } & Pick<
            DashboardConversationStatus,
            'status' | 'total'
          >
        >;
      };
    invoices: { __typename?: 'DashboardInvoice' } & Pick<DashboardInvoice, 'current' | 'open'>;
  };
};

export type GetDashboardNotificationsQueryVariables = Exact<{
  filter?: Maybe<NotificationFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetDashboardNotificationsQuery = { __typename?: 'Query' } & {
  dashboard: { __typename?: 'Dashboard' } & {
    notifications: { __typename?: 'NotificationsResult' } & Pick<NotificationsResult, 'count'> & {
        items: Array<
          | ({ __typename?: 'NotificationConversation' } & Pick<
              NotificationConversation,
              'status' | 'conversationId' | 'date' | 'type'
            > & {
                conversation: { __typename?: 'SocialConversationModel' } & {
                  createdBy?: Maybe<
                    { __typename?: 'User' } & Pick<User, 'displayName' | 'firstName' | 'lastName'>
                  >;
                };
              })
          | ({ __typename?: 'NotificationInvoice' } & Pick<
              NotificationInvoice,
              'amount' | 'date' | 'type'
            >)
        >;
      };
  };
};

export type CreateCustomerTemporaryInstructionMutationVariables = Exact<{
  input: CreateCustomerTemporaryInstructionInput;
}>;

export type CreateCustomerTemporaryInstructionMutation = { __typename?: 'Mutation' } & {
  createCustomerTemporaryInstruction: { __typename?: 'CustomerTemporaryInstruction' } & Pick<
    CustomerTemporaryInstruction,
    'id' | 'updatedAt' | 'name' | 'content' | 'validFrom' | 'validUntil' | 'active'
  >;
};

export type DeleteCustomerTemporaryInstructionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteCustomerTemporaryInstructionMutation = { __typename?: 'Mutation' } & {
  deleteCustomerTemporaryInstruction: { __typename?: 'MutationResult' } & Pick<
    MutationResult,
    'success'
  >;
};

export type GetCustomerFixedInstructionsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  filter?: Maybe<CustomerFixedInstructionFilterInput>;
}>;

export type GetCustomerFixedInstructionsQuery = { __typename?: 'Query' } & {
  customerFixedInstructions: { __typename?: 'CustomerFixedInstructionsResult' } & Pick<
    CustomerFixedInstructionsResult,
    'count'
  > & {
      items: Array<
        { __typename?: 'CustomerFixedInstruction' } & Pick<
          CustomerFixedInstruction,
          'id' | 'updatedAt' | 'name' | 'content'
        >
      >;
    };
};

export type GetCustomerTemporaryInstructionsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  filter?: Maybe<CustomerTemporaryInstructionFilterInput>;
}>;

export type GetCustomerTemporaryInstructionsQuery = { __typename?: 'Query' } & {
  customerTemporaryInstructions: { __typename?: 'CustomerTemporaryInstructionsResult' } & Pick<
    CustomerTemporaryInstructionsResult,
    'count'
  > & {
      items: Array<
        { __typename?: 'CustomerTemporaryInstruction' } & Pick<
          CustomerTemporaryInstruction,
          | 'id'
          | 'updatedAt'
          | 'name'
          | 'content'
          | 'validFrom'
          | 'validUntil'
          | 'active'
          | 'deleted'
        >
      >;
    };
};

export type UpdateCustomerTemporaryInstructionMutationVariables = Exact<{
  input: UpdateCustomerTemporaryInstructionInput;
  id: Scalars['Int'];
}>;

export type UpdateCustomerTemporaryInstructionMutation = { __typename?: 'Mutation' } & {
  updateCustomerTemporaryInstruction: { __typename?: 'CustomerTemporaryInstruction' } & Pick<
    CustomerTemporaryInstruction,
    'id'
  >;
};

export type GetInvoicesQueryVariables = Exact<{
  filter?: Maybe<InvoiceFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetInvoicesQuery = { __typename?: 'Query' } & {
  invoices: { __typename?: 'InvoicesResult' } & Pick<InvoicesResult, 'count'> & {
      items: Array<
        { __typename?: 'Invoice' } & Pick<
          Invoice,
          'id' | 'amount' | 'date' | 'dueDate' | 'year' | 'month' | 'invoiceNr' | 'paid' | 'type'
        > & {
            attachment?: Maybe<
              { __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>
            >;
          }
      >;
    };
};

export type PayInvoiceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type PayInvoiceMutation = { __typename?: 'Mutation' } & {
  payInvoice: { __typename?: 'PayInvoiceResult' } & Pick<PayInvoiceResult, 'redirectUrl'>;
};

export type ActivateChannelMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ActivateChannelMutation = { __typename?: 'Mutation' } & {
  activateChannel: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type DeactivateChannelMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeactivateChannelMutation = { __typename?: 'Mutation' } & {
  deactivateChannel: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type GetPairedChannelsQueryVariables = Exact<{
  filter?: Maybe<PairedChannelFilterInput>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type GetPairedChannelsQuery = { __typename?: 'Query' } & {
  pairedChannels: { __typename?: 'PairedChannelsResult' } & Pick<PairedChannelsResult, 'count'> & {
      items: Array<
        | ({ __typename?: 'PairedChannelBlank' } & Pick<
            PairedChannelBlank,
            | 'id'
            | 'type'
            | 'account'
            | 'active'
            | 'channelIdentifier'
            | 'redirect'
            | 'redirectDelay'
          >)
        | ({ __typename?: 'PairedChannelFacebook' } & Pick<
            PairedChannelFacebook,
            | 'id'
            | 'type'
            | 'account'
            | 'active'
            | 'channelIdentifier'
            | 'redirect'
            | 'redirectDelay'
          >)
        | ({ __typename?: 'PairedChannelTwitter' } & Pick<
            PairedChannelTwitter,
            | 'id'
            | 'type'
            | 'account'
            | 'active'
            | 'channelIdentifier'
            | 'redirect'
            | 'redirectDelay'
          >)
        | ({ __typename?: 'PairedChannelVideo' } & Pick<
            PairedChannelVideo,
            | 'id'
            | 'type'
            | 'account'
            | 'active'
            | 'channelIdentifier'
            | 'redirect'
            | 'redirectDelay'
          >)
        | ({ __typename?: 'PairedChannelWhatsapp' } & Pick<
            PairedChannelWhatsapp,
            | 'id'
            | 'type'
            | 'account'
            | 'active'
            | 'channelIdentifier'
            | 'redirect'
            | 'redirectDelay'
          >)
      >;
    };
};

export type PairChannelMutationVariables = Exact<{
  input: PairChannelInput;
}>;

export type PairChannelMutation = { __typename?: 'Mutation' } & {
  pairChannel:
    | ({ __typename?: 'PairedChannelBlank' } & Pick<
        PairedChannelBlank,
        'id' | 'type' | 'account' | 'active'
      >)
    | ({ __typename?: 'PairedChannelFacebook' } & Pick<
        PairedChannelFacebook,
        'id' | 'type' | 'account' | 'active'
      >)
    | ({ __typename?: 'PairedChannelTwitter' } & Pick<
        PairedChannelTwitter,
        'id' | 'type' | 'account' | 'active'
      >)
    | ({ __typename?: 'PairedChannelVideo' } & Pick<
        PairedChannelVideo,
        'id' | 'type' | 'account' | 'active'
      >)
    | ({ __typename?: 'PairedChannelWhatsapp' } & Pick<
        PairedChannelWhatsapp,
        'id' | 'type' | 'account' | 'active'
      >);
};

export type UnpairChannelMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type UnpairChannelMutation = { __typename?: 'Mutation' } & {
  unpairChannel: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type UpdateChannelMutationVariables = Exact<{
  id: Scalars['ID'];
  input: PairedChannelUpdateInput;
}>;

export type UpdateChannelMutation = { __typename?: 'Mutation' } & {
  updateChannel:
    | ({ __typename?: 'PairedChannelBlank' } & Pick<PairedChannelBlank, 'id'>)
    | ({ __typename?: 'PairedChannelFacebook' } & Pick<PairedChannelFacebook, 'id'>)
    | ({ __typename?: 'PairedChannelTwitter' } & Pick<PairedChannelTwitter, 'id'>)
    | ({ __typename?: 'PairedChannelVideo' } & Pick<PairedChannelVideo, 'id'>)
    | ({ __typename?: 'PairedChannelWhatsapp' } & Pick<PairedChannelWhatsapp, 'id'>);
};

type BaseCallReporting_DurationTimeReporting_Fragment = {
  __typename?: 'DurationTimeReporting';
} & Pick<
  DurationTimeReporting,
  'totalNrOfCalls' | 'title' | 'yAxisTitle' | 'xAxisTitle' | 'yAxisValues' | 'xAxisValues'
>;

type BaseCallReporting_MissedCallsReporting_Fragment = {
  __typename?: 'MissedCallsReporting';
} & Pick<
  MissedCallsReporting,
  'totalNrOfCalls' | 'title' | 'yAxisTitle' | 'xAxisTitle' | 'yAxisValues' | 'xAxisValues'
>;

type BaseCallReporting_NrOfCallsPerHourReporting_Fragment = {
  __typename?: 'NrOfCallsPerHourReporting';
} & Pick<
  NrOfCallsPerHourReporting,
  'totalNrOfCalls' | 'title' | 'yAxisTitle' | 'xAxisTitle' | 'yAxisValues' | 'xAxisValues'
>;

type BaseCallReporting_WaitingTimeReporting_Fragment = {
  __typename?: 'WaitingTimeReporting';
} & Pick<
  WaitingTimeReporting,
  'totalNrOfCalls' | 'title' | 'yAxisTitle' | 'xAxisTitle' | 'yAxisValues' | 'xAxisValues'
>;

export type BaseCallReportingFragment =
  | BaseCallReporting_DurationTimeReporting_Fragment
  | BaseCallReporting_MissedCallsReporting_Fragment
  | BaseCallReporting_NrOfCallsPerHourReporting_Fragment
  | BaseCallReporting_WaitingTimeReporting_Fragment;

export type CallDetailFragment = { __typename?: 'CallResult' } & Pick<CallResult, 'phoneNumber'> & {
    callStats: { __typename?: 'CallStats' } & Pick<
      CallStats,
      'nrOfCallsDay' | 'nrOfCallsNight' | 'totalDurationDay' | 'totalDurationNight'
    >;
    callList: Array<
      { __typename?: 'CallModel' } & Pick<
        CallModel,
        'dayNight' | 'callDateTime' | 'callDuration' | 'caller'
      >
    >;
  };

export type CallReportingQueryVariables = Exact<{
  filter?: Maybe<FilterInput>;
}>;

export type CallReportingQuery = { __typename?: 'Query' } & {
  callReporting?: Maybe<
    { __typename?: 'CallReportingResult' } & {
      waitingTimeStatistics: { __typename?: 'WaitingTimeReporting' } & Pick<
        WaitingTimeReporting,
        'averageWaitingTime'
      > &
        BaseCallReporting_WaitingTimeReporting_Fragment;
      durationTimeStatistics: { __typename?: 'DurationTimeReporting' } & Pick<
        DurationTimeReporting,
        'averageDuration'
      > &
        BaseCallReporting_DurationTimeReporting_Fragment;
      missedCallStatistics: { __typename?: 'MissedCallsReporting' } & Pick<
        MissedCallsReporting,
        'canBeDisplayed' | 'averageWaitingTime'
      > &
        BaseCallReporting_MissedCallsReporting_Fragment;
      nrOfCallsPerHourStatistics: {
        __typename?: 'NrOfCallsPerHourReporting';
      } & BaseCallReporting_NrOfCallsPerHourReporting_Fragment;
    }
  >;
};

export type DownloadIncomingCallReportingQueryVariables = Exact<{
  filter?: Maybe<FilterInput>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  phoneNumber?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
}>;

export type DownloadIncomingCallReportingQuery = { __typename?: 'Query' } & {
  downloadIncomingCallReporting: { __typename?: 'DownloadResult' } & Pick<
    DownloadResult,
    'content' | 'contentType' | 'fileName'
  >;
};

export type DownloadOutgoingCallReportingQueryVariables = Exact<{
  filter?: Maybe<FilterInput>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  phoneNumber?: Maybe<Scalars['String']>;
  lang?: Maybe<LangEnum>;
}>;

export type DownloadOutgoingCallReportingQuery = { __typename?: 'Query' } & {
  downloadOutgoingCallReporting: { __typename?: 'DownloadResult' } & Pick<
    DownloadResult,
    'content' | 'contentType' | 'fileName'
  >;
};

export type DownloadVideoCallReportingQueryVariables = Exact<{
  filter?: Maybe<FilterInput>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  lang?: Maybe<LangEnum>;
}>;

export type DownloadVideoCallReportingQuery = { __typename?: 'Query' } & {
  downloadVideoCallReporting: { __typename?: 'DownloadResult' } & Pick<
    DownloadResult,
    'content' | 'contentType' | 'fileName'
  >;
};

export type IncomingCallsQueryVariables = Exact<{
  filter?: Maybe<CallFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type IncomingCallsQuery = { __typename?: 'Query' } & {
  incomingCalls: Array<{ __typename?: 'CallResult' } & CallDetailFragment>;
};

export type OutgoingCallsQueryVariables = Exact<{
  filter?: Maybe<CallFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  ignoreLimitOffset?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type OutgoingCallsQuery = { __typename?: 'Query' } & {
  outgoingCalls: Array<{ __typename?: 'CallResult' } & CallDetailFragment>;
};

export type VideoCallReportingQueryVariables = Exact<{
  filter?: Maybe<FilterInput>;
}>;

export type VideoCallReportingQuery = { __typename?: 'Query' } & {
  videoCallReporting: { __typename?: 'VideoCallReportingResult' } & Pick<
    VideoCallReportingResult,
    'totalDuration'
  >;
};

export type SearchQueryVariables = Exact<{
  filter?: Maybe<SearchFilterInput>;
  search: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type SearchQuery = { __typename?: 'Query' } & {
  search: { __typename?: 'SearchResult' } & Pick<SearchResult, 'count'> & {
      countByType: Array<
        { __typename?: 'SearchTypeCount' } & Pick<SearchTypeCount, 'count' | 'type'>
      >;
      items: Array<
        | ({ __typename?: 'SearchAgentMessage' } & Pick<SearchAgentMessage, 'type'> & {
              agentMessage?: Maybe<
                { __typename?: 'AgentMessage' } & Pick<
                  AgentMessage,
                  'id' | 'channelType' | 'content' | 'conversationId' | 'messageTime'
                > & {
                    sender: { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>;
                  }
              >;
            })
        | ({ __typename?: 'SearchAttachment' } & Pick<SearchAttachment, 'type'> & {
              attachment?: Maybe<
                { __typename?: 'Attachment' } & Pick<Attachment, 'fileName' | 'url'>
              >;
            })
        | ({ __typename?: 'SearchCustomerCrmContact' } & Pick<SearchCustomerCrmContact, 'type'> & {
              customerCrmContact?: Maybe<
                { __typename?: 'CustomerCrmContact' } & Pick<
                  CustomerCrmContact,
                  'id' | 'title' | 'firstName' | 'lastName' | 'sex' | 'functionName'
                > & {
                    addresses?: Maybe<
                      Array<
                        { __typename?: 'CustomerCrmContactAddress' } & Pick<
                          CustomerCrmContactAddress,
                          'id' | 'city' | 'country' | 'postalCode' | 'address' | 'description'
                        >
                      >
                    >;
                    communications?: Maybe<
                      Array<
                        { __typename?: 'CustomerCrmContactCommunication' } & Pick<
                          CustomerCrmContactCommunication,
                          | 'sequence'
                          | 'value'
                          | 'description'
                          | 'forwardStatus'
                          | 'forwardCondition'
                          | 'passThroughStatus'
                          | 'passThroughCondition'
                        > & {
                            type: { __typename?: 'CustomerCrmContactCommunicationType' } & Pick<
                              CustomerCrmContactCommunicationType,
                              'id' | 'name' | 'category'
                            >;
                          }
                      >
                    >;
                    groups?: Maybe<
                      Array<
                        { __typename?: 'CustomerCrmContactGroupRelation' } & Pick<
                          CustomerCrmContactGroupRelation,
                          'groupId' | 'subGroupId'
                        > & {
                            group: { __typename?: 'CustomerCrmContactGroup' } & Pick<
                              CustomerCrmContactGroup,
                              'id' | 'name'
                            > & {
                                subGroups?: Maybe<
                                  Array<
                                    { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                                      CustomerCrmContactSubGroup,
                                      'id' | 'name'
                                    >
                                  >
                                >;
                              };
                            subGroup: { __typename?: 'CustomerCrmContactSubGroup' } & Pick<
                              CustomerCrmContactSubGroup,
                              'id' | 'name'
                            >;
                          }
                      >
                    >;
                  }
              >;
            })
        | ({ __typename?: 'SearchCustomerFixedInstruction' } & Pick<
            SearchCustomerFixedInstruction,
            'type'
          > & {
              customerFixedInstruction?: Maybe<
                { __typename?: 'CustomerFixedInstruction' } & Pick<
                  CustomerFixedInstruction,
                  'id' | 'updatedAt' | 'name' | 'content'
                >
              >;
            })
        | ({ __typename?: 'SearchCustomerTemporaryInstruction' } & Pick<
            SearchCustomerTemporaryInstruction,
            'type'
          > & {
              customerTemporaryInstruction?: Maybe<
                { __typename?: 'CustomerTemporaryInstruction' } & Pick<
                  CustomerTemporaryInstruction,
                  'id' | 'updatedAt' | 'name' | 'content' | 'validFrom' | 'validUntil' | 'active'
                >
              >;
            })
        | ({ __typename?: 'SearchMessage' } & Pick<SearchMessage, 'type'> & {
              message?: Maybe<
                { __typename?: 'Message' } & Pick<
                  Message,
                  'id' | 'channelType' | 'content' | 'conversationId' | 'messageTime'
                > & {
                    sender: { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>;
                  }
              >;
            })
      >;
    };
};

export type CreateStandbyMutationVariables = Exact<{
  input: CreateStandbyInput;
}>;

export type CreateStandbyMutation = { __typename?: 'Mutation' } & {
  createStandby: { __typename?: 'Standby' } & Pick<Standby, 'id' | 'notifyChannels'> & {
      from: { __typename?: 'StandbyHours' } & Pick<StandbyHours, 'hours' | 'minutes'>;
      to: { __typename?: 'StandbyHours' } & Pick<StandbyHours, 'hours' | 'minutes'>;
      crmContacts?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContact' } & Pick<
            CustomerCrmContact,
            'id' | 'firstName' | 'lastName'
          >
        >
      >;
    };
};

export type DeleteStandbyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteStandbyMutation = { __typename?: 'Mutation' } & {
  deleteStandby: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type GetStandbyQueryVariables = Exact<{
  filter?: Maybe<StandbyFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetStandbyQuery = { __typename?: 'Query' } & {
  standby: { __typename?: 'StandbysResult' } & Pick<StandbysResult, 'count'> & {
      items: Array<
        { __typename?: 'Standby' } & Pick<Standby, 'id' | 'notifyChannels'> & {
            from: { __typename?: 'StandbyHours' } & Pick<StandbyHours, 'hours' | 'minutes'>;
            to: { __typename?: 'StandbyHours' } & Pick<StandbyHours, 'hours' | 'minutes'>;
            crmContacts?: Maybe<
              Array<
                { __typename?: 'CustomerCrmContact' } & Pick<
                  CustomerCrmContact,
                  'id' | 'firstName' | 'lastName'
                >
              >
            >;
          }
      >;
    };
};

export type UpdateStandbyMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateStandbyInput;
}>;

export type UpdateStandbyMutation = { __typename?: 'Mutation' } & {
  updateStandby: { __typename?: 'Standby' } & Pick<Standby, 'id' | 'notifyChannels'> & {
      from: { __typename?: 'StandbyHours' } & Pick<StandbyHours, 'hours' | 'minutes'>;
      to: { __typename?: 'StandbyHours' } & Pick<StandbyHours, 'hours' | 'minutes'>;
      crmContacts?: Maybe<
        Array<
          { __typename?: 'CustomerCrmContact' } & Pick<
            CustomerCrmContact,
            'id' | 'firstName' | 'lastName'
          >
        >
      >;
    };
};

export type GetThemeQueryVariables = Exact<{ [key: string]: never }>;

export type GetThemeQuery = { __typename?: 'Query' } & {
  theme: { __typename?: 'Theme' } & {
    colors: { __typename?: 'Colors' } & Pick<
      Colors,
      | 'error'
      | 'info'
      | 'primary'
      | 'primaryDarkShade'
      | 'primaryLightShade'
      | 'secondary'
      | 'secondaryDarkShade'
      | 'secondaryLightShade'
      | 'success'
      | 'warning'
    >;
    images: Array<{ __typename?: 'Image' } & Pick<Image, 'type' | 'url'>>;
  };
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  deleteUser: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = { __typename?: 'Query' } & {
  getCurrentUser: { __typename?: 'User' } & Pick<
    User,
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'customers'
    | 'emailAddress'
    | 'role'
    | 'phoneNumber'
    | 'locale'
  >;
};

export type GetCountriesQueryVariables = Exact<{
  filter?: Maybe<CountryFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type GetCountriesQuery = { __typename?: 'Query' } & {
  countries: { __typename?: 'CountriesResult' } & Pick<CountriesResult, 'count'> & {
      items: Array<{ __typename?: 'Country' } & Pick<Country, 'iso' | 'name'>>;
    };
};

export type GetCustomerQueryVariables = Exact<{
  filter?: Maybe<CustomerFilterInput>;
}>;

export type GetCustomerQuery = { __typename?: 'Query' } & {
  customer: { __typename?: 'Customer' } & Pick<
    Customer,
    'id' | 'name' | 'platformId' | 'parentId' | 'groupId' | 'appointmentContractYn'
  >;
};

export type GetCustomerChatDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetCustomerChatDataQuery = { __typename?: 'Query' } & {
  customerChatData: { __typename?: 'CustomerChatData' } & Pick<
    CustomerChatData,
    'guid' | 'username' | 'extension' | 'mainFicheId' | 'customerId' | 'userEmail' | 'serviceGroup'
  >;
};

export type GetCustomersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  filter?: Maybe<CustomerFilterInput>;
}>;

export type GetCustomersQuery = { __typename?: 'Query' } & {
  customers: { __typename?: 'CustomersResult' } & Pick<CustomersResult, 'count'> & {
      items: Array<
        { __typename?: 'Customer' } & Pick<
          Customer,
          'id' | 'platformId' | 'parentId' | 'name' | 'groupId' | 'appointmentContractYn'
        >
      >;
    };
};

export type GetCustomersWithInfoQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  filter?: Maybe<CustomerFilterInput>;
}>;

export type GetCustomersWithInfoQuery = { __typename?: 'Query' } & {
  customers: { __typename?: 'CustomersResult' } & Pick<CustomersResult, 'count'> & {
      items: Array<
        { __typename?: 'Customer' } & Pick<Customer, 'id' | 'platformId' | 'parentId' | 'name'> & {
            info?: Maybe<
              { __typename?: 'CustomerInfo' } & Pick<CustomerInfo, 'welcomeMessage'> & {
                  contactInformationList: Array<
                    { __typename?: 'CustomerContactInformation' } & Pick<
                      CustomerContactInformation,
                      | 'type'
                      | 'emailAddress'
                      | 'faxNumber'
                      | 'mobilePhoneNumber'
                      | 'phoneNumber1'
                      | 'phoneNumber2'
                      | 'website'
                    > & {
                        address?: Maybe<
                          { __typename?: 'Address' } & Pick<
                            Address,
                            'city' | 'country' | 'postalCode' | 'street' | 'streetNumber' | 'box'
                          >
                        >;
                      }
                  >;
                }
            >;
          }
      >;
    };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetUserQuery = { __typename?: 'Query' } & {
  user: { __typename?: 'User' } & Pick<
    User,
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'customers'
    | 'emailAddress'
    | 'role'
    | 'phoneNumber'
    | 'locale'
  >;
};

export type GetUserStatusQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserStatusQuery = { __typename?: 'Query' } & {
  userStatus: { __typename?: 'UserStatus' } & Pick<UserStatus, 'active'>;
};

export type GetUsersQueryVariables = Exact<{
  filter?: Maybe<UsersFilterInput>;
  sort?: Maybe<Array<SortInput> | SortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type GetUsersQuery = { __typename?: 'Query' } & {
  users: { __typename?: 'UsersResult' } & Pick<UsersResult, 'count'> & {
      items: Array<
        { __typename?: 'User' } & Pick<
          User,
          'id' | 'emailAddress' | 'firstName' | 'lastName' | 'phoneNumber'
        >
      >;
    };
};

export type LogoutQueryVariables = Exact<{ [key: string]: never }>;

export type LogoutQuery = { __typename?: 'Query' } & Pick<Query, 'logout'>;

export type UpdateCurrentUserLocaleMutationVariables = Exact<{
  locale: Scalars['String'];
}>;

export type UpdateCurrentUserLocaleMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'updateCurrentUserLocale'
>;

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateCustomerInput;
}>;

export type UpdateCustomerMutation = { __typename?: 'Mutation' } & {
  updateCustomer: { __typename?: 'Customer' } & Pick<Customer, 'id' | 'name'> & {
      info?: Maybe<
        { __typename?: 'CustomerInfo' } & {
          contactInformationList: Array<
            { __typename?: 'CustomerContactInformation' } & Pick<
              CustomerContactInformation,
              | 'type'
              | 'emailAddress'
              | 'faxNumber'
              | 'mobilePhoneNumber'
              | 'phoneNumber1'
              | 'phoneNumber2'
              | 'website'
            > & {
                address?: Maybe<
                  { __typename?: 'Address' } & Pick<
                    Address,
                    'city' | 'country' | 'postalCode' | 'street' | 'streetNumber' | 'box'
                  >
                >;
              }
          >;
        }
      >;
    };
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type UpdateUserStatusMutationVariables = Exact<{
  input: UpdateUserStatusInput;
}>;

export type UpdateUserStatusMutation = { __typename?: 'Mutation' } & {
  updateUserStatus: { __typename?: 'UserStatus' } & Pick<UserStatus, 'active'>;
};

export type UserStatusUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type UserStatusUpdatedSubscription = { __typename?: 'Subscription' } & {
  userStatusUpdated: { __typename?: 'UserStatus' } & Pick<UserStatus, 'active'>;
};

export type AnswerVideoCallMutationVariables = Exact<{
  callId: Scalars['ID'];
}>;

export type AnswerVideoCallMutation = { __typename?: 'Mutation' } & {
  answerVideoCall: { __typename?: 'VideoCallInfo' } & Pick<
    VideoCallInfo,
    'callId' | 'customerName' | 'token'
  > & {
      location?: Maybe<
        { __typename?: 'Location' } & Pick<
          Location,
          | 'id'
          | 'clientSideRotation'
          | 'clientSideRotationInputStream'
          | 'agentSideRotation'
          | 'customerId'
          | 'description'
          | 'lat'
          | 'lng'
          | 'title'
        > & {
            address?: Maybe<
              { __typename?: 'LocationAddress' } & Pick<
                LocationAddress,
                'city' | 'country' | 'postalCode' | 'street' | 'streetNumber'
              >
            >;
          }
      >;
    };
};

export type CallNotificationSubscriptionVariables = Exact<{ [key: string]: never }>;

export type CallNotificationSubscription = { __typename?: 'Subscription' } & {
  callNotification: { __typename?: 'VideoCallNotification' } & Pick<
    VideoCallNotification,
    'callId' | 'customerId' | 'removeCall'
  >;
};

export type CreateVideoCallSettingsMutationVariables = Exact<{
  input: VideoCallSettingsInput;
}>;

export type CreateVideoCallSettingsMutation = { __typename?: 'Mutation' } & {
  createVideoCallSettings: { __typename?: 'VideoCallSettings' } & VideoCallSettingsFragmentFragment;
};

export type EndVideoCallMutationVariables = Exact<{
  callId: Scalars['ID'];
}>;

export type EndVideoCallMutation = { __typename?: 'Mutation' } & {
  endVideoCall: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export type GetDefaultLocaleQueryVariables = Exact<{ [key: string]: never }>;

export type GetDefaultLocaleQuery = { __typename?: 'Query' } & {
  defaultLocale: Array<
    { __typename?: 'DefaultLocale' } & Pick<DefaultLocale, 'type'> & {
        content: Array<{ __typename?: 'Content' } & Pick<Content, 'language' | 'value'>>;
      }
  >;
};

export type GetVideoCallSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetVideoCallSettingsQuery = { __typename?: 'Query' } & {
  videoCallSettings?: Maybe<
    { __typename?: 'VideoCallSettings' } & VideoCallSettingsFragmentFragment
  >;
};

export type VideoCallsQueryVariables = Exact<{
  filter?: Maybe<VideoCallFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput> | SortInput>;
}>;

export type VideoCallsQuery = { __typename?: 'Query' } & {
  videoCalls: { __typename?: 'VideoCallResult' } & Pick<VideoCallResult, 'count'> & {
      items: Array<{ __typename?: 'VideoCall' } & Pick<VideoCall, 'id' | 'createdAt' | 'duration'>>;
    };
};

export type SettingsUpdatedSubscriptionVariables = Exact<{
  customerId: Scalars['String'];
  platformId: Scalars['String'];
}>;

export type SettingsUpdatedSubscription = { __typename?: 'Subscription' } & {
  settingsUpdated: { __typename?: 'UpdateVideoCallSettingsNotification' } & Pick<
    UpdateVideoCallSettingsNotification,
    'customerId' | 'platformId'
  > & {
      locations: Array<
        { __typename?: 'CustomerLocation' } & Pick<
          CustomerLocation,
          | 'id'
          | 'title'
          | 'description'
          | 'agentSideRotation'
          | 'clientSideRotation'
          | 'clientSideRotationInputStream'
        >
      >;
    };
};

export type UpdateVideoCallSettingsMutationVariables = Exact<{
  input: VideoCallSettingsInput;
}>;

export type UpdateVideoCallSettingsMutation = { __typename?: 'Mutation' } & {
  updateVideoCallSettings: { __typename?: 'VideoCallSettings' } & VideoCallSettingsFragmentFragment;
};

export type UpdateVideoCallSettingsLocationMutationVariables = Exact<{
  input: UpdateVideoCallSettingsLocationInput;
}>;

export type UpdateVideoCallSettingsLocationMutation = { __typename?: 'Mutation' } & {
  updateVideoCallSettingsLocation: {
    __typename?: 'VideoCallSettings';
  } & VideoCallSettingsFragmentFragment;
};

export type VideoCallSettingsFragmentFragment = { __typename?: 'VideoCallSettings' } & Pick<
  VideoCallSettings,
  | 'backgroundImage'
  | 'defaultLanguage'
  | 'languages'
  | 'logoImage'
  | 'name'
  | 'redirect'
  | 'redirectDelay'
  | 'template'
  | 'timeoutDelay'
> & {
    colors: { __typename?: 'CustomerScreenColors' } & Pick<
      CustomerScreenColors,
      'background' | 'buttonsBackground' | 'buttonsText' | 'text'
    >;
    locale: Array<
      { __typename?: 'CustomerScreenLocale' } & Pick<CustomerScreenLocale, 'type'> & {
          content: Array<
            { __typename?: 'TextByLanguage' } & Pick<TextByLanguage, 'language' | 'value'>
          >;
        }
    >;
    locations: Array<
      { __typename?: 'CustomerLocation' } & Pick<
        CustomerLocation,
        | 'id'
        | 'description'
        | 'title'
        | 'clientSideRotation'
        | 'clientSideRotationInputStream'
        | 'agentSideRotation'
      >
    >;
  };

export type RegisterWebpushMutationVariables = Exact<{
  input: RegisterWebPushInput;
}>;

export type RegisterWebpushMutation = { __typename?: 'Mutation' } & {
  registerWebpush: { __typename?: 'MutationResult' } & Pick<MutationResult, 'success'>;
};

export const MeccaConversationDetailsFragmentDoc = gql`
  fragment meccaConversationDetails on MeccaConversationModel {
    id
    ... on MeccaTextConversationModel {
      channelType
      createdAt
      __typename
      events {
        eventTime
        __typename
      }
      related {
        id
        __typename
      }
      channel {
        channelIdentifier
        type
        __typename
      }
      createdBy {
        id
        displayName
        __typename
      }
      messages {
        __typename
      }
      agentMessages {
        id
        messages {
          content
          messageTime
          sender {
            displayName
            __typename
          }
          __typename
        }
        attachments {
          id
          fileName
          url
          __typename
        }
        structuredMessage {
          name
          fields {
            sequence
            fieldType {
              name
              regExForValidation
              regExForValidChars
              mask
              maxLength
              errorMessage
              __typename
            }
            label
            description
            required
            readonly
            defaultValue
            options
            __typename
          }
          values {
            sequence
            value
            __typename
          }
          __typename
        }
        __typename
      }
      attachments {
        id
        fileName
        name
        fileTypeId
        dateTimeAdded
        url
      }
      read
      flagged
      status
      unformattedBodyText
      unformattedText
      htmlStructuredMessage
      htmlMessage
    }
  }
`;
export const MeccaConversationPreviewFragmentDoc = gql`
  fragment meccaConversationPreview on MeccaConversationModel {
    id
    ... on MeccaTextConversationModel {
      channelType
      createdAt
      __typename
      channel {
        channelIdentifier
        type
        __typename
      }
      createdBy {
        id
        displayName
        __typename
      }
      read
      flagged
      status
      unformattedBodyText
      unformattedText
      htmlStructuredMessage
      htmlMessage
    }
  }
`;
export const ConversationDetailFragmentDoc = gql`
  fragment conversationDetail on Conversation {
    id
    createdBy {
      displayName
    }
    events {
      eventTime
      __typename
    }
    participants {
      channel
      channelId
    }
    related {
      id
    }
    read
    archived
    __typename
  }
`;
export const ConversationPreviewFragmentDoc = gql`
  fragment conversationPreview on Conversation {
    id
    channelType
    createdAt
    createdBy {
      displayName
    }
    flagged
    archived
    read
    __typename
  }
`;
export const SocialConversationDetailsFragmentDoc = gql`
  fragment socialConversationDetails on SocialConversationModel {
    id
    channelType
    createdAt
    __typename
    createdBy {
      id
      displayName
    }
    read
    archived
    flagged
    channel {
      type
      channelIdentifier
    }
    status
    preview {
      type
      messageTime
      content
      attachments {
        fileName
        url
      }
    }
    events {
      eventTime
      __typename
    }
    participants {
      channel
      channelId
    }
    related {
      id
    }
    multipleResponsesTill
    canSendResponse
    messages {
      id
      channelType
      external
      attachments {
        fileName
        url
      }
      content
      messageTime
      sender {
        id
        displayName
        __typename
      }
      source
      destination
      conversationId
    }
  }
`;
export const SocialConversationPreviewFragmentDoc = gql`
  fragment socialConversationPreview on SocialConversationModel {
    id
    channelType
    createdAt
    __typename
    createdBy {
      id
      displayName
    }
    read
    archived
    flagged
    channel {
      type
      channelIdentifier
    }
    status
    preview {
      type
      messageTime
      content
      attachments {
        fileName
        url
      }
    }
  }
`;
export const BaseCallReportingFragmentDoc = gql`
  fragment baseCallReporting on CallBaseReporting {
    totalNrOfCalls
    title
    yAxisTitle
    xAxisTitle
    yAxisValues
    xAxisValues
  }
`;
export const CallDetailFragmentDoc = gql`
  fragment callDetail on CallResult {
    phoneNumber
    callStats {
      nrOfCallsDay
      nrOfCallsNight
      totalDurationDay
      totalDurationNight
    }
    callList {
      dayNight
      callDateTime
      callDuration
      caller
    }
  }
`;
export const VideoCallSettingsFragmentFragmentDoc = gql`
  fragment videoCallSettingsFragment on VideoCallSettings {
    backgroundImage
    colors {
      background
      buttonsBackground
      buttonsText
      text
    }
    defaultLanguage
    languages
    locale {
      content {
        language
        value
      }
      type
    }
    locations {
      id
      description
      title
      clientSideRotation
      clientSideRotationInputStream
      agentSideRotation
    }
    logoImage
    name
    redirect
    redirectDelay
    template
    timeoutDelay
  }
`;
export const CreateCustomerAttachmentDocument = gql`
  mutation createCustomerAttachment($input: CreateCustomerAttachmentInput!) {
    createCustomerAttachment(input: $input) {
      id
      name
      validFrom
      validTill
      attachment {
        fileName
        url
      }
      active
    }
  }
`;
export type CreateCustomerAttachmentMutationFn = Apollo.MutationFunction<
  CreateCustomerAttachmentMutation,
  CreateCustomerAttachmentMutationVariables
>;

/**
 * __useCreateCustomerAttachmentMutation__
 *
 * To run a mutation, you first call `useCreateCustomerAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerAttachmentMutation, { data, loading, error }] = useCreateCustomerAttachmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerAttachmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerAttachmentMutation,
    CreateCustomerAttachmentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomerAttachmentMutation,
    CreateCustomerAttachmentMutationVariables
  >(CreateCustomerAttachmentDocument, options);
}
export type CreateCustomerAttachmentMutationHookResult = ReturnType<
  typeof useCreateCustomerAttachmentMutation
>;
export type CreateCustomerAttachmentMutationResult = Apollo.MutationResult<CreateCustomerAttachmentMutation>;
export type CreateCustomerAttachmentMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerAttachmentMutation,
  CreateCustomerAttachmentMutationVariables
>;
export const DeleteCustomerAttachmentDocument = gql`
  mutation deleteCustomerAttachment($id: Int!) {
    deleteCustomerAttachment(id: $id) {
      success
    }
  }
`;
export type DeleteCustomerAttachmentMutationFn = Apollo.MutationFunction<
  DeleteCustomerAttachmentMutation,
  DeleteCustomerAttachmentMutationVariables
>;

/**
 * __useDeleteCustomerAttachmentMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerAttachmentMutation, { data, loading, error }] = useDeleteCustomerAttachmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerAttachmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomerAttachmentMutation,
    DeleteCustomerAttachmentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCustomerAttachmentMutation,
    DeleteCustomerAttachmentMutationVariables
  >(DeleteCustomerAttachmentDocument, options);
}
export type DeleteCustomerAttachmentMutationHookResult = ReturnType<
  typeof useDeleteCustomerAttachmentMutation
>;
export type DeleteCustomerAttachmentMutationResult = Apollo.MutationResult<DeleteCustomerAttachmentMutation>;
export type DeleteCustomerAttachmentMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomerAttachmentMutation,
  DeleteCustomerAttachmentMutationVariables
>;
export const GetCustomerAttachmentsDocument = gql`
  query getCustomerAttachments(
    $filter: CustomerAttachmentFilter
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
  ) {
    customerAttachments(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        name
        validFrom
        validTill
        active
        type
        attachment {
          fileName
          url
        }
        versions {
          id
          validFrom
          validTill
          type
          active
          version
          attachment {
            url
          }
        }
      }
    }
  }
`;

/**
 * __useGetCustomerAttachmentsQuery__
 *
 * To run a query within a React component, call `useGetCustomerAttachmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerAttachmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerAttachmentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCustomerAttachmentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerAttachmentsQuery,
    GetCustomerAttachmentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerAttachmentsQuery, GetCustomerAttachmentsQueryVariables>(
    GetCustomerAttachmentsDocument,
    options,
  );
}
export function useGetCustomerAttachmentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerAttachmentsQuery,
    GetCustomerAttachmentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomerAttachmentsQuery, GetCustomerAttachmentsQueryVariables>(
    GetCustomerAttachmentsDocument,
    options,
  );
}
export type GetCustomerAttachmentsQueryHookResult = ReturnType<
  typeof useGetCustomerAttachmentsQuery
>;
export type GetCustomerAttachmentsLazyQueryHookResult = ReturnType<
  typeof useGetCustomerAttachmentsLazyQuery
>;
export type GetCustomerAttachmentsQueryResult = Apollo.QueryResult<
  GetCustomerAttachmentsQuery,
  GetCustomerAttachmentsQueryVariables
>;
export function refetchGetCustomerAttachmentsQuery(
  variables?: GetCustomerAttachmentsQueryVariables,
) {
  return { query: GetCustomerAttachmentsDocument, variables: variables };
}
export const UpdateCustomerAttachmentDocument = gql`
  mutation updateCustomerAttachment($id: Int!, $input: UpdateCustomerAttachmentInput!) {
    updateCustomerAttachment(id: $id, input: $input) {
      id
      name
      validFrom
      validTill
      attachment {
        fileName
        url
      }
      active
    }
  }
`;
export type UpdateCustomerAttachmentMutationFn = Apollo.MutationFunction<
  UpdateCustomerAttachmentMutation,
  UpdateCustomerAttachmentMutationVariables
>;

/**
 * __useUpdateCustomerAttachmentMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerAttachmentMutation, { data, loading, error }] = useUpdateCustomerAttachmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerAttachmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerAttachmentMutation,
    UpdateCustomerAttachmentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerAttachmentMutation,
    UpdateCustomerAttachmentMutationVariables
  >(UpdateCustomerAttachmentDocument, options);
}
export type UpdateCustomerAttachmentMutationHookResult = ReturnType<
  typeof useUpdateCustomerAttachmentMutation
>;
export type UpdateCustomerAttachmentMutationResult = Apollo.MutationResult<UpdateCustomerAttachmentMutation>;
export type UpdateCustomerAttachmentMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerAttachmentMutation,
  UpdateCustomerAttachmentMutationVariables
>;
export const GetCurrentCommunicationCompanyDocument = gql`
  query getCurrentCommunicationCompany {
    getCurrentCommunicationCompany {
      id
      name
      profileName
      address1
      address2
      __typename
    }
  }
`;

/**
 * __useGetCurrentCommunicationCompanyQuery__
 *
 * To run a query within a React component, call `useGetCurrentCommunicationCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentCommunicationCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentCommunicationCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentCommunicationCompanyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentCommunicationCompanyQuery,
    GetCurrentCommunicationCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCurrentCommunicationCompanyQuery,
    GetCurrentCommunicationCompanyQueryVariables
  >(GetCurrentCommunicationCompanyDocument, options);
}
export function useGetCurrentCommunicationCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentCommunicationCompanyQuery,
    GetCurrentCommunicationCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCurrentCommunicationCompanyQuery,
    GetCurrentCommunicationCompanyQueryVariables
  >(GetCurrentCommunicationCompanyDocument, options);
}
export type GetCurrentCommunicationCompanyQueryHookResult = ReturnType<
  typeof useGetCurrentCommunicationCompanyQuery
>;
export type GetCurrentCommunicationCompanyLazyQueryHookResult = ReturnType<
  typeof useGetCurrentCommunicationCompanyLazyQuery
>;
export type GetCurrentCommunicationCompanyQueryResult = Apollo.QueryResult<
  GetCurrentCommunicationCompanyQuery,
  GetCurrentCommunicationCompanyQueryVariables
>;
export function refetchGetCurrentCommunicationCompanyQuery(
  variables?: GetCurrentCommunicationCompanyQueryVariables,
) {
  return { query: GetCurrentCommunicationCompanyDocument, variables: variables };
}
export const GetCurrentCompanyDocument = gql`
  query getCurrentCompany {
    getCurrentCompany {
      id
      name
      profileName
      address1
      address2
      __typename
    }
  }
`;

/**
 * __useGetCurrentCompanyQuery__
 *
 * To run a query within a React component, call `useGetCurrentCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentCompanyQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCurrentCompanyQuery, GetCurrentCompanyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentCompanyQuery, GetCurrentCompanyQueryVariables>(
    GetCurrentCompanyDocument,
    options,
  );
}
export function useGetCurrentCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentCompanyQuery,
    GetCurrentCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentCompanyQuery, GetCurrentCompanyQueryVariables>(
    GetCurrentCompanyDocument,
    options,
  );
}
export type GetCurrentCompanyQueryHookResult = ReturnType<typeof useGetCurrentCompanyQuery>;
export type GetCurrentCompanyLazyQueryHookResult = ReturnType<typeof useGetCurrentCompanyLazyQuery>;
export type GetCurrentCompanyQueryResult = Apollo.QueryResult<
  GetCurrentCompanyQuery,
  GetCurrentCompanyQueryVariables
>;
export function refetchGetCurrentCompanyQuery(variables?: GetCurrentCompanyQueryVariables) {
  return { query: GetCurrentCompanyDocument, variables: variables };
}
export const SendContactRequestDocument = gql`
  mutation sendContactRequest($input: CreateContactRequestInput!) {
    sendContactRequest(input: $input) {
      success
    }
  }
`;
export type SendContactRequestMutationFn = Apollo.MutationFunction<
  SendContactRequestMutation,
  SendContactRequestMutationVariables
>;

/**
 * __useSendContactRequestMutation__
 *
 * To run a mutation, you first call `useSendContactRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendContactRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendContactRequestMutation, { data, loading, error }] = useSendContactRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendContactRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendContactRequestMutation,
    SendContactRequestMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendContactRequestMutation, SendContactRequestMutationVariables>(
    SendContactRequestDocument,
    options,
  );
}
export type SendContactRequestMutationHookResult = ReturnType<typeof useSendContactRequestMutation>;
export type SendContactRequestMutationResult = Apollo.MutationResult<SendContactRequestMutation>;
export type SendContactRequestMutationOptions = Apollo.BaseMutationOptions<
  SendContactRequestMutation,
  SendContactRequestMutationVariables
>;
export const AddMeccaConversationAgentMessageDocument = gql`
  mutation addMeccaConversationAgentMessage(
    $agentMessageId: ID!
    $conversationId: ID!
    $input: AddConversationAgentMessage!
  ) {
    addMeccaConversationAgentMessage(
      agentMessageId: $agentMessageId
      conversationId: $conversationId
      input: $input
    ) {
      success
    }
  }
`;
export type AddMeccaConversationAgentMessageMutationFn = Apollo.MutationFunction<
  AddMeccaConversationAgentMessageMutation,
  AddMeccaConversationAgentMessageMutationVariables
>;

/**
 * __useAddMeccaConversationAgentMessageMutation__
 *
 * To run a mutation, you first call `useAddMeccaConversationAgentMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMeccaConversationAgentMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMeccaConversationAgentMessageMutation, { data, loading, error }] = useAddMeccaConversationAgentMessageMutation({
 *   variables: {
 *      agentMessageId: // value for 'agentMessageId'
 *      conversationId: // value for 'conversationId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMeccaConversationAgentMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddMeccaConversationAgentMessageMutation,
    AddMeccaConversationAgentMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddMeccaConversationAgentMessageMutation,
    AddMeccaConversationAgentMessageMutationVariables
  >(AddMeccaConversationAgentMessageDocument, options);
}
export type AddMeccaConversationAgentMessageMutationHookResult = ReturnType<
  typeof useAddMeccaConversationAgentMessageMutation
>;
export type AddMeccaConversationAgentMessageMutationResult = Apollo.MutationResult<AddMeccaConversationAgentMessageMutation>;
export type AddMeccaConversationAgentMessageMutationOptions = Apollo.BaseMutationOptions<
  AddMeccaConversationAgentMessageMutation,
  AddMeccaConversationAgentMessageMutationVariables
>;
export const AddMeccaConversationAttachmentDocument = gql`
  mutation addMeccaConversationAttachment($input: AddMeccaMessageAttachmentInputModel!) {
    addMeccaMessageAttachment(input: $input)
  }
`;
export type AddMeccaConversationAttachmentMutationFn = Apollo.MutationFunction<
  AddMeccaConversationAttachmentMutation,
  AddMeccaConversationAttachmentMutationVariables
>;

/**
 * __useAddMeccaConversationAttachmentMutation__
 *
 * To run a mutation, you first call `useAddMeccaConversationAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMeccaConversationAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMeccaConversationAttachmentMutation, { data, loading, error }] = useAddMeccaConversationAttachmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMeccaConversationAttachmentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddMeccaConversationAttachmentMutation,
    AddMeccaConversationAttachmentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddMeccaConversationAttachmentMutation,
    AddMeccaConversationAttachmentMutationVariables
  >(AddMeccaConversationAttachmentDocument, options);
}
export type AddMeccaConversationAttachmentMutationHookResult = ReturnType<
  typeof useAddMeccaConversationAttachmentMutation
>;
export type AddMeccaConversationAttachmentMutationResult = Apollo.MutationResult<AddMeccaConversationAttachmentMutation>;
export type AddMeccaConversationAttachmentMutationOptions = Apollo.BaseMutationOptions<
  AddMeccaConversationAttachmentMutation,
  AddMeccaConversationAttachmentMutationVariables
>;
export const BulkUpdateMeccaConversationsDocument = gql`
  mutation bulkUpdateMeccaConversations($ids: [ID!]!, $input: UpdateMeccaConversationInputModel!) {
    bulkUpdateMeccaConversations(ids: $ids, input: $input) {
      id
    }
  }
`;
export type BulkUpdateMeccaConversationsMutationFn = Apollo.MutationFunction<
  BulkUpdateMeccaConversationsMutation,
  BulkUpdateMeccaConversationsMutationVariables
>;

/**
 * __useBulkUpdateMeccaConversationsMutation__
 *
 * To run a mutation, you first call `useBulkUpdateMeccaConversationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkUpdateMeccaConversationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkUpdateMeccaConversationsMutation, { data, loading, error }] = useBulkUpdateMeccaConversationsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkUpdateMeccaConversationsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BulkUpdateMeccaConversationsMutation,
    BulkUpdateMeccaConversationsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BulkUpdateMeccaConversationsMutation,
    BulkUpdateMeccaConversationsMutationVariables
  >(BulkUpdateMeccaConversationsDocument, options);
}
export type BulkUpdateMeccaConversationsMutationHookResult = ReturnType<
  typeof useBulkUpdateMeccaConversationsMutation
>;
export type BulkUpdateMeccaConversationsMutationResult = Apollo.MutationResult<BulkUpdateMeccaConversationsMutation>;
export type BulkUpdateMeccaConversationsMutationOptions = Apollo.BaseMutationOptions<
  BulkUpdateMeccaConversationsMutation,
  BulkUpdateMeccaConversationsMutationVariables
>;
export const CheckConversationLockedDocument = gql`
  query checkConversationLocked($agentMessageId: ID!, $conversationId: ID!) {
    checkConversationLocked(agentMessageId: $agentMessageId, conversationId: $conversationId)
  }
`;

/**
 * __useCheckConversationLockedQuery__
 *
 * To run a query within a React component, call `useCheckConversationLockedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckConversationLockedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckConversationLockedQuery({
 *   variables: {
 *      agentMessageId: // value for 'agentMessageId'
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useCheckConversationLockedQuery(
  baseOptions: Apollo.QueryHookOptions<
    CheckConversationLockedQuery,
    CheckConversationLockedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckConversationLockedQuery, CheckConversationLockedQueryVariables>(
    CheckConversationLockedDocument,
    options,
  );
}
export function useCheckConversationLockedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckConversationLockedQuery,
    CheckConversationLockedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CheckConversationLockedQuery, CheckConversationLockedQueryVariables>(
    CheckConversationLockedDocument,
    options,
  );
}
export type CheckConversationLockedQueryHookResult = ReturnType<
  typeof useCheckConversationLockedQuery
>;
export type CheckConversationLockedLazyQueryHookResult = ReturnType<
  typeof useCheckConversationLockedLazyQuery
>;
export type CheckConversationLockedQueryResult = Apollo.QueryResult<
  CheckConversationLockedQuery,
  CheckConversationLockedQueryVariables
>;
export function refetchCheckConversationLockedQuery(
  variables?: CheckConversationLockedQueryVariables,
) {
  return { query: CheckConversationLockedDocument, variables: variables };
}
export const MeccaConversationBulkUpdatedDocument = gql`
  subscription meccaConversationBulkUpdated {
    meccaConversationBulkUpdated {
      ...meccaConversationDetails
    }
  }
  ${MeccaConversationDetailsFragmentDoc}
`;

/**
 * __useMeccaConversationBulkUpdatedSubscription__
 *
 * To run a query within a React component, call `useMeccaConversationBulkUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeccaConversationBulkUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeccaConversationBulkUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMeccaConversationBulkUpdatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    MeccaConversationBulkUpdatedSubscription,
    MeccaConversationBulkUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    MeccaConversationBulkUpdatedSubscription,
    MeccaConversationBulkUpdatedSubscriptionVariables
  >(MeccaConversationBulkUpdatedDocument, options);
}
export type MeccaConversationBulkUpdatedSubscriptionHookResult = ReturnType<
  typeof useMeccaConversationBulkUpdatedSubscription
>;
export type MeccaConversationBulkUpdatedSubscriptionResult = Apollo.SubscriptionResult<MeccaConversationBulkUpdatedSubscription>;
export const MeccaConversationUpdatedDocument = gql`
  subscription meccaConversationUpdated {
    meccaConversationUpdated {
      ...meccaConversationDetails
    }
  }
  ${MeccaConversationDetailsFragmentDoc}
`;

/**
 * __useMeccaConversationUpdatedSubscription__
 *
 * To run a query within a React component, call `useMeccaConversationUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeccaConversationUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeccaConversationUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMeccaConversationUpdatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    MeccaConversationUpdatedSubscription,
    MeccaConversationUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    MeccaConversationUpdatedSubscription,
    MeccaConversationUpdatedSubscriptionVariables
  >(MeccaConversationUpdatedDocument, options);
}
export type MeccaConversationUpdatedSubscriptionHookResult = ReturnType<
  typeof useMeccaConversationUpdatedSubscription
>;
export type MeccaConversationUpdatedSubscriptionResult = Apollo.SubscriptionResult<MeccaConversationUpdatedSubscription>;
export const CreateMeccaConversationDocument = gql`
  mutation createMeccaConversation($input: CreateMeccaConversationInputModel!) {
    createMeccaConversation(input: $input) {
      ...meccaConversationPreview
    }
  }
  ${MeccaConversationPreviewFragmentDoc}
`;
export type CreateMeccaConversationMutationFn = Apollo.MutationFunction<
  CreateMeccaConversationMutation,
  CreateMeccaConversationMutationVariables
>;

/**
 * __useCreateMeccaConversationMutation__
 *
 * To run a mutation, you first call `useCreateMeccaConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeccaConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeccaConversationMutation, { data, loading, error }] = useCreateMeccaConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMeccaConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMeccaConversationMutation,
    CreateMeccaConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMeccaConversationMutation,
    CreateMeccaConversationMutationVariables
  >(CreateMeccaConversationDocument, options);
}
export type CreateMeccaConversationMutationHookResult = ReturnType<
  typeof useCreateMeccaConversationMutation
>;
export type CreateMeccaConversationMutationResult = Apollo.MutationResult<CreateMeccaConversationMutation>;
export type CreateMeccaConversationMutationOptions = Apollo.BaseMutationOptions<
  CreateMeccaConversationMutation,
  CreateMeccaConversationMutationVariables
>;
export const EditMeccaConversationDocument = gql`
  mutation editMeccaConversation($input: EditMeccaConversationInputModel!) {
    editMeccaConversation(input: $input) {
      ...meccaConversationPreview
    }
  }
  ${MeccaConversationPreviewFragmentDoc}
`;
export type EditMeccaConversationMutationFn = Apollo.MutationFunction<
  EditMeccaConversationMutation,
  EditMeccaConversationMutationVariables
>;

/**
 * __useEditMeccaConversationMutation__
 *
 * To run a mutation, you first call `useEditMeccaConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMeccaConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMeccaConversationMutation, { data, loading, error }] = useEditMeccaConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditMeccaConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditMeccaConversationMutation,
    EditMeccaConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditMeccaConversationMutation, EditMeccaConversationMutationVariables>(
    EditMeccaConversationDocument,
    options,
  );
}
export type EditMeccaConversationMutationHookResult = ReturnType<
  typeof useEditMeccaConversationMutation
>;
export type EditMeccaConversationMutationResult = Apollo.MutationResult<EditMeccaConversationMutation>;
export type EditMeccaConversationMutationOptions = Apollo.BaseMutationOptions<
  EditMeccaConversationMutation,
  EditMeccaConversationMutationVariables
>;
export const ForwardMeccaConversationsAgentDocument = gql`
  mutation forwardMeccaConversationsAgent(
    $messagesIds: [ID!]!
    $input: ForwardConversationAgentMessage!
  ) {
    forwardMeccaConversationsAgent(messagesIds: $messagesIds, input: $input) {
      success
    }
  }
`;
export type ForwardMeccaConversationsAgentMutationFn = Apollo.MutationFunction<
  ForwardMeccaConversationsAgentMutation,
  ForwardMeccaConversationsAgentMutationVariables
>;

/**
 * __useForwardMeccaConversationsAgentMutation__
 *
 * To run a mutation, you first call `useForwardMeccaConversationsAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForwardMeccaConversationsAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forwardMeccaConversationsAgentMutation, { data, loading, error }] = useForwardMeccaConversationsAgentMutation({
 *   variables: {
 *      messagesIds: // value for 'messagesIds'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForwardMeccaConversationsAgentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForwardMeccaConversationsAgentMutation,
    ForwardMeccaConversationsAgentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForwardMeccaConversationsAgentMutation,
    ForwardMeccaConversationsAgentMutationVariables
  >(ForwardMeccaConversationsAgentDocument, options);
}
export type ForwardMeccaConversationsAgentMutationHookResult = ReturnType<
  typeof useForwardMeccaConversationsAgentMutation
>;
export type ForwardMeccaConversationsAgentMutationResult = Apollo.MutationResult<ForwardMeccaConversationsAgentMutation>;
export type ForwardMeccaConversationsAgentMutationOptions = Apollo.BaseMutationOptions<
  ForwardMeccaConversationsAgentMutation,
  ForwardMeccaConversationsAgentMutationVariables
>;
export const GetMeccaConversationDocument = gql`
  query getMeccaConversation($id: ID!) {
    meccaConversation(id: $id) {
      ...meccaConversationDetails
    }
  }
  ${MeccaConversationDetailsFragmentDoc}
`;

/**
 * __useGetMeccaConversationQuery__
 *
 * To run a query within a React component, call `useGetMeccaConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeccaConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeccaConversationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMeccaConversationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMeccaConversationQuery,
    GetMeccaConversationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMeccaConversationQuery, GetMeccaConversationQueryVariables>(
    GetMeccaConversationDocument,
    options,
  );
}
export function useGetMeccaConversationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMeccaConversationQuery,
    GetMeccaConversationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMeccaConversationQuery, GetMeccaConversationQueryVariables>(
    GetMeccaConversationDocument,
    options,
  );
}
export type GetMeccaConversationQueryHookResult = ReturnType<typeof useGetMeccaConversationQuery>;
export type GetMeccaConversationLazyQueryHookResult = ReturnType<
  typeof useGetMeccaConversationLazyQuery
>;
export type GetMeccaConversationQueryResult = Apollo.QueryResult<
  GetMeccaConversationQuery,
  GetMeccaConversationQueryVariables
>;
export function refetchGetMeccaConversationQuery(variables?: GetMeccaConversationQueryVariables) {
  return { query: GetMeccaConversationDocument, variables: variables };
}
export const GetMeccaConversationsPreviewDocument = gql`
  query getMeccaConversationsPreview(
    $filter: FilterMeccaConversationInputModel
    $sort: SortOrder
    $skip: Int
    $limit: Int
  ) {
    meccaConversations(filter: $filter, sort: $sort, skip: $skip, limit: $limit) {
      count
      items {
        ...meccaConversationPreview
      }
    }
  }
  ${MeccaConversationPreviewFragmentDoc}
`;

/**
 * __useGetMeccaConversationsPreviewQuery__
 *
 * To run a query within a React component, call `useGetMeccaConversationsPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeccaConversationsPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeccaConversationsPreviewQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetMeccaConversationsPreviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMeccaConversationsPreviewQuery,
    GetMeccaConversationsPreviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMeccaConversationsPreviewQuery,
    GetMeccaConversationsPreviewQueryVariables
  >(GetMeccaConversationsPreviewDocument, options);
}
export function useGetMeccaConversationsPreviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMeccaConversationsPreviewQuery,
    GetMeccaConversationsPreviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMeccaConversationsPreviewQuery,
    GetMeccaConversationsPreviewQueryVariables
  >(GetMeccaConversationsPreviewDocument, options);
}
export type GetMeccaConversationsPreviewQueryHookResult = ReturnType<
  typeof useGetMeccaConversationsPreviewQuery
>;
export type GetMeccaConversationsPreviewLazyQueryHookResult = ReturnType<
  typeof useGetMeccaConversationsPreviewLazyQuery
>;
export type GetMeccaConversationsPreviewQueryResult = Apollo.QueryResult<
  GetMeccaConversationsPreviewQuery,
  GetMeccaConversationsPreviewQueryVariables
>;
export function refetchGetMeccaConversationsPreviewQuery(
  variables?: GetMeccaConversationsPreviewQueryVariables,
) {
  return { query: GetMeccaConversationsPreviewDocument, variables: variables };
}
export const MeccaConversationsByFilterDocument = gql`
  query meccaConversationsByFilter($ids: [ID!], $from: DateTime, $till: DateTime) {
    meccaConversationsByFilter(ids: $ids, from: $from, till: $till) {
      ...meccaConversationDetails
    }
  }
  ${MeccaConversationDetailsFragmentDoc}
`;

/**
 * __useMeccaConversationsByFilterQuery__
 *
 * To run a query within a React component, call `useMeccaConversationsByFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeccaConversationsByFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeccaConversationsByFilterQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      from: // value for 'from'
 *      till: // value for 'till'
 *   },
 * });
 */
export function useMeccaConversationsByFilterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeccaConversationsByFilterQuery,
    MeccaConversationsByFilterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeccaConversationsByFilterQuery, MeccaConversationsByFilterQueryVariables>(
    MeccaConversationsByFilterDocument,
    options,
  );
}
export function useMeccaConversationsByFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeccaConversationsByFilterQuery,
    MeccaConversationsByFilterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MeccaConversationsByFilterQuery,
    MeccaConversationsByFilterQueryVariables
  >(MeccaConversationsByFilterDocument, options);
}
export type MeccaConversationsByFilterQueryHookResult = ReturnType<
  typeof useMeccaConversationsByFilterQuery
>;
export type MeccaConversationsByFilterLazyQueryHookResult = ReturnType<
  typeof useMeccaConversationsByFilterLazyQuery
>;
export type MeccaConversationsByFilterQueryResult = Apollo.QueryResult<
  MeccaConversationsByFilterQuery,
  MeccaConversationsByFilterQueryVariables
>;
export function refetchMeccaConversationsByFilterQuery(
  variables?: MeccaConversationsByFilterQueryVariables,
) {
  return { query: MeccaConversationsByFilterDocument, variables: variables };
}
export const RemoveMeccaConversationAttachementDocument = gql`
  mutation removeMeccaConversationAttachement($input: RemoveMeccaMessageAttachmentInputModel!) {
    removeMeccaMessageAttachment(input: $input)
  }
`;
export type RemoveMeccaConversationAttachementMutationFn = Apollo.MutationFunction<
  RemoveMeccaConversationAttachementMutation,
  RemoveMeccaConversationAttachementMutationVariables
>;

/**
 * __useRemoveMeccaConversationAttachementMutation__
 *
 * To run a mutation, you first call `useRemoveMeccaConversationAttachementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMeccaConversationAttachementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMeccaConversationAttachementMutation, { data, loading, error }] = useRemoveMeccaConversationAttachementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveMeccaConversationAttachementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveMeccaConversationAttachementMutation,
    RemoveMeccaConversationAttachementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveMeccaConversationAttachementMutation,
    RemoveMeccaConversationAttachementMutationVariables
  >(RemoveMeccaConversationAttachementDocument, options);
}
export type RemoveMeccaConversationAttachementMutationHookResult = ReturnType<
  typeof useRemoveMeccaConversationAttachementMutation
>;
export type RemoveMeccaConversationAttachementMutationResult = Apollo.MutationResult<RemoveMeccaConversationAttachementMutation>;
export type RemoveMeccaConversationAttachementMutationOptions = Apollo.BaseMutationOptions<
  RemoveMeccaConversationAttachementMutation,
  RemoveMeccaConversationAttachementMutationVariables
>;
export const UpdateMeccaConversationDocument = gql`
  mutation updateMeccaConversation($id: ID!, $input: UpdateMeccaConversationInputModel!) {
    updateMeccaConversation(id: $id, input: $input) {
      ...meccaConversationPreview
    }
  }
  ${MeccaConversationPreviewFragmentDoc}
`;
export type UpdateMeccaConversationMutationFn = Apollo.MutationFunction<
  UpdateMeccaConversationMutation,
  UpdateMeccaConversationMutationVariables
>;

/**
 * __useUpdateMeccaConversationMutation__
 *
 * To run a mutation, you first call `useUpdateMeccaConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeccaConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeccaConversationMutation, { data, loading, error }] = useUpdateMeccaConversationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeccaConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMeccaConversationMutation,
    UpdateMeccaConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMeccaConversationMutation,
    UpdateMeccaConversationMutationVariables
  >(UpdateMeccaConversationDocument, options);
}
export type UpdateMeccaConversationMutationHookResult = ReturnType<
  typeof useUpdateMeccaConversationMutation
>;
export type UpdateMeccaConversationMutationResult = Apollo.MutationResult<UpdateMeccaConversationMutation>;
export type UpdateMeccaConversationMutationOptions = Apollo.BaseMutationOptions<
  UpdateMeccaConversationMutation,
  UpdateMeccaConversationMutationVariables
>;
export const ConversationStructuredTypesDocument = gql`
  query conversationStructuredTypes($limit: Int, $skip: Int, $sort: [SortInput!]) {
    conversationStructuredTypes(limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        name
        fields {
          sequence
          isEditableByCustomer
          fieldType {
            name
            regExForValidation
            regExForValidChars
            mask
            maxLength
            errorMessage
          }
          label
          description
          required
          readonly
          defaultValue
          options
        }
      }
    }
  }
`;

/**
 * __useConversationStructuredTypesQuery__
 *
 * To run a query within a React component, call `useConversationStructuredTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationStructuredTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationStructuredTypesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useConversationStructuredTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ConversationStructuredTypesQuery,
    ConversationStructuredTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ConversationStructuredTypesQuery,
    ConversationStructuredTypesQueryVariables
  >(ConversationStructuredTypesDocument, options);
}
export function useConversationStructuredTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConversationStructuredTypesQuery,
    ConversationStructuredTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ConversationStructuredTypesQuery,
    ConversationStructuredTypesQueryVariables
  >(ConversationStructuredTypesDocument, options);
}
export type ConversationStructuredTypesQueryHookResult = ReturnType<
  typeof useConversationStructuredTypesQuery
>;
export type ConversationStructuredTypesLazyQueryHookResult = ReturnType<
  typeof useConversationStructuredTypesLazyQuery
>;
export type ConversationStructuredTypesQueryResult = Apollo.QueryResult<
  ConversationStructuredTypesQuery,
  ConversationStructuredTypesQueryVariables
>;
export function refetchConversationStructuredTypesQuery(
  variables?: ConversationStructuredTypesQueryVariables,
) {
  return { query: ConversationStructuredTypesDocument, variables: variables };
}
export const Document = gql`
  {
    socialConversations {
      count
    }
  }
`;

export const BulkUpdateSocialConversationsDocument = gql`
  mutation bulkUpdateSocialConversations(
    $ids: [ID!]!
    $input: UpdateSocialConversationInputModel!
  ) {
    bulkUpdateSocialConversations(ids: $ids, input: $input) {
      id
    }
  }
`;
export type BulkUpdateSocialConversationsMutationFn = Apollo.MutationFunction<
  BulkUpdateSocialConversationsMutation,
  BulkUpdateSocialConversationsMutationVariables
>;

/**
 * __useBulkUpdateSocialConversationsMutation__
 *
 * To run a mutation, you first call `useBulkUpdateSocialConversationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkUpdateSocialConversationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkUpdateSocialConversationsMutation, { data, loading, error }] = useBulkUpdateSocialConversationsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkUpdateSocialConversationsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BulkUpdateSocialConversationsMutation,
    BulkUpdateSocialConversationsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BulkUpdateSocialConversationsMutation,
    BulkUpdateSocialConversationsMutationVariables
  >(BulkUpdateSocialConversationsDocument, options);
}
export type BulkUpdateSocialConversationsMutationHookResult = ReturnType<
  typeof useBulkUpdateSocialConversationsMutation
>;
export type BulkUpdateSocialConversationsMutationResult = Apollo.MutationResult<BulkUpdateSocialConversationsMutation>;
export type BulkUpdateSocialConversationsMutationOptions = Apollo.BaseMutationOptions<
  BulkUpdateSocialConversationsMutation,
  BulkUpdateSocialConversationsMutationVariables
>;
export const SocialConversationBulkUpdatedDocument = gql`
  subscription SocialConversationBulkUpdated {
    SocialConversationBulkUpdated {
      ...socialConversationDetails
    }
  }
  ${SocialConversationDetailsFragmentDoc}
`;

/**
 * __useSocialConversationBulkUpdatedSubscription__
 *
 * To run a query within a React component, call `useSocialConversationBulkUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSocialConversationBulkUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialConversationBulkUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSocialConversationBulkUpdatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    SocialConversationBulkUpdatedSubscription,
    SocialConversationBulkUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    SocialConversationBulkUpdatedSubscription,
    SocialConversationBulkUpdatedSubscriptionVariables
  >(SocialConversationBulkUpdatedDocument, options);
}
export type SocialConversationBulkUpdatedSubscriptionHookResult = ReturnType<
  typeof useSocialConversationBulkUpdatedSubscription
>;
export type SocialConversationBulkUpdatedSubscriptionResult = Apollo.SubscriptionResult<SocialConversationBulkUpdatedSubscription>;
export const SocialNewReceivedMessageDocument = gql`
  subscription SocialNewReceivedMessage {
    SocialNewReceivedMessage {
      channelType
      attachments {
        fileName
        url
      }
      content
      external
      conversationId
      destination
      messageTime
      sender {
        id
        displayName
        __typename
      }
      source
    }
  }
`;

/**
 * __useSocialNewReceivedMessageSubscription__
 *
 * To run a query within a React component, call `useSocialNewReceivedMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSocialNewReceivedMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialNewReceivedMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSocialNewReceivedMessageSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    SocialNewReceivedMessageSubscription,
    SocialNewReceivedMessageSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    SocialNewReceivedMessageSubscription,
    SocialNewReceivedMessageSubscriptionVariables
  >(SocialNewReceivedMessageDocument, options);
}
export type SocialNewReceivedMessageSubscriptionHookResult = ReturnType<
  typeof useSocialNewReceivedMessageSubscription
>;
export type SocialNewReceivedMessageSubscriptionResult = Apollo.SubscriptionResult<SocialNewReceivedMessageSubscription>;
export const SocialConversationUpdatedDocument = gql`
  subscription SocialConversationUpdated {
    SocialConversationUpdated {
      ...socialConversationDetails
    }
  }
  ${SocialConversationDetailsFragmentDoc}
`;

/**
 * __useSocialConversationUpdatedSubscription__
 *
 * To run a query within a React component, call `useSocialConversationUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSocialConversationUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialConversationUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSocialConversationUpdatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    SocialConversationUpdatedSubscription,
    SocialConversationUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    SocialConversationUpdatedSubscription,
    SocialConversationUpdatedSubscriptionVariables
  >(SocialConversationUpdatedDocument, options);
}
export type SocialConversationUpdatedSubscriptionHookResult = ReturnType<
  typeof useSocialConversationUpdatedSubscription
>;
export type SocialConversationUpdatedSubscriptionResult = Apollo.SubscriptionResult<SocialConversationUpdatedSubscription>;
export const GetSocialConversationDocument = gql`
  query getSocialConversation($id: ID!) {
    socialConversation(id: $id) {
      ...socialConversationDetails
    }
  }
  ${SocialConversationDetailsFragmentDoc}
`;

/**
 * __useGetSocialConversationQuery__
 *
 * To run a query within a React component, call `useGetSocialConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSocialConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSocialConversationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSocialConversationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSocialConversationQuery,
    GetSocialConversationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSocialConversationQuery, GetSocialConversationQueryVariables>(
    GetSocialConversationDocument,
    options,
  );
}
export function useGetSocialConversationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSocialConversationQuery,
    GetSocialConversationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSocialConversationQuery, GetSocialConversationQueryVariables>(
    GetSocialConversationDocument,
    options,
  );
}
export type GetSocialConversationQueryHookResult = ReturnType<typeof useGetSocialConversationQuery>;
export type GetSocialConversationLazyQueryHookResult = ReturnType<
  typeof useGetSocialConversationLazyQuery
>;
export type GetSocialConversationQueryResult = Apollo.QueryResult<
  GetSocialConversationQuery,
  GetSocialConversationQueryVariables
>;
export function refetchGetSocialConversationQuery(variables?: GetSocialConversationQueryVariables) {
  return { query: GetSocialConversationDocument, variables: variables };
}
export const GetSocialConversationsPreviewDocument = gql`
  query getSocialConversationsPreview(
    $filter: SocialConversationFilterModel
    $sort: SortOrder
    $skip: Int
    $limit: Int
  ) {
    socialConversations(filter: $filter, sort: $sort, skip: $skip, limit: $limit) {
      count
      items {
        ...socialConversationPreview
      }
    }
  }
  ${SocialConversationPreviewFragmentDoc}
`;

/**
 * __useGetSocialConversationsPreviewQuery__
 *
 * To run a query within a React component, call `useGetSocialConversationsPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSocialConversationsPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSocialConversationsPreviewQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetSocialConversationsPreviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSocialConversationsPreviewQuery,
    GetSocialConversationsPreviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSocialConversationsPreviewQuery,
    GetSocialConversationsPreviewQueryVariables
  >(GetSocialConversationsPreviewDocument, options);
}
export function useGetSocialConversationsPreviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSocialConversationsPreviewQuery,
    GetSocialConversationsPreviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSocialConversationsPreviewQuery,
    GetSocialConversationsPreviewQueryVariables
  >(GetSocialConversationsPreviewDocument, options);
}
export type GetSocialConversationsPreviewQueryHookResult = ReturnType<
  typeof useGetSocialConversationsPreviewQuery
>;
export type GetSocialConversationsPreviewLazyQueryHookResult = ReturnType<
  typeof useGetSocialConversationsPreviewLazyQuery
>;
export type GetSocialConversationsPreviewQueryResult = Apollo.QueryResult<
  GetSocialConversationsPreviewQuery,
  GetSocialConversationsPreviewQueryVariables
>;
export function refetchGetSocialConversationsPreviewQuery(
  variables?: GetSocialConversationsPreviewQueryVariables,
) {
  return { query: GetSocialConversationsPreviewDocument, variables: variables };
}
export const GetSocialRelatedConversationsDocument = gql`
  query getSocialRelatedConversations($id: ID!) {
    socialConversation(id: $id) {
      id
      related {
        ...socialConversationPreview
      }
    }
  }
  ${SocialConversationPreviewFragmentDoc}
`;

/**
 * __useGetSocialRelatedConversationsQuery__
 *
 * To run a query within a React component, call `useGetSocialRelatedConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSocialRelatedConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSocialRelatedConversationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSocialRelatedConversationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSocialRelatedConversationsQuery,
    GetSocialRelatedConversationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSocialRelatedConversationsQuery,
    GetSocialRelatedConversationsQueryVariables
  >(GetSocialRelatedConversationsDocument, options);
}
export function useGetSocialRelatedConversationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSocialRelatedConversationsQuery,
    GetSocialRelatedConversationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSocialRelatedConversationsQuery,
    GetSocialRelatedConversationsQueryVariables
  >(GetSocialRelatedConversationsDocument, options);
}
export type GetSocialRelatedConversationsQueryHookResult = ReturnType<
  typeof useGetSocialRelatedConversationsQuery
>;
export type GetSocialRelatedConversationsLazyQueryHookResult = ReturnType<
  typeof useGetSocialRelatedConversationsLazyQuery
>;
export type GetSocialRelatedConversationsQueryResult = Apollo.QueryResult<
  GetSocialRelatedConversationsQuery,
  GetSocialRelatedConversationsQueryVariables
>;
export function refetchGetSocialRelatedConversationsQuery(
  variables?: GetSocialRelatedConversationsQueryVariables,
) {
  return { query: GetSocialRelatedConversationsDocument, variables: variables };
}
export const RemoveSocialConversationAttachementDocument = gql`
  mutation removeSocialConversationAttachement($input: RemoveSocialMessageAttachmentInputModel!) {
    removeSocialConversationAttachment(input: $input)
  }
`;
export type RemoveSocialConversationAttachementMutationFn = Apollo.MutationFunction<
  RemoveSocialConversationAttachementMutation,
  RemoveSocialConversationAttachementMutationVariables
>;

/**
 * __useRemoveSocialConversationAttachementMutation__
 *
 * To run a mutation, you first call `useRemoveSocialConversationAttachementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSocialConversationAttachementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSocialConversationAttachementMutation, { data, loading, error }] = useRemoveSocialConversationAttachementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveSocialConversationAttachementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveSocialConversationAttachementMutation,
    RemoveSocialConversationAttachementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveSocialConversationAttachementMutation,
    RemoveSocialConversationAttachementMutationVariables
  >(RemoveSocialConversationAttachementDocument, options);
}
export type RemoveSocialConversationAttachementMutationHookResult = ReturnType<
  typeof useRemoveSocialConversationAttachementMutation
>;
export type RemoveSocialConversationAttachementMutationResult = Apollo.MutationResult<RemoveSocialConversationAttachementMutation>;
export type RemoveSocialConversationAttachementMutationOptions = Apollo.BaseMutationOptions<
  RemoveSocialConversationAttachementMutation,
  RemoveSocialConversationAttachementMutationVariables
>;
export const SendSocialConversationTextDocument = gql`
  mutation sendSocialConversationText($id: ID!, $input: SendConversationTextInput!) {
    sendSocialConversationText(id: $id, input: $input) {
      success
      message
    }
  }
`;
export type SendSocialConversationTextMutationFn = Apollo.MutationFunction<
  SendSocialConversationTextMutation,
  SendSocialConversationTextMutationVariables
>;

/**
 * __useSendSocialConversationTextMutation__
 *
 * To run a mutation, you first call `useSendSocialConversationTextMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendSocialConversationTextMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendSocialConversationTextMutation, { data, loading, error }] = useSendSocialConversationTextMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendSocialConversationTextMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendSocialConversationTextMutation,
    SendSocialConversationTextMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SendSocialConversationTextMutation,
    SendSocialConversationTextMutationVariables
  >(SendSocialConversationTextDocument, options);
}
export type SendSocialConversationTextMutationHookResult = ReturnType<
  typeof useSendSocialConversationTextMutation
>;
export type SendSocialConversationTextMutationResult = Apollo.MutationResult<SendSocialConversationTextMutation>;
export type SendSocialConversationTextMutationOptions = Apollo.BaseMutationOptions<
  SendSocialConversationTextMutation,
  SendSocialConversationTextMutationVariables
>;
export const UpdateSocialConversationDocument = gql`
  mutation updateSocialConversation($id: ID!, $input: UpdateSocialConversationInputModel!) {
    updateSocialConversation(id: $id, input: $input) {
      ...socialConversationPreview
    }
  }
  ${SocialConversationPreviewFragmentDoc}
`;
export type UpdateSocialConversationMutationFn = Apollo.MutationFunction<
  UpdateSocialConversationMutation,
  UpdateSocialConversationMutationVariables
>;

/**
 * __useUpdateSocialConversationMutation__
 *
 * To run a mutation, you first call `useUpdateSocialConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSocialConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSocialConversationMutation, { data, loading, error }] = useUpdateSocialConversationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSocialConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSocialConversationMutation,
    UpdateSocialConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSocialConversationMutation,
    UpdateSocialConversationMutationVariables
  >(UpdateSocialConversationDocument, options);
}
export type UpdateSocialConversationMutationHookResult = ReturnType<
  typeof useUpdateSocialConversationMutation
>;
export type UpdateSocialConversationMutationResult = Apollo.MutationResult<UpdateSocialConversationMutation>;
export type UpdateSocialConversationMutationOptions = Apollo.BaseMutationOptions<
  UpdateSocialConversationMutation,
  UpdateSocialConversationMutationVariables
>;
export const CreateCustomerCrmContactDocument = gql`
  mutation createCustomerCrmContact($input: CreateCustomerCrmContactInput!) {
    createCustomerCrmContact(input: $input) {
      id
      title
      firstName
      lastName
      sex
      functionName
      addresses {
        id
        city
        country
        postalCode
        address
        description
      }
      communications {
        type {
          id
          name
          category
        }
        sequence
        value
        description
        forwardStatus
        forwardCondition
        passThroughStatus
        passThroughCondition
      }
      groups {
        groupId
        group {
          id
          name
          subGroups {
            id
            name
          }
        }
        subGroupId
        subGroup {
          id
          name
        }
      }
    }
  }
`;
export type CreateCustomerCrmContactMutationFn = Apollo.MutationFunction<
  CreateCustomerCrmContactMutation,
  CreateCustomerCrmContactMutationVariables
>;

/**
 * __useCreateCustomerCrmContactMutation__
 *
 * To run a mutation, you first call `useCreateCustomerCrmContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerCrmContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerCrmContactMutation, { data, loading, error }] = useCreateCustomerCrmContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerCrmContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerCrmContactMutation,
    CreateCustomerCrmContactMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomerCrmContactMutation,
    CreateCustomerCrmContactMutationVariables
  >(CreateCustomerCrmContactDocument, options);
}
export type CreateCustomerCrmContactMutationHookResult = ReturnType<
  typeof useCreateCustomerCrmContactMutation
>;
export type CreateCustomerCrmContactMutationResult = Apollo.MutationResult<CreateCustomerCrmContactMutation>;
export type CreateCustomerCrmContactMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerCrmContactMutation,
  CreateCustomerCrmContactMutationVariables
>;
export const DeleteCustomerCrmContactDocument = gql`
  mutation deleteCustomerCrmContact($id: Int!) {
    deleteCustomerCrmContact(id: $id) {
      success
    }
  }
`;
export type DeleteCustomerCrmContactMutationFn = Apollo.MutationFunction<
  DeleteCustomerCrmContactMutation,
  DeleteCustomerCrmContactMutationVariables
>;

/**
 * __useDeleteCustomerCrmContactMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerCrmContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerCrmContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerCrmContactMutation, { data, loading, error }] = useDeleteCustomerCrmContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerCrmContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomerCrmContactMutation,
    DeleteCustomerCrmContactMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCustomerCrmContactMutation,
    DeleteCustomerCrmContactMutationVariables
  >(DeleteCustomerCrmContactDocument, options);
}
export type DeleteCustomerCrmContactMutationHookResult = ReturnType<
  typeof useDeleteCustomerCrmContactMutation
>;
export type DeleteCustomerCrmContactMutationResult = Apollo.MutationResult<DeleteCustomerCrmContactMutation>;
export type DeleteCustomerCrmContactMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomerCrmContactMutation,
  DeleteCustomerCrmContactMutationVariables
>;
export const GetCustomerCrmContactCommunicationTypesDocument = gql`
  query getCustomerCrmContactCommunicationTypes(
    $filter: CustomerCrmContactCommunicationTypeFilter
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
  ) {
    customerCrmContactCommunicationTypes(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        name
        category
      }
    }
  }
`;

/**
 * __useGetCustomerCrmContactCommunicationTypesQuery__
 *
 * To run a query within a React component, call `useGetCustomerCrmContactCommunicationTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerCrmContactCommunicationTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerCrmContactCommunicationTypesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCustomerCrmContactCommunicationTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerCrmContactCommunicationTypesQuery,
    GetCustomerCrmContactCommunicationTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCustomerCrmContactCommunicationTypesQuery,
    GetCustomerCrmContactCommunicationTypesQueryVariables
  >(GetCustomerCrmContactCommunicationTypesDocument, options);
}
export function useGetCustomerCrmContactCommunicationTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerCrmContactCommunicationTypesQuery,
    GetCustomerCrmContactCommunicationTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCustomerCrmContactCommunicationTypesQuery,
    GetCustomerCrmContactCommunicationTypesQueryVariables
  >(GetCustomerCrmContactCommunicationTypesDocument, options);
}
export type GetCustomerCrmContactCommunicationTypesQueryHookResult = ReturnType<
  typeof useGetCustomerCrmContactCommunicationTypesQuery
>;
export type GetCustomerCrmContactCommunicationTypesLazyQueryHookResult = ReturnType<
  typeof useGetCustomerCrmContactCommunicationTypesLazyQuery
>;
export type GetCustomerCrmContactCommunicationTypesQueryResult = Apollo.QueryResult<
  GetCustomerCrmContactCommunicationTypesQuery,
  GetCustomerCrmContactCommunicationTypesQueryVariables
>;
export function refetchGetCustomerCrmContactCommunicationTypesQuery(
  variables?: GetCustomerCrmContactCommunicationTypesQueryVariables,
) {
  return { query: GetCustomerCrmContactCommunicationTypesDocument, variables: variables };
}
export const GetCustomerCrmContactGroupsDocument = gql`
  query getCustomerCrmContactGroups(
    $filter: CustomerCrmContactGroupFilter
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
  ) {
    customerCrmContactGroups(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        name
        subGroups {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetCustomerCrmContactGroupsQuery__
 *
 * To run a query within a React component, call `useGetCustomerCrmContactGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerCrmContactGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerCrmContactGroupsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCustomerCrmContactGroupsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerCrmContactGroupsQuery,
    GetCustomerCrmContactGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCustomerCrmContactGroupsQuery,
    GetCustomerCrmContactGroupsQueryVariables
  >(GetCustomerCrmContactGroupsDocument, options);
}
export function useGetCustomerCrmContactGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerCrmContactGroupsQuery,
    GetCustomerCrmContactGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCustomerCrmContactGroupsQuery,
    GetCustomerCrmContactGroupsQueryVariables
  >(GetCustomerCrmContactGroupsDocument, options);
}
export type GetCustomerCrmContactGroupsQueryHookResult = ReturnType<
  typeof useGetCustomerCrmContactGroupsQuery
>;
export type GetCustomerCrmContactGroupsLazyQueryHookResult = ReturnType<
  typeof useGetCustomerCrmContactGroupsLazyQuery
>;
export type GetCustomerCrmContactGroupsQueryResult = Apollo.QueryResult<
  GetCustomerCrmContactGroupsQuery,
  GetCustomerCrmContactGroupsQueryVariables
>;
export function refetchGetCustomerCrmContactGroupsQuery(
  variables?: GetCustomerCrmContactGroupsQueryVariables,
) {
  return { query: GetCustomerCrmContactGroupsDocument, variables: variables };
}
export const GetCustomerCrmContactsDocument = gql`
  query getCustomerCrmContacts(
    $filter: CustomerCrmContactFilter
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
  ) {
    customerCrmContacts(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        title
        firstName
        lastName
        sex
        functionName
        addresses {
          id
          city
          country
          postalCode
          address
          description
        }
        communications {
          type {
            id
            name
            category
          }
          sequence
          value
          description
          forwardStatus
          forwardCondition
          passThroughStatus
          passThroughCondition
        }
        groups {
          groupId
          group {
            id
            name
            subGroups {
              id
              name
            }
          }
          subGroupId
          subGroup {
            id
            name
          }
        }
      }
    }
  }
`;

/**
 * __useGetCustomerCrmContactsQuery__
 *
 * To run a query within a React component, call `useGetCustomerCrmContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerCrmContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerCrmContactsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCustomerCrmContactsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerCrmContactsQuery,
    GetCustomerCrmContactsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerCrmContactsQuery, GetCustomerCrmContactsQueryVariables>(
    GetCustomerCrmContactsDocument,
    options,
  );
}
export function useGetCustomerCrmContactsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerCrmContactsQuery,
    GetCustomerCrmContactsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomerCrmContactsQuery, GetCustomerCrmContactsQueryVariables>(
    GetCustomerCrmContactsDocument,
    options,
  );
}
export type GetCustomerCrmContactsQueryHookResult = ReturnType<
  typeof useGetCustomerCrmContactsQuery
>;
export type GetCustomerCrmContactsLazyQueryHookResult = ReturnType<
  typeof useGetCustomerCrmContactsLazyQuery
>;
export type GetCustomerCrmContactsQueryResult = Apollo.QueryResult<
  GetCustomerCrmContactsQuery,
  GetCustomerCrmContactsQueryVariables
>;
export function refetchGetCustomerCrmContactsQuery(
  variables?: GetCustomerCrmContactsQueryVariables,
) {
  return { query: GetCustomerCrmContactsDocument, variables: variables };
}
export const UpdateCustomerCrmContactDocument = gql`
  mutation updateCustomerCrmContact($id: Int!, $input: UpdateCustomerCrmContactInput!) {
    updateCustomerCrmContact(id: $id, input: $input) {
      id
      title
      firstName
      lastName
      sex
      functionName
      addresses {
        id
        city
        country
        postalCode
        address
        description
      }
      communications {
        type {
          id
          name
          category
        }
        sequence
        value
        description
        forwardStatus
        forwardCondition
        passThroughStatus
        passThroughCondition
      }
      groups {
        groupId
        group {
          id
          name
          subGroups {
            id
            name
          }
        }
        subGroupId
        subGroup {
          id
          name
        }
      }
    }
  }
`;
export type UpdateCustomerCrmContactMutationFn = Apollo.MutationFunction<
  UpdateCustomerCrmContactMutation,
  UpdateCustomerCrmContactMutationVariables
>;

/**
 * __useUpdateCustomerCrmContactMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerCrmContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerCrmContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerCrmContactMutation, { data, loading, error }] = useUpdateCustomerCrmContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerCrmContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerCrmContactMutation,
    UpdateCustomerCrmContactMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerCrmContactMutation,
    UpdateCustomerCrmContactMutationVariables
  >(UpdateCustomerCrmContactDocument, options);
}
export type UpdateCustomerCrmContactMutationHookResult = ReturnType<
  typeof useUpdateCustomerCrmContactMutation
>;
export type UpdateCustomerCrmContactMutationResult = Apollo.MutationResult<UpdateCustomerCrmContactMutation>;
export type UpdateCustomerCrmContactMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerCrmContactMutation,
  UpdateCustomerCrmContactMutationVariables
>;
export const GetDashboardDocument = gql`
  query getDashboard {
    dashboard {
      socialConversations {
        total
        countsByStatus {
          status
          total
        }
      }
      meccaConversations {
        total
        countsByStatus {
          status
          total
        }
      }
      invoices {
        current
        open
      }
    }
  }
`;

/**
 * __useGetDashboardQuery__
 *
 * To run a query within a React component, call `useGetDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDashboardQuery, GetDashboardQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDashboardQuery, GetDashboardQueryVariables>(
    GetDashboardDocument,
    options,
  );
}
export function useGetDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardQuery, GetDashboardQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDashboardQuery, GetDashboardQueryVariables>(
    GetDashboardDocument,
    options,
  );
}
export type GetDashboardQueryHookResult = ReturnType<typeof useGetDashboardQuery>;
export type GetDashboardLazyQueryHookResult = ReturnType<typeof useGetDashboardLazyQuery>;
export type GetDashboardQueryResult = Apollo.QueryResult<
  GetDashboardQuery,
  GetDashboardQueryVariables
>;
export function refetchGetDashboardQuery(variables?: GetDashboardQueryVariables) {
  return { query: GetDashboardDocument, variables: variables };
}
export const GetDashboardNotificationsDocument = gql`
  query getDashboardNotifications(
    $filter: NotificationFilter
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
  ) {
    dashboard {
      notifications(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
        count
        items {
          date
          type
          ... on NotificationInvoice {
            amount
          }
          ... on NotificationConversation {
            status
            conversationId
            conversation {
              createdBy {
                displayName
                firstName
                lastName
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetDashboardNotificationsQuery__
 *
 * To run a query within a React component, call `useGetDashboardNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardNotificationsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetDashboardNotificationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDashboardNotificationsQuery,
    GetDashboardNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDashboardNotificationsQuery, GetDashboardNotificationsQueryVariables>(
    GetDashboardNotificationsDocument,
    options,
  );
}
export function useGetDashboardNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDashboardNotificationsQuery,
    GetDashboardNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDashboardNotificationsQuery,
    GetDashboardNotificationsQueryVariables
  >(GetDashboardNotificationsDocument, options);
}
export type GetDashboardNotificationsQueryHookResult = ReturnType<
  typeof useGetDashboardNotificationsQuery
>;
export type GetDashboardNotificationsLazyQueryHookResult = ReturnType<
  typeof useGetDashboardNotificationsLazyQuery
>;
export type GetDashboardNotificationsQueryResult = Apollo.QueryResult<
  GetDashboardNotificationsQuery,
  GetDashboardNotificationsQueryVariables
>;
export function refetchGetDashboardNotificationsQuery(
  variables?: GetDashboardNotificationsQueryVariables,
) {
  return { query: GetDashboardNotificationsDocument, variables: variables };
}
export const CreateCustomerTemporaryInstructionDocument = gql`
  mutation createCustomerTemporaryInstruction($input: CreateCustomerTemporaryInstructionInput!) {
    createCustomerTemporaryInstruction(input: $input) {
      id
      updatedAt
      name
      content
      validFrom
      validUntil
      active
    }
  }
`;
export type CreateCustomerTemporaryInstructionMutationFn = Apollo.MutationFunction<
  CreateCustomerTemporaryInstructionMutation,
  CreateCustomerTemporaryInstructionMutationVariables
>;

/**
 * __useCreateCustomerTemporaryInstructionMutation__
 *
 * To run a mutation, you first call `useCreateCustomerTemporaryInstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerTemporaryInstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerTemporaryInstructionMutation, { data, loading, error }] = useCreateCustomerTemporaryInstructionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerTemporaryInstructionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerTemporaryInstructionMutation,
    CreateCustomerTemporaryInstructionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomerTemporaryInstructionMutation,
    CreateCustomerTemporaryInstructionMutationVariables
  >(CreateCustomerTemporaryInstructionDocument, options);
}
export type CreateCustomerTemporaryInstructionMutationHookResult = ReturnType<
  typeof useCreateCustomerTemporaryInstructionMutation
>;
export type CreateCustomerTemporaryInstructionMutationResult = Apollo.MutationResult<CreateCustomerTemporaryInstructionMutation>;
export type CreateCustomerTemporaryInstructionMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerTemporaryInstructionMutation,
  CreateCustomerTemporaryInstructionMutationVariables
>;
export const DeleteCustomerTemporaryInstructionDocument = gql`
  mutation deleteCustomerTemporaryInstruction($id: Int!) {
    deleteCustomerTemporaryInstruction(id: $id) {
      success
    }
  }
`;
export type DeleteCustomerTemporaryInstructionMutationFn = Apollo.MutationFunction<
  DeleteCustomerTemporaryInstructionMutation,
  DeleteCustomerTemporaryInstructionMutationVariables
>;

/**
 * __useDeleteCustomerTemporaryInstructionMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerTemporaryInstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerTemporaryInstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerTemporaryInstructionMutation, { data, loading, error }] = useDeleteCustomerTemporaryInstructionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerTemporaryInstructionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomerTemporaryInstructionMutation,
    DeleteCustomerTemporaryInstructionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCustomerTemporaryInstructionMutation,
    DeleteCustomerTemporaryInstructionMutationVariables
  >(DeleteCustomerTemporaryInstructionDocument, options);
}
export type DeleteCustomerTemporaryInstructionMutationHookResult = ReturnType<
  typeof useDeleteCustomerTemporaryInstructionMutation
>;
export type DeleteCustomerTemporaryInstructionMutationResult = Apollo.MutationResult<DeleteCustomerTemporaryInstructionMutation>;
export type DeleteCustomerTemporaryInstructionMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomerTemporaryInstructionMutation,
  DeleteCustomerTemporaryInstructionMutationVariables
>;
export const GetCustomerFixedInstructionsDocument = gql`
  query getCustomerFixedInstructions(
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
    $filter: CustomerFixedInstructionFilterInput
  ) {
    customerFixedInstructions(limit: $limit, skip: $skip, sort: $sort, filter: $filter) {
      count
      items {
        id
        updatedAt
        name
        content
      }
    }
  }
`;

/**
 * __useGetCustomerFixedInstructionsQuery__
 *
 * To run a query within a React component, call `useGetCustomerFixedInstructionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerFixedInstructionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerFixedInstructionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCustomerFixedInstructionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerFixedInstructionsQuery,
    GetCustomerFixedInstructionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCustomerFixedInstructionsQuery,
    GetCustomerFixedInstructionsQueryVariables
  >(GetCustomerFixedInstructionsDocument, options);
}
export function useGetCustomerFixedInstructionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerFixedInstructionsQuery,
    GetCustomerFixedInstructionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCustomerFixedInstructionsQuery,
    GetCustomerFixedInstructionsQueryVariables
  >(GetCustomerFixedInstructionsDocument, options);
}
export type GetCustomerFixedInstructionsQueryHookResult = ReturnType<
  typeof useGetCustomerFixedInstructionsQuery
>;
export type GetCustomerFixedInstructionsLazyQueryHookResult = ReturnType<
  typeof useGetCustomerFixedInstructionsLazyQuery
>;
export type GetCustomerFixedInstructionsQueryResult = Apollo.QueryResult<
  GetCustomerFixedInstructionsQuery,
  GetCustomerFixedInstructionsQueryVariables
>;
export function refetchGetCustomerFixedInstructionsQuery(
  variables?: GetCustomerFixedInstructionsQueryVariables,
) {
  return { query: GetCustomerFixedInstructionsDocument, variables: variables };
}
export const GetCustomerTemporaryInstructionsDocument = gql`
  query getCustomerTemporaryInstructions(
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
    $filter: CustomerTemporaryInstructionFilterInput
  ) {
    customerTemporaryInstructions(limit: $limit, skip: $skip, sort: $sort, filter: $filter) {
      count
      items {
        id
        updatedAt
        name
        content
        validFrom
        validUntil
        active
        deleted
      }
    }
  }
`;

/**
 * __useGetCustomerTemporaryInstructionsQuery__
 *
 * To run a query within a React component, call `useGetCustomerTemporaryInstructionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerTemporaryInstructionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerTemporaryInstructionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCustomerTemporaryInstructionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerTemporaryInstructionsQuery,
    GetCustomerTemporaryInstructionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCustomerTemporaryInstructionsQuery,
    GetCustomerTemporaryInstructionsQueryVariables
  >(GetCustomerTemporaryInstructionsDocument, options);
}
export function useGetCustomerTemporaryInstructionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerTemporaryInstructionsQuery,
    GetCustomerTemporaryInstructionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCustomerTemporaryInstructionsQuery,
    GetCustomerTemporaryInstructionsQueryVariables
  >(GetCustomerTemporaryInstructionsDocument, options);
}
export type GetCustomerTemporaryInstructionsQueryHookResult = ReturnType<
  typeof useGetCustomerTemporaryInstructionsQuery
>;
export type GetCustomerTemporaryInstructionsLazyQueryHookResult = ReturnType<
  typeof useGetCustomerTemporaryInstructionsLazyQuery
>;
export type GetCustomerTemporaryInstructionsQueryResult = Apollo.QueryResult<
  GetCustomerTemporaryInstructionsQuery,
  GetCustomerTemporaryInstructionsQueryVariables
>;
export function refetchGetCustomerTemporaryInstructionsQuery(
  variables?: GetCustomerTemporaryInstructionsQueryVariables,
) {
  return { query: GetCustomerTemporaryInstructionsDocument, variables: variables };
}
export const UpdateCustomerTemporaryInstructionDocument = gql`
  mutation updateCustomerTemporaryInstruction(
    $input: UpdateCustomerTemporaryInstructionInput!
    $id: Int!
  ) {
    updateCustomerTemporaryInstruction(input: $input, id: $id) {
      id
    }
  }
`;
export type UpdateCustomerTemporaryInstructionMutationFn = Apollo.MutationFunction<
  UpdateCustomerTemporaryInstructionMutation,
  UpdateCustomerTemporaryInstructionMutationVariables
>;

/**
 * __useUpdateCustomerTemporaryInstructionMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerTemporaryInstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerTemporaryInstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerTemporaryInstructionMutation, { data, loading, error }] = useUpdateCustomerTemporaryInstructionMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateCustomerTemporaryInstructionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerTemporaryInstructionMutation,
    UpdateCustomerTemporaryInstructionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerTemporaryInstructionMutation,
    UpdateCustomerTemporaryInstructionMutationVariables
  >(UpdateCustomerTemporaryInstructionDocument, options);
}
export type UpdateCustomerTemporaryInstructionMutationHookResult = ReturnType<
  typeof useUpdateCustomerTemporaryInstructionMutation
>;
export type UpdateCustomerTemporaryInstructionMutationResult = Apollo.MutationResult<UpdateCustomerTemporaryInstructionMutation>;
export type UpdateCustomerTemporaryInstructionMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerTemporaryInstructionMutation,
  UpdateCustomerTemporaryInstructionMutationVariables
>;
export const GetInvoicesDocument = gql`
  query getInvoices($filter: InvoiceFilterInput, $limit: Int, $skip: Int, $sort: [SortInput!]) {
    invoices(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        amount
        date
        dueDate
        year
        month
        invoiceNr
        paid
        type
        attachment {
          fileName
          url
        }
      }
    }
  }
`;

/**
 * __useGetInvoicesQuery__
 *
 * To run a query within a React component, call `useGetInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvoicesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetInvoicesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetInvoicesQuery, GetInvoicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(GetInvoicesDocument, options);
}
export function useGetInvoicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetInvoicesQuery, GetInvoicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(
    GetInvoicesDocument,
    options,
  );
}
export type GetInvoicesQueryHookResult = ReturnType<typeof useGetInvoicesQuery>;
export type GetInvoicesLazyQueryHookResult = ReturnType<typeof useGetInvoicesLazyQuery>;
export type GetInvoicesQueryResult = Apollo.QueryResult<
  GetInvoicesQuery,
  GetInvoicesQueryVariables
>;
export function refetchGetInvoicesQuery(variables?: GetInvoicesQueryVariables) {
  return { query: GetInvoicesDocument, variables: variables };
}
export const PayInvoiceDocument = gql`
  mutation payInvoice($id: Int!) {
    payInvoice(id: $id) {
      redirectUrl
    }
  }
`;
export type PayInvoiceMutationFn = Apollo.MutationFunction<
  PayInvoiceMutation,
  PayInvoiceMutationVariables
>;

/**
 * __usePayInvoiceMutation__
 *
 * To run a mutation, you first call `usePayInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payInvoiceMutation, { data, loading, error }] = usePayInvoiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePayInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<PayInvoiceMutation, PayInvoiceMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PayInvoiceMutation, PayInvoiceMutationVariables>(
    PayInvoiceDocument,
    options,
  );
}
export type PayInvoiceMutationHookResult = ReturnType<typeof usePayInvoiceMutation>;
export type PayInvoiceMutationResult = Apollo.MutationResult<PayInvoiceMutation>;
export type PayInvoiceMutationOptions = Apollo.BaseMutationOptions<
  PayInvoiceMutation,
  PayInvoiceMutationVariables
>;
export const ActivateChannelDocument = gql`
  mutation activateChannel($id: ID!) {
    activateChannel(id: $id) {
      success
    }
  }
`;
export type ActivateChannelMutationFn = Apollo.MutationFunction<
  ActivateChannelMutation,
  ActivateChannelMutationVariables
>;

/**
 * __useActivateChannelMutation__
 *
 * To run a mutation, you first call `useActivateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateChannelMutation, { data, loading, error }] = useActivateChannelMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivateChannelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ActivateChannelMutation,
    ActivateChannelMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ActivateChannelMutation, ActivateChannelMutationVariables>(
    ActivateChannelDocument,
    options,
  );
}
export type ActivateChannelMutationHookResult = ReturnType<typeof useActivateChannelMutation>;
export type ActivateChannelMutationResult = Apollo.MutationResult<ActivateChannelMutation>;
export type ActivateChannelMutationOptions = Apollo.BaseMutationOptions<
  ActivateChannelMutation,
  ActivateChannelMutationVariables
>;
export const DeactivateChannelDocument = gql`
  mutation deactivateChannel($id: ID!) {
    deactivateChannel(id: $id) {
      success
    }
  }
`;
export type DeactivateChannelMutationFn = Apollo.MutationFunction<
  DeactivateChannelMutation,
  DeactivateChannelMutationVariables
>;

/**
 * __useDeactivateChannelMutation__
 *
 * To run a mutation, you first call `useDeactivateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateChannelMutation, { data, loading, error }] = useDeactivateChannelMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeactivateChannelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeactivateChannelMutation,
    DeactivateChannelMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeactivateChannelMutation, DeactivateChannelMutationVariables>(
    DeactivateChannelDocument,
    options,
  );
}
export type DeactivateChannelMutationHookResult = ReturnType<typeof useDeactivateChannelMutation>;
export type DeactivateChannelMutationResult = Apollo.MutationResult<DeactivateChannelMutation>;
export type DeactivateChannelMutationOptions = Apollo.BaseMutationOptions<
  DeactivateChannelMutation,
  DeactivateChannelMutationVariables
>;
export const GetPairedChannelsDocument = gql`
  query getPairedChannels(
    $filter: PairedChannelFilterInput
    $sort: [SortInput!]
    $skip: Int
    $limit: Int
  ) {
    pairedChannels(filter: $filter, sort: $sort, skip: $skip, limit: $limit) {
      count
      items {
        id
        type
        account
        active
        channelIdentifier
        redirect
        redirectDelay
      }
    }
  }
`;

/**
 * __useGetPairedChannelsQuery__
 *
 * To run a query within a React component, call `useGetPairedChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPairedChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPairedChannelsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPairedChannelsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPairedChannelsQuery, GetPairedChannelsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPairedChannelsQuery, GetPairedChannelsQueryVariables>(
    GetPairedChannelsDocument,
    options,
  );
}
export function useGetPairedChannelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPairedChannelsQuery,
    GetPairedChannelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPairedChannelsQuery, GetPairedChannelsQueryVariables>(
    GetPairedChannelsDocument,
    options,
  );
}
export type GetPairedChannelsQueryHookResult = ReturnType<typeof useGetPairedChannelsQuery>;
export type GetPairedChannelsLazyQueryHookResult = ReturnType<typeof useGetPairedChannelsLazyQuery>;
export type GetPairedChannelsQueryResult = Apollo.QueryResult<
  GetPairedChannelsQuery,
  GetPairedChannelsQueryVariables
>;
export function refetchGetPairedChannelsQuery(variables?: GetPairedChannelsQueryVariables) {
  return { query: GetPairedChannelsDocument, variables: variables };
}
export const PairChannelDocument = gql`
  mutation pairChannel($input: PairChannelInput!) {
    pairChannel(input: $input) {
      id
      type
      account
      active
    }
  }
`;
export type PairChannelMutationFn = Apollo.MutationFunction<
  PairChannelMutation,
  PairChannelMutationVariables
>;

/**
 * __usePairChannelMutation__
 *
 * To run a mutation, you first call `usePairChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePairChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pairChannelMutation, { data, loading, error }] = usePairChannelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePairChannelMutation(
  baseOptions?: Apollo.MutationHookOptions<PairChannelMutation, PairChannelMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PairChannelMutation, PairChannelMutationVariables>(
    PairChannelDocument,
    options,
  );
}
export type PairChannelMutationHookResult = ReturnType<typeof usePairChannelMutation>;
export type PairChannelMutationResult = Apollo.MutationResult<PairChannelMutation>;
export type PairChannelMutationOptions = Apollo.BaseMutationOptions<
  PairChannelMutation,
  PairChannelMutationVariables
>;
export const UnpairChannelDocument = gql`
  mutation unpairChannel($id: ID!) {
    unpairChannel(id: $id) {
      success
    }
  }
`;
export type UnpairChannelMutationFn = Apollo.MutationFunction<
  UnpairChannelMutation,
  UnpairChannelMutationVariables
>;

/**
 * __useUnpairChannelMutation__
 *
 * To run a mutation, you first call `useUnpairChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnpairChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unpairChannelMutation, { data, loading, error }] = useUnpairChannelMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnpairChannelMutation(
  baseOptions?: Apollo.MutationHookOptions<UnpairChannelMutation, UnpairChannelMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnpairChannelMutation, UnpairChannelMutationVariables>(
    UnpairChannelDocument,
    options,
  );
}
export type UnpairChannelMutationHookResult = ReturnType<typeof useUnpairChannelMutation>;
export type UnpairChannelMutationResult = Apollo.MutationResult<UnpairChannelMutation>;
export type UnpairChannelMutationOptions = Apollo.BaseMutationOptions<
  UnpairChannelMutation,
  UnpairChannelMutationVariables
>;
export const UpdateChannelDocument = gql`
  mutation updateChannel($id: ID!, $input: PairedChannelUpdateInput!) {
    updateChannel(id: $id, input: $input) {
      id
    }
  }
`;
export type UpdateChannelMutationFn = Apollo.MutationFunction<
  UpdateChannelMutation,
  UpdateChannelMutationVariables
>;

/**
 * __useUpdateChannelMutation__
 *
 * To run a mutation, you first call `useUpdateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChannelMutation, { data, loading, error }] = useUpdateChannelMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChannelMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateChannelMutation, UpdateChannelMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateChannelMutation, UpdateChannelMutationVariables>(
    UpdateChannelDocument,
    options,
  );
}
export type UpdateChannelMutationHookResult = ReturnType<typeof useUpdateChannelMutation>;
export type UpdateChannelMutationResult = Apollo.MutationResult<UpdateChannelMutation>;
export type UpdateChannelMutationOptions = Apollo.BaseMutationOptions<
  UpdateChannelMutation,
  UpdateChannelMutationVariables
>;
export const CallReportingDocument = gql`
  query callReporting($filter: FilterInput) {
    callReporting(filter: $filter) {
      waitingTimeStatistics {
        ...baseCallReporting
        averageWaitingTime
      }
      durationTimeStatistics {
        ...baseCallReporting
        averageDuration
      }
      missedCallStatistics {
        ...baseCallReporting
        canBeDisplayed
        averageWaitingTime
      }
      nrOfCallsPerHourStatistics {
        ...baseCallReporting
      }
    }
  }
  ${BaseCallReportingFragmentDoc}
`;

/**
 * __useCallReportingQuery__
 *
 * To run a query within a React component, call `useCallReportingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCallReportingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCallReportingQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCallReportingQuery(
  baseOptions?: Apollo.QueryHookOptions<CallReportingQuery, CallReportingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CallReportingQuery, CallReportingQueryVariables>(
    CallReportingDocument,
    options,
  );
}
export function useCallReportingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CallReportingQuery, CallReportingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CallReportingQuery, CallReportingQueryVariables>(
    CallReportingDocument,
    options,
  );
}
export type CallReportingQueryHookResult = ReturnType<typeof useCallReportingQuery>;
export type CallReportingLazyQueryHookResult = ReturnType<typeof useCallReportingLazyQuery>;
export type CallReportingQueryResult = Apollo.QueryResult<
  CallReportingQuery,
  CallReportingQueryVariables
>;
export function refetchCallReportingQuery(variables?: CallReportingQueryVariables) {
  return { query: CallReportingDocument, variables: variables };
}
export const DownloadIncomingCallReportingDocument = gql`
  query downloadIncomingCallReporting(
    $filter: FilterInput
    $sort: [SortInput!]
    $phoneNumber: String
    $lang: LangEnum
  ) {
    downloadIncomingCallReporting(
      filter: $filter
      sort: $sort
      lang: $lang
      phoneNumber: $phoneNumber
    ) {
      content
      contentType
      fileName
    }
  }
`;

/**
 * __useDownloadIncomingCallReportingQuery__
 *
 * To run a query within a React component, call `useDownloadIncomingCallReportingQuery` and pass it any options that fit your needs.
 * When your component renders, `useDownloadIncomingCallReportingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDownloadIncomingCallReportingQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      phoneNumber: // value for 'phoneNumber'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useDownloadIncomingCallReportingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DownloadIncomingCallReportingQuery,
    DownloadIncomingCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DownloadIncomingCallReportingQuery,
    DownloadIncomingCallReportingQueryVariables
  >(DownloadIncomingCallReportingDocument, options);
}
export function useDownloadIncomingCallReportingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DownloadIncomingCallReportingQuery,
    DownloadIncomingCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DownloadIncomingCallReportingQuery,
    DownloadIncomingCallReportingQueryVariables
  >(DownloadIncomingCallReportingDocument, options);
}
export type DownloadIncomingCallReportingQueryHookResult = ReturnType<
  typeof useDownloadIncomingCallReportingQuery
>;
export type DownloadIncomingCallReportingLazyQueryHookResult = ReturnType<
  typeof useDownloadIncomingCallReportingLazyQuery
>;
export type DownloadIncomingCallReportingQueryResult = Apollo.QueryResult<
  DownloadIncomingCallReportingQuery,
  DownloadIncomingCallReportingQueryVariables
>;
export function refetchDownloadIncomingCallReportingQuery(
  variables?: DownloadIncomingCallReportingQueryVariables,
) {
  return { query: DownloadIncomingCallReportingDocument, variables: variables };
}
export const DownloadOutgoingCallReportingDocument = gql`
  query downloadOutgoingCallReporting(
    $filter: FilterInput
    $sort: [SortInput!]
    $phoneNumber: String
    $lang: LangEnum
  ) {
    downloadOutgoingCallReporting(
      filter: $filter
      sort: $sort
      lang: $lang
      phoneNumber: $phoneNumber
    ) {
      content
      contentType
      fileName
    }
  }
`;

/**
 * __useDownloadOutgoingCallReportingQuery__
 *
 * To run a query within a React component, call `useDownloadOutgoingCallReportingQuery` and pass it any options that fit your needs.
 * When your component renders, `useDownloadOutgoingCallReportingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDownloadOutgoingCallReportingQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      phoneNumber: // value for 'phoneNumber'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useDownloadOutgoingCallReportingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DownloadOutgoingCallReportingQuery,
    DownloadOutgoingCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DownloadOutgoingCallReportingQuery,
    DownloadOutgoingCallReportingQueryVariables
  >(DownloadOutgoingCallReportingDocument, options);
}
export function useDownloadOutgoingCallReportingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DownloadOutgoingCallReportingQuery,
    DownloadOutgoingCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DownloadOutgoingCallReportingQuery,
    DownloadOutgoingCallReportingQueryVariables
  >(DownloadOutgoingCallReportingDocument, options);
}
export type DownloadOutgoingCallReportingQueryHookResult = ReturnType<
  typeof useDownloadOutgoingCallReportingQuery
>;
export type DownloadOutgoingCallReportingLazyQueryHookResult = ReturnType<
  typeof useDownloadOutgoingCallReportingLazyQuery
>;
export type DownloadOutgoingCallReportingQueryResult = Apollo.QueryResult<
  DownloadOutgoingCallReportingQuery,
  DownloadOutgoingCallReportingQueryVariables
>;
export function refetchDownloadOutgoingCallReportingQuery(
  variables?: DownloadOutgoingCallReportingQueryVariables,
) {
  return { query: DownloadOutgoingCallReportingDocument, variables: variables };
}
export const DownloadVideoCallReportingDocument = gql`
  query downloadVideoCallReporting($filter: FilterInput, $sort: [SortInput!], $lang: LangEnum) {
    downloadVideoCallReporting(filter: $filter, sort: $sort, lang: $lang) {
      content
      contentType
      fileName
    }
  }
`;

/**
 * __useDownloadVideoCallReportingQuery__
 *
 * To run a query within a React component, call `useDownloadVideoCallReportingQuery` and pass it any options that fit your needs.
 * When your component renders, `useDownloadVideoCallReportingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDownloadVideoCallReportingQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useDownloadVideoCallReportingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DownloadVideoCallReportingQuery,
    DownloadVideoCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DownloadVideoCallReportingQuery, DownloadVideoCallReportingQueryVariables>(
    DownloadVideoCallReportingDocument,
    options,
  );
}
export function useDownloadVideoCallReportingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DownloadVideoCallReportingQuery,
    DownloadVideoCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DownloadVideoCallReportingQuery,
    DownloadVideoCallReportingQueryVariables
  >(DownloadVideoCallReportingDocument, options);
}
export type DownloadVideoCallReportingQueryHookResult = ReturnType<
  typeof useDownloadVideoCallReportingQuery
>;
export type DownloadVideoCallReportingLazyQueryHookResult = ReturnType<
  typeof useDownloadVideoCallReportingLazyQuery
>;
export type DownloadVideoCallReportingQueryResult = Apollo.QueryResult<
  DownloadVideoCallReportingQuery,
  DownloadVideoCallReportingQueryVariables
>;
export function refetchDownloadVideoCallReportingQuery(
  variables?: DownloadVideoCallReportingQueryVariables,
) {
  return { query: DownloadVideoCallReportingDocument, variables: variables };
}
export const IncomingCallsDocument = gql`
  query incomingCalls($filter: CallFilterInput, $limit: Int, $skip: Int, $sort: [SortInput!]) {
    incomingCalls(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      ...callDetail
    }
  }
  ${CallDetailFragmentDoc}
`;

/**
 * __useIncomingCallsQuery__
 *
 * To run a query within a React component, call `useIncomingCallsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncomingCallsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncomingCallsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useIncomingCallsQuery(
  baseOptions?: Apollo.QueryHookOptions<IncomingCallsQuery, IncomingCallsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IncomingCallsQuery, IncomingCallsQueryVariables>(
    IncomingCallsDocument,
    options,
  );
}
export function useIncomingCallsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IncomingCallsQuery, IncomingCallsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IncomingCallsQuery, IncomingCallsQueryVariables>(
    IncomingCallsDocument,
    options,
  );
}
export type IncomingCallsQueryHookResult = ReturnType<typeof useIncomingCallsQuery>;
export type IncomingCallsLazyQueryHookResult = ReturnType<typeof useIncomingCallsLazyQuery>;
export type IncomingCallsQueryResult = Apollo.QueryResult<
  IncomingCallsQuery,
  IncomingCallsQueryVariables
>;
export function refetchIncomingCallsQuery(variables?: IncomingCallsQueryVariables) {
  return { query: IncomingCallsDocument, variables: variables };
}
export const OutgoingCallsDocument = gql`
  query outgoingCalls(
    $filter: CallFilterInput
    $limit: Int
    $ignoreLimitOffset: Boolean
    $skip: Int
    $sort: [SortInput!]
  ) {
    outgoingCalls(
      filter: $filter
      limit: $limit
      skip: $skip
      sort: $sort
      ignoreLimitOffset: $ignoreLimitOffset
    ) {
      ...callDetail
    }
  }
  ${CallDetailFragmentDoc}
`;

/**
 * __useOutgoingCallsQuery__
 *
 * To run a query within a React component, call `useOutgoingCallsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutgoingCallsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutgoingCallsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      ignoreLimitOffset: // value for 'ignoreLimitOffset'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useOutgoingCallsQuery(
  baseOptions?: Apollo.QueryHookOptions<OutgoingCallsQuery, OutgoingCallsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OutgoingCallsQuery, OutgoingCallsQueryVariables>(
    OutgoingCallsDocument,
    options,
  );
}
export function useOutgoingCallsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OutgoingCallsQuery, OutgoingCallsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OutgoingCallsQuery, OutgoingCallsQueryVariables>(
    OutgoingCallsDocument,
    options,
  );
}
export type OutgoingCallsQueryHookResult = ReturnType<typeof useOutgoingCallsQuery>;
export type OutgoingCallsLazyQueryHookResult = ReturnType<typeof useOutgoingCallsLazyQuery>;
export type OutgoingCallsQueryResult = Apollo.QueryResult<
  OutgoingCallsQuery,
  OutgoingCallsQueryVariables
>;
export function refetchOutgoingCallsQuery(variables?: OutgoingCallsQueryVariables) {
  return { query: OutgoingCallsDocument, variables: variables };
}
export const VideoCallReportingDocument = gql`
  query videoCallReporting($filter: FilterInput) {
    videoCallReporting(filter: $filter) {
      totalDuration
    }
  }
`;

/**
 * __useVideoCallReportingQuery__
 *
 * To run a query within a React component, call `useVideoCallReportingQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoCallReportingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoCallReportingQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useVideoCallReportingQuery(
  baseOptions?: Apollo.QueryHookOptions<VideoCallReportingQuery, VideoCallReportingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VideoCallReportingQuery, VideoCallReportingQueryVariables>(
    VideoCallReportingDocument,
    options,
  );
}
export function useVideoCallReportingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VideoCallReportingQuery,
    VideoCallReportingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VideoCallReportingQuery, VideoCallReportingQueryVariables>(
    VideoCallReportingDocument,
    options,
  );
}
export type VideoCallReportingQueryHookResult = ReturnType<typeof useVideoCallReportingQuery>;
export type VideoCallReportingLazyQueryHookResult = ReturnType<
  typeof useVideoCallReportingLazyQuery
>;
export type VideoCallReportingQueryResult = Apollo.QueryResult<
  VideoCallReportingQuery,
  VideoCallReportingQueryVariables
>;
export function refetchVideoCallReportingQuery(variables?: VideoCallReportingQueryVariables) {
  return { query: VideoCallReportingDocument, variables: variables };
}
export const SearchDocument = gql`
  query search(
    $filter: SearchFilterInput
    $search: String!
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
  ) {
    search(filter: $filter, search: $search, limit: $limit, skip: $skip, sort: $sort) {
      count
      countByType {
        count
        type
      }
      items {
        type
        ... on SearchMessage {
          message {
            id
            channelType
            content
            conversationId
            messageTime
            sender {
              id
              firstName
              lastName
            }
          }
        }
        ... on SearchAgentMessage {
          agentMessage {
            id
            channelType
            content
            conversationId
            messageTime
            sender {
              id
              firstName
              lastName
            }
          }
        }
        ... on SearchAttachment {
          attachment {
            fileName
            url
          }
        }
        ... on SearchCustomerCrmContact {
          customerCrmContact {
            id
            title
            firstName
            lastName
            sex
            functionName
            addresses {
              id
              city
              country
              postalCode
              address
              description
            }
            communications {
              type {
                id
                name
                category
              }
              sequence
              value
              description
              forwardStatus
              forwardCondition
              passThroughStatus
              passThroughCondition
            }
            groups {
              groupId
              group {
                id
                name
                subGroups {
                  id
                  name
                }
              }
              subGroupId
              subGroup {
                id
                name
              }
            }
          }
        }
        ... on SearchCustomerFixedInstruction {
          customerFixedInstruction {
            id
            updatedAt
            name
            content
          }
        }
        ... on SearchCustomerTemporaryInstruction {
          customerTemporaryInstruction {
            id
            updatedAt
            name
            content
            validFrom
            validUntil
            active
          }
        }
      }
    }
  }
`;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      search: // value for 'search'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSearchQuery(
  baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
}
export function useSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
}
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export function refetchSearchQuery(variables?: SearchQueryVariables) {
  return { query: SearchDocument, variables: variables };
}
export const CreateStandbyDocument = gql`
  mutation createStandby($input: CreateStandbyInput!) {
    createStandby(input: $input) {
      id
      from {
        hours
        minutes
      }
      to {
        hours
        minutes
      }
      notifyChannels
      crmContacts {
        id
        firstName
        lastName
      }
    }
  }
`;
export type CreateStandbyMutationFn = Apollo.MutationFunction<
  CreateStandbyMutation,
  CreateStandbyMutationVariables
>;

/**
 * __useCreateStandbyMutation__
 *
 * To run a mutation, you first call `useCreateStandbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStandbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStandbyMutation, { data, loading, error }] = useCreateStandbyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStandbyMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateStandbyMutation, CreateStandbyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateStandbyMutation, CreateStandbyMutationVariables>(
    CreateStandbyDocument,
    options,
  );
}
export type CreateStandbyMutationHookResult = ReturnType<typeof useCreateStandbyMutation>;
export type CreateStandbyMutationResult = Apollo.MutationResult<CreateStandbyMutation>;
export type CreateStandbyMutationOptions = Apollo.BaseMutationOptions<
  CreateStandbyMutation,
  CreateStandbyMutationVariables
>;
export const DeleteStandbyDocument = gql`
  mutation deleteStandby($id: ID!) {
    deleteStandby(id: $id) {
      success
    }
  }
`;
export type DeleteStandbyMutationFn = Apollo.MutationFunction<
  DeleteStandbyMutation,
  DeleteStandbyMutationVariables
>;

/**
 * __useDeleteStandbyMutation__
 *
 * To run a mutation, you first call `useDeleteStandbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStandbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStandbyMutation, { data, loading, error }] = useDeleteStandbyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStandbyMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteStandbyMutation, DeleteStandbyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteStandbyMutation, DeleteStandbyMutationVariables>(
    DeleteStandbyDocument,
    options,
  );
}
export type DeleteStandbyMutationHookResult = ReturnType<typeof useDeleteStandbyMutation>;
export type DeleteStandbyMutationResult = Apollo.MutationResult<DeleteStandbyMutation>;
export type DeleteStandbyMutationOptions = Apollo.BaseMutationOptions<
  DeleteStandbyMutation,
  DeleteStandbyMutationVariables
>;
export const GetStandbyDocument = gql`
  query getStandby($filter: StandbyFilter, $limit: Int, $skip: Int, $sort: [SortInput!]) {
    standby(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        from {
          hours
          minutes
        }
        to {
          hours
          minutes
        }
        notifyChannels
        crmContacts {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

/**
 * __useGetStandbyQuery__
 *
 * To run a query within a React component, call `useGetStandbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStandbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStandbyQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetStandbyQuery(
  baseOptions?: Apollo.QueryHookOptions<GetStandbyQuery, GetStandbyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStandbyQuery, GetStandbyQueryVariables>(GetStandbyDocument, options);
}
export function useGetStandbyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetStandbyQuery, GetStandbyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStandbyQuery, GetStandbyQueryVariables>(
    GetStandbyDocument,
    options,
  );
}
export type GetStandbyQueryHookResult = ReturnType<typeof useGetStandbyQuery>;
export type GetStandbyLazyQueryHookResult = ReturnType<typeof useGetStandbyLazyQuery>;
export type GetStandbyQueryResult = Apollo.QueryResult<GetStandbyQuery, GetStandbyQueryVariables>;
export function refetchGetStandbyQuery(variables?: GetStandbyQueryVariables) {
  return { query: GetStandbyDocument, variables: variables };
}
export const UpdateStandbyDocument = gql`
  mutation updateStandby($id: ID!, $input: UpdateStandbyInput!) {
    updateStandby(id: $id, input: $input) {
      id
      from {
        hours
        minutes
      }
      to {
        hours
        minutes
      }
      notifyChannels
      crmContacts {
        id
        firstName
        lastName
      }
    }
  }
`;
export type UpdateStandbyMutationFn = Apollo.MutationFunction<
  UpdateStandbyMutation,
  UpdateStandbyMutationVariables
>;

/**
 * __useUpdateStandbyMutation__
 *
 * To run a mutation, you first call `useUpdateStandbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStandbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStandbyMutation, { data, loading, error }] = useUpdateStandbyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStandbyMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateStandbyMutation, UpdateStandbyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateStandbyMutation, UpdateStandbyMutationVariables>(
    UpdateStandbyDocument,
    options,
  );
}
export type UpdateStandbyMutationHookResult = ReturnType<typeof useUpdateStandbyMutation>;
export type UpdateStandbyMutationResult = Apollo.MutationResult<UpdateStandbyMutation>;
export type UpdateStandbyMutationOptions = Apollo.BaseMutationOptions<
  UpdateStandbyMutation,
  UpdateStandbyMutationVariables
>;
export const GetThemeDocument = gql`
  query getTheme {
    theme {
      colors {
        error
        info
        primary
        primaryDarkShade
        primaryLightShade
        secondary
        secondaryDarkShade
        secondaryLightShade
        success
        warning
      }
      images {
        type
        url
      }
    }
  }
`;

/**
 * __useGetThemeQuery__
 *
 * To run a query within a React component, call `useGetThemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThemeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetThemeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetThemeQuery, GetThemeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetThemeQuery, GetThemeQueryVariables>(GetThemeDocument, options);
}
export function useGetThemeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetThemeQuery, GetThemeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetThemeQuery, GetThemeQueryVariables>(GetThemeDocument, options);
}
export type GetThemeQueryHookResult = ReturnType<typeof useGetThemeQuery>;
export type GetThemeLazyQueryHookResult = ReturnType<typeof useGetThemeLazyQuery>;
export type GetThemeQueryResult = Apollo.QueryResult<GetThemeQuery, GetThemeQueryVariables>;
export function refetchGetThemeQuery(variables?: GetThemeQueryVariables) {
  return { query: GetThemeDocument, variables: variables };
}
export const CreateUserDocument = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      success
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      customers
      emailAddress
      role
      phoneNumber
      locale
    }
  }
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export function refetchGetCurrentUserQuery(variables?: GetCurrentUserQueryVariables) {
  return { query: GetCurrentUserDocument, variables: variables };
}
export const GetCountriesDocument = gql`
  query getCountries($filter: CountryFilter, $limit: Int, $skip: Int, $sort: [SortInput!]) {
    countries(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        iso
        name
      }
    }
  }
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>;
export function refetchGetCountriesQuery(variables?: GetCountriesQueryVariables) {
  return { query: GetCountriesDocument, variables: variables };
}
export const GetCustomerDocument = gql`
  query getCustomer($filter: CustomerFilterInput) {
    customer(filter: $filter) {
      id
      name
      platformId
      parentId
      groupId
      appointmentContractYn
    }
  }
`;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCustomerQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
}
export function useGetCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(
    GetCustomerDocument,
    options,
  );
}
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<
  GetCustomerQuery,
  GetCustomerQueryVariables
>;
export function refetchGetCustomerQuery(variables?: GetCustomerQueryVariables) {
  return { query: GetCustomerDocument, variables: variables };
}
export const GetCustomerChatDataDocument = gql`
  query getCustomerChatData {
    customerChatData {
      guid
      username
      extension
      mainFicheId
      customerId
      userEmail
      serviceGroup
    }
  }
`;

/**
 * __useGetCustomerChatDataQuery__
 *
 * To run a query within a React component, call `useGetCustomerChatDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerChatDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerChatDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomerChatDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerChatDataQuery,
    GetCustomerChatDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerChatDataQuery, GetCustomerChatDataQueryVariables>(
    GetCustomerChatDataDocument,
    options,
  );
}
export function useGetCustomerChatDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerChatDataQuery,
    GetCustomerChatDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomerChatDataQuery, GetCustomerChatDataQueryVariables>(
    GetCustomerChatDataDocument,
    options,
  );
}
export type GetCustomerChatDataQueryHookResult = ReturnType<typeof useGetCustomerChatDataQuery>;
export type GetCustomerChatDataLazyQueryHookResult = ReturnType<
  typeof useGetCustomerChatDataLazyQuery
>;
export type GetCustomerChatDataQueryResult = Apollo.QueryResult<
  GetCustomerChatDataQuery,
  GetCustomerChatDataQueryVariables
>;
export function refetchGetCustomerChatDataQuery(variables?: GetCustomerChatDataQueryVariables) {
  return { query: GetCustomerChatDataDocument, variables: variables };
}
export const GetCustomersDocument = gql`
  query getCustomers($limit: Int, $skip: Int, $sort: [SortInput!], $filter: CustomerFilterInput) {
    customers(limit: $limit, skip: $skip, sort: $sort, filter: $filter) {
      count
      items {
        id
        platformId
        parentId
        name
        groupId
        appointmentContractYn
      }
    }
  }
`;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCustomersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options,
  );
}
export function useGetCustomersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options,
  );
}
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<
  GetCustomersQuery,
  GetCustomersQueryVariables
>;
export function refetchGetCustomersQuery(variables?: GetCustomersQueryVariables) {
  return { query: GetCustomersDocument, variables: variables };
}
export const GetCustomersWithInfoDocument = gql`
  query getCustomersWithInfo(
    $limit: Int
    $skip: Int
    $sort: [SortInput!]
    $filter: CustomerFilterInput
  ) {
    customers(limit: $limit, skip: $skip, sort: $sort, filter: $filter) {
      count
      items {
        id
        platformId
        parentId
        name
        info {
          welcomeMessage
          contactInformationList {
            type
            address {
              city
              country
              postalCode
              street
              streetNumber
              box
            }
            emailAddress
            faxNumber
            mobilePhoneNumber
            phoneNumber1
            phoneNumber2
            website
          }
        }
      }
    }
  }
`;

/**
 * __useGetCustomersWithInfoQuery__
 *
 * To run a query within a React component, call `useGetCustomersWithInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersWithInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersWithInfoQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCustomersWithInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomersWithInfoQuery,
    GetCustomersWithInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomersWithInfoQuery, GetCustomersWithInfoQueryVariables>(
    GetCustomersWithInfoDocument,
    options,
  );
}
export function useGetCustomersWithInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomersWithInfoQuery,
    GetCustomersWithInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomersWithInfoQuery, GetCustomersWithInfoQueryVariables>(
    GetCustomersWithInfoDocument,
    options,
  );
}
export type GetCustomersWithInfoQueryHookResult = ReturnType<typeof useGetCustomersWithInfoQuery>;
export type GetCustomersWithInfoLazyQueryHookResult = ReturnType<
  typeof useGetCustomersWithInfoLazyQuery
>;
export type GetCustomersWithInfoQueryResult = Apollo.QueryResult<
  GetCustomersWithInfoQuery,
  GetCustomersWithInfoQueryVariables
>;
export function refetchGetCustomersWithInfoQuery(variables?: GetCustomersWithInfoQueryVariables) {
  return { query: GetCustomersWithInfoDocument, variables: variables };
}
export const GetUserDocument = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      customers
      emailAddress
      role
      phoneNumber
      locale
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables?: GetUserQueryVariables) {
  return { query: GetUserDocument, variables: variables };
}
export const GetUserStatusDocument = gql`
  query getUserStatus {
    userStatus {
      active
    }
  }
`;

/**
 * __useGetUserStatusQuery__
 *
 * To run a query within a React component, call `useGetUserStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserStatusQuery, GetUserStatusQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserStatusQuery, GetUserStatusQueryVariables>(
    GetUserStatusDocument,
    options,
  );
}
export function useGetUserStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserStatusQuery, GetUserStatusQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserStatusQuery, GetUserStatusQueryVariables>(
    GetUserStatusDocument,
    options,
  );
}
export type GetUserStatusQueryHookResult = ReturnType<typeof useGetUserStatusQuery>;
export type GetUserStatusLazyQueryHookResult = ReturnType<typeof useGetUserStatusLazyQuery>;
export type GetUserStatusQueryResult = Apollo.QueryResult<
  GetUserStatusQuery,
  GetUserStatusQueryVariables
>;
export function refetchGetUserStatusQuery(variables?: GetUserStatusQueryVariables) {
  return { query: GetUserStatusDocument, variables: variables };
}
export const GetUsersDocument = gql`
  query getUsers($filter: UsersFilterInput, $sort: [SortInput!], $skip: Int, $limit: Int) {
    users(filter: $filter, sort: $sort, skip: $skip, limit: $limit) {
      count
      items {
        id
        emailAddress
        firstName
        lastName
        phoneNumber
      }
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
  return { query: GetUsersDocument, variables: variables };
}
export const LogoutDocument = gql`
  query logout {
    logout
  }
`;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(
  baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export function useLogoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export function refetchLogoutQuery(variables?: LogoutQueryVariables) {
  return { query: LogoutDocument, variables: variables };
}
export const UpdateCurrentUserLocaleDocument = gql`
  mutation updateCurrentUserLocale($locale: String!) {
    updateCurrentUserLocale(locale: $locale)
  }
`;
export type UpdateCurrentUserLocaleMutationFn = Apollo.MutationFunction<
  UpdateCurrentUserLocaleMutation,
  UpdateCurrentUserLocaleMutationVariables
>;

/**
 * __useUpdateCurrentUserLocaleMutation__
 *
 * To run a mutation, you first call `useUpdateCurrentUserLocaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrentUserLocaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurrentUserLocaleMutation, { data, loading, error }] = useUpdateCurrentUserLocaleMutation({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useUpdateCurrentUserLocaleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCurrentUserLocaleMutation,
    UpdateCurrentUserLocaleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCurrentUserLocaleMutation,
    UpdateCurrentUserLocaleMutationVariables
  >(UpdateCurrentUserLocaleDocument, options);
}
export type UpdateCurrentUserLocaleMutationHookResult = ReturnType<
  typeof useUpdateCurrentUserLocaleMutation
>;
export type UpdateCurrentUserLocaleMutationResult = Apollo.MutationResult<UpdateCurrentUserLocaleMutation>;
export type UpdateCurrentUserLocaleMutationOptions = Apollo.BaseMutationOptions<
  UpdateCurrentUserLocaleMutation,
  UpdateCurrentUserLocaleMutationVariables
>;
export const UpdateCustomerDocument = gql`
  mutation updateCustomer($id: ID!, $input: UpdateCustomerInput!) {
    updateCustomer(id: $id, input: $input) {
      id
      name
      info {
        contactInformationList {
          type
          address {
            city
            country
            postalCode
            street
            streetNumber
            box
          }
          emailAddress
          faxNumber
          mobilePhoneNumber
          phoneNumber1
          phoneNumber2
          website
        }
      }
    }
  }
`;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<
  UpdateCustomerMutation,
  UpdateCustomerMutationVariables
>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(
    UpdateCustomerDocument,
    options,
  );
}
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerMutation,
  UpdateCustomerMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const UpdateUserStatusDocument = gql`
  mutation updateUserStatus($input: UpdateUserStatusInput!) {
    updateUserStatus(input: $input) {
      active
    }
  }
`;
export type UpdateUserStatusMutationFn = Apollo.MutationFunction<
  UpdateUserStatusMutation,
  UpdateUserStatusMutationVariables
>;

/**
 * __useUpdateUserStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserStatusMutation, { data, loading, error }] = useUpdateUserStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserStatusMutation,
    UpdateUserStatusMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>(
    UpdateUserStatusDocument,
    options,
  );
}
export type UpdateUserStatusMutationHookResult = ReturnType<typeof useUpdateUserStatusMutation>;
export type UpdateUserStatusMutationResult = Apollo.MutationResult<UpdateUserStatusMutation>;
export type UpdateUserStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserStatusMutation,
  UpdateUserStatusMutationVariables
>;
export const UserStatusUpdatedDocument = gql`
  subscription userStatusUpdated {
    userStatusUpdated {
      active
    }
  }
`;

/**
 * __useUserStatusUpdatedSubscription__
 *
 * To run a query within a React component, call `useUserStatusUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserStatusUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStatusUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUserStatusUpdatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UserStatusUpdatedSubscription,
    UserStatusUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    UserStatusUpdatedSubscription,
    UserStatusUpdatedSubscriptionVariables
  >(UserStatusUpdatedDocument, options);
}
export type UserStatusUpdatedSubscriptionHookResult = ReturnType<
  typeof useUserStatusUpdatedSubscription
>;
export type UserStatusUpdatedSubscriptionResult = Apollo.SubscriptionResult<UserStatusUpdatedSubscription>;
export const AnswerVideoCallDocument = gql`
  mutation answerVideoCall($callId: ID!) {
    answerVideoCall(callId: $callId) {
      callId
      customerName
      location {
        id
        address {
          city
          country
          postalCode
          street
          streetNumber
        }
        clientSideRotation
        clientSideRotationInputStream
        agentSideRotation
        customerId
        description
        lat
        lng
        title
      }
      token
    }
  }
`;
export type AnswerVideoCallMutationFn = Apollo.MutationFunction<
  AnswerVideoCallMutation,
  AnswerVideoCallMutationVariables
>;

/**
 * __useAnswerVideoCallMutation__
 *
 * To run a mutation, you first call `useAnswerVideoCallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnswerVideoCallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [answerVideoCallMutation, { data, loading, error }] = useAnswerVideoCallMutation({
 *   variables: {
 *      callId: // value for 'callId'
 *   },
 * });
 */
export function useAnswerVideoCallMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AnswerVideoCallMutation,
    AnswerVideoCallMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AnswerVideoCallMutation, AnswerVideoCallMutationVariables>(
    AnswerVideoCallDocument,
    options,
  );
}
export type AnswerVideoCallMutationHookResult = ReturnType<typeof useAnswerVideoCallMutation>;
export type AnswerVideoCallMutationResult = Apollo.MutationResult<AnswerVideoCallMutation>;
export type AnswerVideoCallMutationOptions = Apollo.BaseMutationOptions<
  AnswerVideoCallMutation,
  AnswerVideoCallMutationVariables
>;
export const CallNotificationDocument = gql`
  subscription callNotification {
    callNotification {
      callId
      customerId
      removeCall
    }
  }
`;

/**
 * __useCallNotificationSubscription__
 *
 * To run a query within a React component, call `useCallNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCallNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCallNotificationSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCallNotificationSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    CallNotificationSubscription,
    CallNotificationSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    CallNotificationSubscription,
    CallNotificationSubscriptionVariables
  >(CallNotificationDocument, options);
}
export type CallNotificationSubscriptionHookResult = ReturnType<
  typeof useCallNotificationSubscription
>;
export type CallNotificationSubscriptionResult = Apollo.SubscriptionResult<CallNotificationSubscription>;
export const CreateVideoCallSettingsDocument = gql`
  mutation createVideoCallSettings($input: VideoCallSettingsInput!) {
    createVideoCallSettings(input: $input) {
      ...videoCallSettingsFragment
    }
  }
  ${VideoCallSettingsFragmentFragmentDoc}
`;
export type CreateVideoCallSettingsMutationFn = Apollo.MutationFunction<
  CreateVideoCallSettingsMutation,
  CreateVideoCallSettingsMutationVariables
>;

/**
 * __useCreateVideoCallSettingsMutation__
 *
 * To run a mutation, you first call `useCreateVideoCallSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoCallSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoCallSettingsMutation, { data, loading, error }] = useCreateVideoCallSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVideoCallSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVideoCallSettingsMutation,
    CreateVideoCallSettingsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVideoCallSettingsMutation,
    CreateVideoCallSettingsMutationVariables
  >(CreateVideoCallSettingsDocument, options);
}
export type CreateVideoCallSettingsMutationHookResult = ReturnType<
  typeof useCreateVideoCallSettingsMutation
>;
export type CreateVideoCallSettingsMutationResult = Apollo.MutationResult<CreateVideoCallSettingsMutation>;
export type CreateVideoCallSettingsMutationOptions = Apollo.BaseMutationOptions<
  CreateVideoCallSettingsMutation,
  CreateVideoCallSettingsMutationVariables
>;
export const EndVideoCallDocument = gql`
  mutation endVideoCall($callId: ID!) {
    endVideoCall(callId: $callId) {
      success
    }
  }
`;
export type EndVideoCallMutationFn = Apollo.MutationFunction<
  EndVideoCallMutation,
  EndVideoCallMutationVariables
>;

/**
 * __useEndVideoCallMutation__
 *
 * To run a mutation, you first call `useEndVideoCallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndVideoCallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endVideoCallMutation, { data, loading, error }] = useEndVideoCallMutation({
 *   variables: {
 *      callId: // value for 'callId'
 *   },
 * });
 */
export function useEndVideoCallMutation(
  baseOptions?: Apollo.MutationHookOptions<EndVideoCallMutation, EndVideoCallMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EndVideoCallMutation, EndVideoCallMutationVariables>(
    EndVideoCallDocument,
    options,
  );
}
export type EndVideoCallMutationHookResult = ReturnType<typeof useEndVideoCallMutation>;
export type EndVideoCallMutationResult = Apollo.MutationResult<EndVideoCallMutation>;
export type EndVideoCallMutationOptions = Apollo.BaseMutationOptions<
  EndVideoCallMutation,
  EndVideoCallMutationVariables
>;
export const GetDefaultLocaleDocument = gql`
  query getDefaultLocale {
    defaultLocale {
      type
      content {
        language
        value
      }
    }
  }
`;

/**
 * __useGetDefaultLocaleQuery__
 *
 * To run a query within a React component, call `useGetDefaultLocaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDefaultLocaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDefaultLocaleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDefaultLocaleQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDefaultLocaleQuery, GetDefaultLocaleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDefaultLocaleQuery, GetDefaultLocaleQueryVariables>(
    GetDefaultLocaleDocument,
    options,
  );
}
export function useGetDefaultLocaleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDefaultLocaleQuery, GetDefaultLocaleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDefaultLocaleQuery, GetDefaultLocaleQueryVariables>(
    GetDefaultLocaleDocument,
    options,
  );
}
export type GetDefaultLocaleQueryHookResult = ReturnType<typeof useGetDefaultLocaleQuery>;
export type GetDefaultLocaleLazyQueryHookResult = ReturnType<typeof useGetDefaultLocaleLazyQuery>;
export type GetDefaultLocaleQueryResult = Apollo.QueryResult<
  GetDefaultLocaleQuery,
  GetDefaultLocaleQueryVariables
>;
export function refetchGetDefaultLocaleQuery(variables?: GetDefaultLocaleQueryVariables) {
  return { query: GetDefaultLocaleDocument, variables: variables };
}
export const GetVideoCallSettingsDocument = gql`
  query getVideoCallSettings {
    videoCallSettings {
      ...videoCallSettingsFragment
    }
  }
  ${VideoCallSettingsFragmentFragmentDoc}
`;

/**
 * __useGetVideoCallSettingsQuery__
 *
 * To run a query within a React component, call `useGetVideoCallSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoCallSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoCallSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVideoCallSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVideoCallSettingsQuery,
    GetVideoCallSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVideoCallSettingsQuery, GetVideoCallSettingsQueryVariables>(
    GetVideoCallSettingsDocument,
    options,
  );
}
export function useGetVideoCallSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVideoCallSettingsQuery,
    GetVideoCallSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetVideoCallSettingsQuery, GetVideoCallSettingsQueryVariables>(
    GetVideoCallSettingsDocument,
    options,
  );
}
export type GetVideoCallSettingsQueryHookResult = ReturnType<typeof useGetVideoCallSettingsQuery>;
export type GetVideoCallSettingsLazyQueryHookResult = ReturnType<
  typeof useGetVideoCallSettingsLazyQuery
>;
export type GetVideoCallSettingsQueryResult = Apollo.QueryResult<
  GetVideoCallSettingsQuery,
  GetVideoCallSettingsQueryVariables
>;
export function refetchGetVideoCallSettingsQuery(variables?: GetVideoCallSettingsQueryVariables) {
  return { query: GetVideoCallSettingsDocument, variables: variables };
}
export const VideoCallsDocument = gql`
  query videoCalls($filter: VideoCallFilterInput, $limit: Int, $skip: Int, $sort: [SortInput!]) {
    videoCalls(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      count
      items {
        id
        createdAt
        duration
      }
    }
  }
`;

/**
 * __useVideoCallsQuery__
 *
 * To run a query within a React component, call `useVideoCallsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoCallsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoCallsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useVideoCallsQuery(
  baseOptions?: Apollo.QueryHookOptions<VideoCallsQuery, VideoCallsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VideoCallsQuery, VideoCallsQueryVariables>(VideoCallsDocument, options);
}
export function useVideoCallsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VideoCallsQuery, VideoCallsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VideoCallsQuery, VideoCallsQueryVariables>(
    VideoCallsDocument,
    options,
  );
}
export type VideoCallsQueryHookResult = ReturnType<typeof useVideoCallsQuery>;
export type VideoCallsLazyQueryHookResult = ReturnType<typeof useVideoCallsLazyQuery>;
export type VideoCallsQueryResult = Apollo.QueryResult<VideoCallsQuery, VideoCallsQueryVariables>;
export function refetchVideoCallsQuery(variables?: VideoCallsQueryVariables) {
  return { query: VideoCallsDocument, variables: variables };
}
export const SettingsUpdatedDocument = gql`
  subscription settingsUpdated($customerId: String!, $platformId: String!) {
    settingsUpdated(customerId: $customerId, platformId: $platformId) {
      customerId
      platformId
      locations {
        id
        title
        description
        agentSideRotation
        clientSideRotation
        clientSideRotationInputStream
      }
    }
  }
`;

/**
 * __useSettingsUpdatedSubscription__
 *
 * To run a query within a React component, call `useSettingsUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSettingsUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsUpdatedSubscription({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      platformId: // value for 'platformId'
 *   },
 * });
 */
export function useSettingsUpdatedSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    SettingsUpdatedSubscription,
    SettingsUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<SettingsUpdatedSubscription, SettingsUpdatedSubscriptionVariables>(
    SettingsUpdatedDocument,
    options,
  );
}
export type SettingsUpdatedSubscriptionHookResult = ReturnType<
  typeof useSettingsUpdatedSubscription
>;
export type SettingsUpdatedSubscriptionResult = Apollo.SubscriptionResult<SettingsUpdatedSubscription>;
export const UpdateVideoCallSettingsDocument = gql`
  mutation updateVideoCallSettings($input: VideoCallSettingsInput!) {
    updateVideoCallSettings(input: $input) {
      ...videoCallSettingsFragment
    }
  }
  ${VideoCallSettingsFragmentFragmentDoc}
`;
export type UpdateVideoCallSettingsMutationFn = Apollo.MutationFunction<
  UpdateVideoCallSettingsMutation,
  UpdateVideoCallSettingsMutationVariables
>;

/**
 * __useUpdateVideoCallSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateVideoCallSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoCallSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoCallSettingsMutation, { data, loading, error }] = useUpdateVideoCallSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVideoCallSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVideoCallSettingsMutation,
    UpdateVideoCallSettingsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateVideoCallSettingsMutation,
    UpdateVideoCallSettingsMutationVariables
  >(UpdateVideoCallSettingsDocument, options);
}
export type UpdateVideoCallSettingsMutationHookResult = ReturnType<
  typeof useUpdateVideoCallSettingsMutation
>;
export type UpdateVideoCallSettingsMutationResult = Apollo.MutationResult<UpdateVideoCallSettingsMutation>;
export type UpdateVideoCallSettingsMutationOptions = Apollo.BaseMutationOptions<
  UpdateVideoCallSettingsMutation,
  UpdateVideoCallSettingsMutationVariables
>;
export const UpdateVideoCallSettingsLocationDocument = gql`
  mutation updateVideoCallSettingsLocation($input: UpdateVideoCallSettingsLocationInput!) {
    updateVideoCallSettingsLocation(input: $input) {
      ...videoCallSettingsFragment
    }
  }
  ${VideoCallSettingsFragmentFragmentDoc}
`;
export type UpdateVideoCallSettingsLocationMutationFn = Apollo.MutationFunction<
  UpdateVideoCallSettingsLocationMutation,
  UpdateVideoCallSettingsLocationMutationVariables
>;

/**
 * __useUpdateVideoCallSettingsLocationMutation__
 *
 * To run a mutation, you first call `useUpdateVideoCallSettingsLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoCallSettingsLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoCallSettingsLocationMutation, { data, loading, error }] = useUpdateVideoCallSettingsLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVideoCallSettingsLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVideoCallSettingsLocationMutation,
    UpdateVideoCallSettingsLocationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateVideoCallSettingsLocationMutation,
    UpdateVideoCallSettingsLocationMutationVariables
  >(UpdateVideoCallSettingsLocationDocument, options);
}
export type UpdateVideoCallSettingsLocationMutationHookResult = ReturnType<
  typeof useUpdateVideoCallSettingsLocationMutation
>;
export type UpdateVideoCallSettingsLocationMutationResult = Apollo.MutationResult<UpdateVideoCallSettingsLocationMutation>;
export type UpdateVideoCallSettingsLocationMutationOptions = Apollo.BaseMutationOptions<
  UpdateVideoCallSettingsLocationMutation,
  UpdateVideoCallSettingsLocationMutationVariables
>;
export const RegisterWebpushDocument = gql`
  mutation registerWebpush($input: RegisterWebPushInput!) {
    registerWebpush(input: $input) {
      success
    }
  }
`;
export type RegisterWebpushMutationFn = Apollo.MutationFunction<
  RegisterWebpushMutation,
  RegisterWebpushMutationVariables
>;

/**
 * __useRegisterWebpushMutation__
 *
 * To run a mutation, you first call `useRegisterWebpushMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterWebpushMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerWebpushMutation, { data, loading, error }] = useRegisterWebpushMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterWebpushMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterWebpushMutation,
    RegisterWebpushMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterWebpushMutation, RegisterWebpushMutationVariables>(
    RegisterWebpushDocument,
    options,
  );
}
export type RegisterWebpushMutationHookResult = ReturnType<typeof useRegisterWebpushMutation>;
export type RegisterWebpushMutationResult = Apollo.MutationResult<RegisterWebpushMutation>;
export type RegisterWebpushMutationOptions = Apollo.BaseMutationOptions<
  RegisterWebpushMutation,
  RegisterWebpushMutationVariables
>;
