import React from 'react';
import { Button } from 'components';
import { ButtonTypes } from 'utils';

interface IFooterProps {
  cancelText?: string;
  onCloseModal?: () => void;
  okText?: string;
  onOk?: (() => void) | ((values: { name: string }) => void);
  loading?: boolean;
}

export const getModalFooter = ({
  cancelText,
  onCloseModal,
  onOk,
  loading,
  okText = 'OK',
}: IFooterProps) => [
  cancelText && onCloseModal && (
    <Button key="cancel" text={cancelText} type={ButtonTypes.White} onClick={onCloseModal} />
  ),
  onOk && (
    <Button key="ok" text={okText} type={ButtonTypes.Blue} onClick={onOk} loading={loading} />
  ),
];
