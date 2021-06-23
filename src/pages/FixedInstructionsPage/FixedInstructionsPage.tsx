import React, { useState } from 'react';
import { Collapse } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { SortInput, SortOrder, useGetCustomerFixedInstructionsQuery } from 'models/graphql';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import './FixedInstructionsPage.scss';

const { Panel } = Collapse;

const FixedInstructionsPage: React.FC = () => {
  const [pagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [sort] = useState<SortInput[]>([{ field: 'orderNr', order: SortOrder.Asc }]);
  const { url } = useRouteMatch();

  const {
    data: customerFixedInstructions,
    error: customerFixedInstructionsError,
    loading: customerFixedInstructionsLoading,
  } = useGetCustomerFixedInstructionsQuery({
    variables: {
      limit: pagination.pageSize,
      skip:
        pagination.pageSize && pagination.current && pagination.pageSize * (pagination.current - 1),
      sort,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (customerFixedInstructionsError) {
    return <div>ERROR: {customerFixedInstructionsError.message}</div>;
  }

  const fixedInstructions = customerFixedInstructions?.customerFixedInstructions?.items;

  const activePanels = fixedInstructions?.map(({ id }) => id);

  return (
    <>
      {!customerFixedInstructionsLoading && (
        <Collapse className="fixed-collapsed" defaultActiveKey={activePanels}>
          {fixedInstructions?.map(({ name, id, content }) => (
            <Panel header={<Link to={`${url}/${id.toString()}`}>{name}</Link>} key={id}>
              <div
                className="instructionContent"
                dangerouslySetInnerHTML={{ __html: content || 'No Data' }}
              />
            </Panel>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default FixedInstructionsPage;
