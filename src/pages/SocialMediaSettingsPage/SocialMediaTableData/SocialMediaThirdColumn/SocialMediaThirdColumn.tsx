import React from 'react';
import { message, Popconfirm } from 'antd';
import { DeleteOutlined, PauseOutlined, PlayCircleOutlined } from '@ant-design/icons';
import {
  DeactivateChannelMutationVariables,
  UnpairChannelMutationVariables,
  useActivateChannelMutation,
  useDeactivateChannelMutation,
  useUnpairChannelMutation,
} from 'models/graphql';
import { Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import './SocialMediaThirdColumn.scss';

interface IProps {
  id: string;
  active: boolean;
}

const SocialMediaThirdColumn: React.FC<IProps> = ({ id, active }) => {
  const translate = useTranslation();
  const [deactivateChannel] = useDeactivateChannelMutation({
    refetchQueries: ['getPairedChannels'],
  });
  const [activateChannel] = useActivateChannelMutation({ refetchQueries: ['getPairedChannels'] });
  const [unpairChannel] = useUnpairChannelMutation();

  const onClickPauseHandler = () => {
    const variables: DeactivateChannelMutationVariables = {
      id,
    };

    try {
      deactivateChannel({
        variables,
      });
      message.success(translate('channelSuccesfullyDeactivated'));
    } catch (error) {
      message.error(error);
    }
  };

  const onClickResumeHandler = () => {
    const variables: DeactivateChannelMutationVariables = {
      id,
    };

    try {
      activateChannel({
        variables,
      });
      message.success(translate('channelSuccesfullyActivated'));
    } catch (error) {
      message.error(error);
    }
  };

  const onClickDeleteHandler = () => {
    const variables: UnpairChannelMutationVariables = {
      id,
    };

    try {
      unpairChannel({
        variables,
      });
      message.success(translate('channelSuccesfullyUnpaired'));
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div className="third-column">
      {active ? (
        <Button
          onClick={onClickPauseHandler}
          icon={<PauseOutlined />}
          text={translate('deactivateChannel')}
          type={ButtonTypes.White}
        />
      ) : (
        <Button
          onClick={onClickResumeHandler}
          text={translate('activateChannel')}
          icon={<PlayCircleOutlined />}
          type={ButtonTypes.White}
        />
      )}
      <div className="divider" />
      <Popconfirm
        placement="topRight"
        title={translate('delete.areYouSure')}
        onConfirm={onClickDeleteHandler}
        okText={translate('yes')}
        cancelText={translate('no')}
      >
        <Button
          text={translate('unpairChannel')}
          icon={<DeleteOutlined />}
          type={ButtonTypes.White}
        />
      </Popconfirm>
    </div>
  );
};

export default SocialMediaThirdColumn;
