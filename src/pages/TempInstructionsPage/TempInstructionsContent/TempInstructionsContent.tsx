import React, { useState } from 'react';
import { Collapse, Spin } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { format } from 'date-fns';
import { useTranslation } from 'utils';
import {
  SortInput,
  SortOrder,
  InstructionTypes,
  useGetCustomerTemporaryInstructionsQuery,
} from 'models/graphql';
import { Link, useRouteMatch } from 'react-router-dom';
import './TempInstructionsContent.scss';

const { Panel } = Collapse;

interface ITempInstructionsContentProps {
  type: InstructionTypes;
}

const TempInstructionsContent: React.FC<ITempInstructionsContentProps> = ({ type }) => {
  const translate = useTranslation();
  const match = useRouteMatch();

  const [pagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [sort] = useState<SortInput[]>([{ field: 'orderNr', order: SortOrder.Asc }]);

  const {
    data: customerTemporaryInstructions,
    error: customerTemporaryInstructionsError,
    loading: customerTemporaryInstructionsLoading,
  } = useGetCustomerTemporaryInstructionsQuery({
    variables: {
      limit: pagination.pageSize,
      skip:
        pagination.pageSize && pagination.current && pagination.pageSize * (pagination.current - 1),
      sort,
      filter: {
        type,
      },
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  const tempInstructions = customerTemporaryInstructions?.customerTemporaryInstructions?.items;

  const getDateTimeFormat = (dateTime: string) => format(new Date(dateTime), 'MMM dd, yyyy p');

  const getPanelHeader = (updatedAt: string, validFrom: string, validUntil: string, id: number) => (
    <div className="temp-collapsed-header">
      <div className="temp-collapsed-column">
        <span className="title">{translate('modifiedAt')}</span>
        <span className="dateTime">{getDateTimeFormat(updatedAt)}</span>
      </div>

      <div className="temp-collapsed-column">
        <span className="title">{translate('validFrom')}</span>
        <span className="dateTime">{getDateTimeFormat(validFrom)}</span>
      </div>

      <div className="temp-collapsed-column">
        <span className="title">{translate('validTill')}</span>
        <span className="dateTime">{getDateTimeFormat(validUntil)}</span>
      </div>

      <div className="temp-collapsed-column">
        <Link to={`${match.path}/modify-instruction/${id}/?type=${type}`}>
          <span className="title">{translate('edit')}</span>
        </Link>
      </div>
    </div>
  );

  if (customerTemporaryInstructionsError) {
    return <div>ERROR: {customerTemporaryInstructionsError.message}</div>;
  }

  if (customerTemporaryInstructionsLoading) {
    return <Spin size="small" />;
  }

  const activePanels = tempInstructions?.map(({ id }) => id);

  return (
    <Collapse className="temp-collapsed" defaultActiveKey={activePanels}>
      {tempInstructions?.length && !customerTemporaryInstructionsLoading ? (
        tempInstructions?.map(({ id, updatedAt, validFrom, validUntil, content }) => (
          <Panel header={getPanelHeader(updatedAt, validFrom, validUntil, id)} key={id}>
            <div dangerouslySetInnerHTML={{ __html: content || 'No Data' }} />
          </Panel>
        ))
      ) : (
        <p>No data yet</p>
      )}
    </Collapse>
  );
};

export default TempInstructionsContent;
