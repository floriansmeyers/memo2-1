import React, { createElement } from 'react';
import { Form, Row, Col } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { CustomerCrmContact, User } from 'models/graphql';
import { Modal } from 'components';
import { getModalFooter, IAddOrEditModalSections, useTranslation } from 'utils';
import './AddOrEditModal.scss';

interface IAddOrEditModalProps {
  title: string;
  visible: boolean;
  onCloseModal: () => void;
  customerCrmContact?: CustomerCrmContact;
  form?: FormInstance;
  sections?: IAddOrEditModalSections[];
  onFinish?: () => void;
  initialValues?: User;
}

const AddOrEditModal: React.FC<IAddOrEditModalProps> = ({
  title,
  visible,
  onCloseModal,
  form,
  sections,
  onFinish,
  initialValues,
}) => {
  const translate = useTranslation();

  const addOrEditModalContent = (
    <Form hideRequiredMark={true} form={form} initialValues={{ ...initialValues }}>
      {sections?.map(({ id, props, Component, Section }) => (
        <Row gutter={20} key={id} className="separator">
          <Col span={6} className="modal-section-title">
            {translate(id)}
          </Col>
          <Col span={18}>
            {Component && props ? createElement<typeof props>(Component, props) : Section}
          </Col>
        </Row>
      ))}
    </Form>
  );

  const footerProps = {
    onCloseModal,
    cancelText: translate('cancel'),
    onOk: onFinish,
  };

  return (
    <Modal
      className="add-or-edit-modal"
      title={title}
      content={addOrEditModalContent}
      visible={visible}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default AddOrEditModal;
