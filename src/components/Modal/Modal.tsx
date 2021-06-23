import React from 'react';
import { Modal as AntdModal } from 'antd';
import './Modal.scss';

interface IModalProps {
  className?: string;
  title?: string;
  visible: boolean;
  onCancel: (e: React.MouseEvent) => void;
  content: JSX.Element | React.ReactNode | string;
  footer: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ className, title, visible, onCancel, content, footer }) => (
  <AntdModal
    className={className}
    title={title}
    visible={visible}
    onCancel={onCancel}
    footer={footer}
  >
    {content}
  </AntdModal>
);

export default Modal;
