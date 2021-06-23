import React from 'react';
import { Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { InstructionTypes } from 'models/graphql';
import { Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import TempInstructionsContent from './TempInstructionsContent/TempInstructionsContent';
import './TempInstructionsPage.scss';

const { TabPane } = Tabs;

const TempInstructionsPage: React.FC = () => {
  const translate = useTranslation();
  const match = useRouteMatch();
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const instructionType = params.get('type') as InstructionTypes;
  const setActiveTab =
    match.path.endsWith('temporary') && !instructionType
      ? InstructionTypes.Active
      : instructionType;

  const onClickNewInstructionHandler = () => {
    history.push(`${match.path}/new-instruction`);
  };

  const onChangeInstructionTypesHandler = (type: string) => {
    history.push(`${match.path}/?type=${type}`);
  };

  return (
    <div className="temp-instructions-page">
      <Button
        onClick={onClickNewInstructionHandler}
        icon={<PlusOutlined />}
        text={translate('newInstruction')}
        type={ButtonTypes.Blue}
      />
      <Tabs onChange={onChangeInstructionTypesHandler} activeKey={setActiveTab}>
        <TabPane tab={translate('instructions.active')} key={InstructionTypes.Active}>
          <TempInstructionsContent type={InstructionTypes.Active} />
        </TabPane>
        <TabPane tab={translate('disabled')} key={InstructionTypes.Inactive}>
          <TempInstructionsContent type={InstructionTypes.Inactive} />
        </TabPane>
        <TabPane tab={translate('future')} key={InstructionTypes.Future}>
          <TempInstructionsContent type={InstructionTypes.Future} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TempInstructionsPage;
