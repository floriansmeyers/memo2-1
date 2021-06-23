import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  GetSocialConversationsPreviewQueryVariables,
  MeccaConversationModel,
  SocialConversationModel,
  SortOrder,
  useGetMeccaConversationsPreviewQuery,
  useGetSocialConversationsPreviewQuery,
} from 'models/graphql';
import { InboxSource, MessagesSource } from 'types/inbox';
import { IObjectLiteral } from '../../interfaces/object-literal.interface';
import SingleMessageView from './SingleMessageView/SingleMessageView';
import DefaultView from './DefaultView/DefaultView';
import { FilterCb } from './CallCenterHeader/CheckBoxBlock/CheckBoxBlock';
import './InboxPage.scss';

export const MESSAGES_PER_PAGE = 20;

const InboxPage: React.FC = () => {
  const [singleMessageView, setSingleMessageView] = useState(false);
  const [messagesSource, setMessagesSource] = useState<MessagesSource>(MessagesSource.Inbox);
  const [flagged, setFlagged] = useState<boolean | undefined>(false);
  const [archived, setArchived] = useState<boolean | undefined>(false);
  const [checkedMessages, setCheckedMessages] = useState<IObjectLiteral<boolean>>({});
  const [allChecked, setAllChecked] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();

  const updateMessagesSource = (source: MessagesSource) => {
    setPage(1);
    setMessagesSource(source);
  };

  const increasePage = () => {
    setPage((prev) => prev + 1);
  };

  const messageSubpageType = location.pathname.includes('callcenter')
    ? InboxSource.CallCenter
    : InboxSource.SocialNetworks;

  useEffect(() => {
    switch (messagesSource) {
      case MessagesSource.Inbox:
        setFlagged(undefined);
        setArchived(false);
        break;
      case MessagesSource.FollowUp:
        setFlagged(true);
        setArchived(undefined);
        break;
      case MessagesSource.Archive:
        setFlagged(undefined);
        setArchived(true);
        break;
      default:
        setFlagged(undefined);
        setArchived(false);
    }
  }, [messagesSource]);

  // TODO: connect bellow variables when the filter fill be done
  const variables: GetSocialConversationsPreviewQueryVariables = {
    filter: {
      ...(messageSubpageType === InboxSource.CallCenter ? {} : { archived }),
      flagged,
    },
    sort: SortOrder.Desc,
    limit: page * MESSAGES_PER_PAGE,
  };

  const queryOptions = {
    variables,
    pollInterval: 5 * 60 * 1000, // 5min
  };

  const fetchConversationsPreviews = (source?: string) => {
    if (source === InboxSource.SocialNetworks) {
      return useGetSocialConversationsPreviewQuery;
    }

    return useGetMeccaConversationsPreviewQuery;
  };

  const {
    data,
    loading,
  }: /* eslint-disable @typescript-eslint/no-explicit-any */
  any = fetchConversationsPreviews(messageSubpageType)({
    ...queryOptions,
    fetchPolicy: 'no-cache',
  });

  const messageKey =
    messageSubpageType === InboxSource.CallCenter ? 'meccaConversations' : 'socialConversations';
  const messages = data?.[messageKey]?.items as Array<
    MeccaConversationModel | SocialConversationModel
  >;
  const messageCount = data?.[messageKey].count || 0;

  const checkMessageFactory = (id: string) => (isChecked: boolean) => {
    setCheckedMessages((prev) => ({ ...prev, [id]: isChecked }));
  };

  useEffect(() => {
    setCheckedMessages(() => ({
      ...(messages?.reduce((acc, { id }) => ({ ...acc, [id]: allChecked }), {}) || {}),
    }));
  }, [allChecked, messages]);

  useEffect(() => {
    const all = Object.values(checkedMessages).every(Boolean);

    if (all !== allChecked) {
      setAllChecked(all);
    }
  }, [checkedMessages]);

  const checkByFilter = (filter: FilterCb) => {
    setCheckedMessages(() => ({
      ...(messages?.reduce((acc, message) => ({ ...acc, [message.id]: filter(message) }), {}) ||
        {}),
    }));
  };

  const commonProps = {
    singleMessageView,
    setSingleMessageView,
    increasePage,
    page,
    messageCount,
    messages,
    checkMessageFactory,
    checkedMessages,
    setAllChecked,
    allChecked,
    checkByFilter,
    loading,
  };

  return (
    <>
      {!singleMessageView ? (
        <DefaultView
          {...commonProps}
          setMessagesSource={updateMessagesSource}
          messageSubpageType={messageSubpageType}
        />
      ) : (
        data && <SingleMessageView {...commonProps} />
      )}
    </>
  );
};

export default InboxPage;
