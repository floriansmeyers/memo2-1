import React, { useState } from 'react';
import { RangeValue } from 'rc-picker/lib/interface';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { UploadFile } from 'antd/lib/upload/interface';
import { getModalFooter, useTranslation } from 'utils';
import { FilePicker, Modal } from 'components';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

interface IProps {
  visible: boolean;
  onCloseModal: () => void;
}

const MessageBodyUploadAttachmentModal: React.FC<IProps> = ({ visible, onCloseModal }) => {
  const translate = useTranslation();
  const [rangeValue, setRangeValue] = useState<RangeValue<Date>>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // TODO: Get information from PM on how this modal will work or it'll be removed and in that case we won't need the following onFinish at all
  const onFinish = (values: { name: string }) => {};

  const messageUploadAttachmentContent = <FilePicker onFileListChanged={setFileList} />;

  const footerProps = {
    onCloseModal,
    cancelText: translate('cancel'),
    okText: translate('send'),
    onOk: onFinish,
  };

  return (
    <Modal
      title={translate('uploadNewAttachments')}
      visible={visible}
      content={messageUploadAttachmentContent}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default MessageBodyUploadAttachmentModal;
