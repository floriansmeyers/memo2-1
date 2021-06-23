import React, { Fragment, RefObject, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'utils';
import { Badge, Spin } from 'antd';
import { useLocation } from 'react-router';
import {
  SearchAgentMessage,
  SearchAttachment,
  SearchCustomerCrmContact,
  SearchCustomerFixedInstruction,
  SearchCustomerTemporaryInstruction,
  SearchMessage,
  SearchTypes,
  SortInput,
  SortOrder,
  useSearchQuery,
} from 'models/graphql';
import { PageHeader } from 'components';
import SearchResult from './SearchResult/SearchResult';
import './SearchPage.scss';

export type SearchItem =
  | SearchMessage
  | SearchAgentMessage
  | SearchAttachment
  | SearchCustomerFixedInstruction
  | SearchCustomerTemporaryInstruction
  | SearchCustomerCrmContact;

const SerachPage1 = () => {
  const translate = useTranslation();
  const { search } = useLocation();
  const [activeType, setActiveType] = useState<SearchTypes>();
  const [items, setItems] = useState<SearchItem[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const limit = 10;
  const mainRef = useRef<HTMLInputElement>(null);
  const inboxRef = useRef<HTMLDivElement>(null);
  const agentMessagesRef = useRef<HTMLDivElement>(null);
  const attachmentsRef = useRef<HTMLDivElement>(null);
  const fixedInstructionsRef = useRef<HTMLDivElement>(null);
  const temporaryInstructionsRef = useRef<HTMLDivElement>(null);
  const crmContactsRef = useRef<HTMLDivElement>(null);

  const params = new URLSearchParams(search);
  const searchedValue = params.get('value') as string;
  const filteredValue = params.get('filter') as string;

  const { data: searchData, loading: searchLoading, error: searchError } = useSearchQuery({
    variables: {
      filter: {
        types:
          filteredValue && filteredValue !== 'all'
            ? [filteredValue as SearchTypes]
            : [
                SearchTypes.CustomerTemporaryInstruction,
                SearchTypes.CustomerFixedInstruction,
                SearchTypes.CustomerCrmContact,
                SearchTypes.Attachment,
                SearchTypes.Agentmessage,
                SearchTypes.Message,
              ],
      },
      search: searchedValue ?? '',
      sort: [({ field: 'type', order: SortOrder.Desc } as unknown) as SortInput],
      limit,
      skip,
    },
  });

  const initialLoading = searchLoading && items.length === 0;
  const get = (type: SearchTypes, _items: SearchItem[]): SearchItem[] =>
    _items.filter((item) => item.type === type);

  const getInstructions = (): (
    | SearchCustomerTemporaryInstruction
    | SearchCustomerFixedInstruction
  )[] => {
    const fixedInstructions = get(SearchTypes.CustomerFixedInstruction, items);
    const temporaryInstructions = get(SearchTypes.CustomerTemporaryInstruction, items);

    return [...fixedInstructions, ...temporaryInstructions] as [
      SearchCustomerTemporaryInstruction | SearchCustomerFixedInstruction,
    ];
  };

  const getRefFromType = (type: SearchTypes): RefObject<HTMLDivElement> => {
    switch (type) {
      case SearchTypes.Message:
        return inboxRef;
      case SearchTypes.Agentmessage:
        return agentMessagesRef;
      case SearchTypes.Attachment:
        return attachmentsRef;
      case SearchTypes.CustomerFixedInstruction:
        return fixedInstructionsRef;
      case SearchTypes.CustomerTemporaryInstruction:
        return temporaryInstructionsRef;
      case SearchTypes.CustomerCrmContact:
        return crmContactsRef;
      default:
        return inboxRef;
    }
  };

  const scrollToRef = (ref: RefObject<HTMLDivElement> | undefined) => {
    if (ref && ref.current && mainRef.current) {
      mainRef.current.scrollTo(0, ref.current.offsetTop - 100);
    } else if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  };

  const updateActiveSearchType = (
    type: SearchTypes | undefined,
    ref: RefObject<HTMLDivElement> | undefined,
  ) => {
    setActiveType(type);
    scrollToRef(ref);
  };

  const addToItems = (queryResult: SearchItem[]) => {
    const lastItem = queryResult[queryResult.length - 1];
    const isLastItemDifferentFromLastQueryItem: boolean = items[items?.length - 1] !== lastItem;
    const hasMore: boolean = items.concat(queryResult).length !== items.length;

    if (lastItem) {
      if (isLastItemDifferentFromLastQueryItem && hasMore) {
        const newItems = items.concat(queryResult);
        setItems(newItems);
      }
    }
  };

  useEffect(() => {
    if (searchData?.search.items) {
      addToItems(searchData?.search.items as SearchItem[]);
    }
  }, [searchData?.search.items]);

  const handleScroll = () => {
    if (items.length > 0 && mainRef.current) {
      const container = mainRef.current;

      if (container.scrollTop > container.scrollHeight - container.clientHeight - 50) {
        setSkip(skip + limit);
      }
    }
  };

  const shouldRenderResults = (type: SearchTypes): boolean => {
    const filtered: boolean = filteredValue === 'all' || filteredValue === type;
    const dataContainsType: boolean = items.some((item) => item.type === type);

    return filtered && dataContainsType;
  };

  const getCountByType = (type: SearchTypes): number => {
    const item = searchData?.search.countByType.find((i) => i.type === type);

    return (item && item.count) || 0;
  };

  useEffect(() => {
    if (mainRef.current && items.length < searchData?.search?.count!) {
      mainRef.current.addEventListener('scroll', handleScroll);
    }

    if (activeType) {
      scrollToRef(getRefFromType(activeType));
    }

    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [items, mainRef]);

  useEffect(() => {
    setItems([]);
  }, [searchedValue]);

  return (
    <div className="search">
      <PageHeader title={translate('searchResults')} />
      <div className="search__inner">
        <ul className="search-sidebar">
          {searchLoading && <Spin size="small" />}
          {!searchLoading && search && (
            <Fragment>
              <li
                className={
                  !activeType
                    ? 'search-sidebar-item search-sidebar-item--active'
                    : 'search-sidebar-item'
                }
              >
                <a
                  role="button"
                  tabIndex={0}
                  onClick={() => updateActiveSearchType(undefined, undefined)}
                >
                  {translate('all')}
                  <Badge count={searchData?.search.count} />
                </a>
              </li>
              {searchData?.search.countByType.map(({ type, count }) => (
                <li
                  key={type}
                  className={
                    activeType === type
                      ? 'search-sidebar-item search-sidebar-item--active'
                      : 'search-sidebar-item' || (count === 0 && 'inactive')
                  }
                >
                  <a
                    role="button"
                    tabIndex={0}
                    onClick={() => updateActiveSearchType(type, getRefFromType(type))}
                  >
                    {translate(type)}
                    {count > 0 && <Badge count={count} />}
                  </a>
                </li>
              ))}
            </Fragment>
          )}
        </ul>
        <main className="search-results" ref={mainRef}>
          {/* TODO: improve render if will have time/ not mandatory */}
          <div ref={temporaryInstructionsRef}>
            {shouldRenderResults(SearchTypes.CustomerTemporaryInstruction) && (
              <SearchResult
                title="temporaryInstructions"
                data={get(SearchTypes.CustomerTemporaryInstruction, items)}
                loading={initialLoading}
                error={searchError}
                count={getCountByType(SearchTypes.CustomerTemporaryInstruction)}
              />
            )}
          </div>
          <div ref={fixedInstructionsRef}>
            {shouldRenderResults(SearchTypes.CustomerFixedInstruction) && (
              <SearchResult
                title="fixedInstructions"
                data={getInstructions()}
                loading={initialLoading}
                error={searchError}
                count={getCountByType(SearchTypes.CustomerFixedInstruction)}
              />
            )}
          </div>
          <div ref={crmContactsRef}>
            {shouldRenderResults(SearchTypes.CustomerCrmContact) && (
              <SearchResult
                title="crmContacts"
                data={get(SearchTypes.CustomerCrmContact, items)}
                loading={initialLoading}
                error={searchError}
                count={getCountByType(SearchTypes.CustomerCrmContact)}
              />
            )}
          </div>
          <div ref={attachmentsRef}>
            {shouldRenderResults(SearchTypes.Attachment) && (
              <SearchResult
                title="attachments"
                data={get(SearchTypes.Attachment, items)}
                loading={initialLoading}
                error={searchError}
                count={getCountByType(SearchTypes.Attachment)}
              />
            )}
          </div>
          <div ref={agentMessagesRef}>
            {shouldRenderResults(SearchTypes.Agentmessage) && (
              <SearchResult
                title="agentMessages"
                data={get(SearchTypes.Agentmessage, items)}
                loading={initialLoading}
                error={searchError}
                count={getCountByType(SearchTypes.Agentmessage)}
              />
            )}
          </div>
          <div ref={inboxRef}>
            {shouldRenderResults(SearchTypes.Message) && (
              <SearchResult
                title="inbox"
                data={get(SearchTypes.Message, items)}
                loading={initialLoading}
                error={searchError}
                count={getCountByType(SearchTypes.Message)}
              />
            )}
          </div>
          {searchLoading && <Spin size="small" />}
        </main>
      </div>
    </div>
  );
};

export default SerachPage1;
