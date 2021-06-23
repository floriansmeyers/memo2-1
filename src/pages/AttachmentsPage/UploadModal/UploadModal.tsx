import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';
import { UploadFile } from 'antd/es/upload/interface';
import 'antd/es/date-picker/style/index';
import { RangeValue } from 'rc-picker/lib/interface';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { Modal, FileListItem, FilePicker } from 'components';
import { getModalFooter, Logger, useTranslation } from 'utils';
import './UploadModal.scss';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

interface IUploadModalProps {
  title: string;
  visible: boolean;
  onCloseModal: () => void;
  fileType?: string;
}

const MicrosoftFileTypes = ['.doc, .docx', '.xls, .xlsx, .xlsm'];

const UploadModal: React.FC<IUploadModalProps> = ({ title, visible, onCloseModal, fileType }) => {
  const translate = useTranslation();
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [dates, setDates] = useState<RangeValue<Date>>(null);

  const onFinish = (values: { name: string }) => {
    const [fromDate, toDate] = dates || [null, null];
    if (fromDate && toDate && fileList[0].originFileObj) {
      const validFrom = fromDate.toISOString();
      const validTill = toDate.toISOString();

      const input = {
        validFrom,
        validTill,
        name: values.name,
        attachment: fileList[0].originFileObj,
      };
      Logger.log(input);

      form.resetFields();
      setFileList([]);
      onCloseModal();
    }
  };

  const uploadModalContent = (
    <Form onFinish={onFinish} hideRequiredMark={true} className="attachments-upload-modal">
      <Row gutter={20}>
        <Col span={24}>
          <DatePicker.RangePicker
            value={dates}
            onChange={(pickerDates) => setDates(pickerDates)}
            style={{ width: '100%' }}
          />
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <div className="upload">
            {fileList.length > 0 && (
              <FileListItem
                key={fileList[0].name}
                file={fileList[0]}
                onRemove={() => setFileList([])}
              />
            )}
            {fileList.length === 0 && (
              <FilePicker
                acceptFileType={
                  MicrosoftFileTypes.find((el) => RegExp(fileType?.trim() || '').test(el)) ||
                  `.${fileType?.trim()}`
                }
                onFileListChanged={(list: UploadFile[]) => setFileList(list)}
                messageId="newAttachment"
              />
            )}
          </div>
        </Col>
      </Row>
    </Form>
  );

  const footerProps = {
    onCloseModal,
    cancelText: translate('cancel'),
    onOk: onFinish,
  };

  return (
    <Modal
      title={title}
      content={uploadModalContent}
      visible={visible}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default UploadModal;
