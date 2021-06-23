import React, { lazy } from 'react';
import { ClockCircleFilled, LockFilled } from '@ant-design/icons';
import { renderRoutes, IRoutesProps, useTranslation } from 'utils';
import { PageHeader, ActionIcons } from 'components';

const FixedInstructionsPage = lazy(() => import('pages/FixedInstructionsPage'));
const TempInstructionsPage = lazy(() => import('pages/TempInstructionsPage'));

const InstructionsPage: React.FC = () => {
  const translate = useTranslation();

  const instructionsRoutes: IRoutesProps[] = [
    {
      name: translate('permanent'),
      path: '/customer/instructions/fixed',
      icon: <LockFilled />,
      Component: FixedInstructionsPage,
    },
    {
      name: translate('temporary'),
      path: '/customer/instructions/temporary',
      icon: <ClockCircleFilled />,
      Component: TempInstructionsPage,
    },
  ];

  return (
    <>
      <PageHeader
        title={translate('instructions')}
        routes={instructionsRoutes}
        actions={<ActionIcons />}
      />
      {renderRoutes(instructionsRoutes)}
    </>
  );
};

export default InstructionsPage;
