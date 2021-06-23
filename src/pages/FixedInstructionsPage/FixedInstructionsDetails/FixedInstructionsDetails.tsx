import React from 'react';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'utils';
import { useGetCustomerFixedInstructionsQuery } from 'models/graphql';
import { message, Spin } from 'antd';
import './FixedInstructionsDetails.scss';

const FixedInstructionsDetails: React.FC = () => {
  const translate = useTranslation();
  const match = useRouteMatch();
  const history = useHistory();
  const { instructionId } = match.params as { instructionId: string };

  const { data, loading, error } = useGetCustomerFixedInstructionsQuery({
    variables: { filter: { ids: [parseInt(instructionId, 10)] } },
  });
  const instruction = data?.customerFixedInstructions.items[0];

  const redirectToInstructions = () => {
    message.error(translate('instructionNotFound'));
    history.push('/instructions/fixed');
  };

  return (
    <div className="instruction-details">
      <div className="instruction-header">
        <Link to="/customer/instructions/fixed">{translate('backToInstructions')}</Link>
      </div>
      <div className="instruction-body">
        {loading && <Spin size="small" />}
        {error && redirectToInstructions()}
        {instruction && (
          <div className="instruction-body__txt">
            <p className="instruction-body__comment">{translate('editFixedInstruction')}</p>
            <div className="rtf" dangerouslySetInnerHTML={{ __html: instruction.content }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedInstructionsDetails;
