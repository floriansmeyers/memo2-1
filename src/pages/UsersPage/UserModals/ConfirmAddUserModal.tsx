import React from 'react';
import { getModalFooter, useTranslation } from 'utils';
import { Modal } from 'components';

interface IConfirmAddUserModalProps {
  visible: boolean;
  onCloseModal: () => void;
  setNewVisible: (newVisible: boolean) => void;
}

const ConfirmAddUserModal: React.FC<IConfirmAddUserModalProps> = ({
  visible,
  onCloseModal,
  setNewVisible,
}) => {
  const translate = useTranslation();

  const onOk = () => {
    setNewVisible(true);
    onCloseModal();
  };

  const footerProps = {
    cancelText: translate('disagree'),
    onCloseModal,
    okText: translate('agree'),
    onOk,
  };

  return (
    <Modal
      title={translate('INFO')}
      visible={visible}
      content={translate('addUser.notification')}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default ConfirmAddUserModal;
