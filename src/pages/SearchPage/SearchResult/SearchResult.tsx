import React from 'react';
import { Badge, Spin } from 'antd';
import {
  SearchAgentMessage,
  SearchAttachment,
  SearchCustomerCrmContact,
  SearchCustomerFixedInstruction,
  SearchCustomerTemporaryInstruction,
  SearchMessage,
} from 'models/graphql';
import { ApolloError } from '@apollo/client';
import { useTranslation } from 'utils';
import { SearchItem } from '../SearchPage';
import { SearchResultMessage } from './SearchResultMessage/SearchResultMessage';
import SearchResultInstruction from './SearchResultInstruction/SearchResultInstruction';
import { SearchResultTemporaryInstruction } from './SearchResultTemporaryInstruction/SearchResultTemporaryInstruction';
import { SearchResultAgentMessage } from './SearchResultAgentMessage/SearchResultAgentMessage';
import { SearchResultCrmContact } from './SearchResultCrmContact/SearchResultCrmContact';
import { SearchResultAttachment } from './SearchResultAttachment/SearchResultAttachment';

interface IProp {
  data: SearchItem[];
  loading: boolean;
  error: ApolloError | undefined;
  title:
    | 'inbox'
    | 'agentMessages'
    | 'attachments'
    | 'fixedInstructions'
    | 'temporaryInstructions'
    | 'crmContacts';
  count: number;
}

const SearchResult: React.FC<IProp> = ({ data, loading, error, title, count }) => {
  const translate = useTranslation();

  const renderComponent = (item: SearchItem, index: number): JSX.Element | null => {
    switch (title) {
      case 'inbox':
        return <SearchResultMessage key={index} item={item as SearchMessage} />;
      case 'agentMessages':
        return <SearchResultAgentMessage key={index} item={item as SearchAgentMessage} />;
      case 'attachments':
        return <SearchResultAttachment key={index} item={item as SearchAttachment} />;
      case 'fixedInstructions':
        return (
          <SearchResultInstruction key={index} item={item as SearchCustomerFixedInstruction} />
        );
      case 'temporaryInstructions':
        return (
          <SearchResultTemporaryInstruction
            key={index}
            item={item as SearchCustomerTemporaryInstruction}
          />
        );
      case 'crmContacts':
        return <SearchResultCrmContact key={index} item={item as SearchCustomerCrmContact} />;
      default:
        return null;
    }
  };

  return (
    <div className="search-result">
      <div className="common-title-count">
        {translate(title)} <Badge count={count} />
      </div>
      {loading && <Spin size="small" />}
      {!loading && !error && data.map(renderComponent)}
    </div>
  );
};

export default SearchResult;
