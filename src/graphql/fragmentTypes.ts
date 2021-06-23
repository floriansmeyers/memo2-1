export interface IIntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IIntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'CallBaseReporting',
        possibleTypes: [
          {
            name: 'DurationTimeReporting',
          },
          {
            name: 'MissedCallsReporting',
          },
          {
            name: 'NrOfCallsPerHourReporting',
          },
          {
            name: 'WaitingTimeReporting',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Conversation',
        possibleTypes: [
          {
            name: 'BlankConversation',
          },
          {
            name: 'TextConversation',
          },
          {
            name: 'VideoConversation',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'EventModel',
        possibleTypes: [
          {
            name: 'ConversationArchivedEvent',
          },
          {
            name: 'ConversationClosedEvent',
          },
          {
            name: 'ConversationCreatedEvent',
          },
          {
            name: 'ConversationFlaggedEvent',
          },
          {
            name: 'ConversationForwardedEvent',
          },
          {
            name: 'ConversationPriorityChangedEvent',
          },
          {
            name: 'ConversationReadedEvent',
          },
          {
            name: 'ConversationStatusChangedEvent',
          },
          {
            name: 'ConversationUnflaggedEvent',
          },
          {
            name: 'ConversationUpdatedEvent',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'MeccaConversationModel',
        possibleTypes: [
          {
            name: 'MeccaBlankConversationModel',
          },
          {
            name: 'MeccaTextConversationModel',
          },
          {
            name: 'MeccaVideoConversationModel',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'MeccaTextConversationPreviewModel',
        possibleTypes: [
          {
            name: 'MeccaTextConversationPreviewModelTextAndAttachments',
          },
          {
            name: 'MeccaTextConversationPreviewModelTextAndAttachmentsWithStructuredMessage',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Notification',
        possibleTypes: [
          {
            name: 'NotificationConversation',
          },
          {
            name: 'NotificationInvoice',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'PairedChannel',
        possibleTypes: [
          {
            name: 'PairedChannelBlank',
          },
          {
            name: 'PairedChannelFacebook',
          },
          {
            name: 'PairedChannelTwitter',
          },
          {
            name: 'PairedChannelVideo',
          },
          {
            name: 'PairedChannelWhatsapp',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Search',
        possibleTypes: [
          {
            name: 'SearchAgentMessage',
          },
          {
            name: 'SearchAttachment',
          },
          {
            name: 'SearchCustomerCrmContact',
          },
          {
            name: 'SearchCustomerFixedInstruction',
          },
          {
            name: 'SearchCustomerTemporaryInstruction',
          },
          {
            name: 'SearchMessage',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'TextConversationPreview',
        possibleTypes: [
          {
            name: 'TextConversationPreviewTextAndAttachments',
          },
          {
            name: 'TextConversationPreviewTextAndAttachmentsWithStructuredMessage',
          },
        ],
      },
    ],
  },
};

export default result;
