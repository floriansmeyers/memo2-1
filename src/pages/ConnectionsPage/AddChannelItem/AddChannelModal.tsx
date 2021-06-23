import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal } from 'antd';
import { useTranslation } from 'utils';

export interface IProps {
  visible: boolean;
  onClose(pair: boolean): any;
}

export const AddChannelModal: React.FC<IProps> = ({ visible, onClose }) => {
  const translate = useTranslation();

  return (
    <Modal
      title={<FormattedMessage id="INFO" />}
      visible={visible}
      centered
      okButtonProps={{}}
      onCancel={() => onClose(false)}
      footer={[
        <Button key="back" onClick={() => onClose(false)}>
          <FormattedMessage id="disagree" />
        </Button>,
        <Button key="submit" type="primary" onClick={() => onClose(true)}>
          <FormattedMessage id="agree" />
        </Button>,
      ]}
    >
      <div>
        <FormattedMessage id="addChannel.notification" />
      </div>
    </Modal>
  );
};
