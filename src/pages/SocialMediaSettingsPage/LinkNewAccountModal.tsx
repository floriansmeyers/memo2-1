import React from 'react';
import { getModalFooter, useTranslation } from 'utils';
import { Modal } from 'components';

interface ILinkNewAccountModalProps {
  visible: boolean;
  onCloseModal: () => void;
  setSubmit: (submit: boolean) => void;
}

const LinkNewAccountModal: React.FC<ILinkNewAccountModalProps> = ({
  visible,
  onCloseModal,
  setSubmit,
}) => {
  const translate = useTranslation();

  const onOk = () => {
    setSubmit(true);
    onCloseModal();
  };

  const footerProps = {
    onCloseModal,
    onOk,
    cancelText: translate('disagree'),
    okText: translate('agree'),
  };

  return (
    <Modal
      title={translate('INFO')}
      visible={visible}
      content={translate('addChannel.notification')}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default LinkNewAccountModal;
