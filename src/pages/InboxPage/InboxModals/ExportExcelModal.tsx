import React, { useState } from 'react';
import { Form, Col, Row } from 'antd';
import { format } from 'date-fns';
import { RangeValue } from 'rc-picker/lib/interface';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import {
  getModalFooter,
  useTranslation,
  downloadFileByUrl,
  StorageUtils,
  exportXlsxEndpoint,
} from 'utils';
import { Modal } from 'components';
import env from 'environment';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

interface IExportExcelModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

const ExportExcelModal: React.FC<IExportExcelModalProps> = ({ visible, onCloseModal }) => {
  const [form] = Form.useForm();
  const translate = useTranslation();
  const [rangeValue, setRangeValue] = useState<RangeValue<Date>>([new Date(), new Date()]);

  const onFinish = (values: { name: string }) => {
    const [fromDate, toDate] = rangeValue || [null, null];
    if (fromDate && toDate) {
      const input = {
        startDate: format(new Date(fromDate), 'dd/MM/yyyy'),
        endDate: format(new Date(toDate), 'dd/MM/yyyy'),
      };
      // TODO: With certain dates the following link doesn't work. To check when issue is fix in Memo 2.0 and make changes accordingly here as well
      downloadFileByUrl(
        `${env.API_URL}${exportXlsxEndpoint}?startDate=${input.startDate}&endDate=${
          input.endDate
        }&customerId=${StorageUtils.getCustomerId()}`,
      );

      form.resetFields();
      onCloseModal();
    }
  };

  const exportExcelModalContent = (
    <Form onFinish={onFinish} form={form} hideRequiredMark={true}>
      <Row gutter={25}>
        <Col span={24}>
          <DatePicker.RangePicker
            placeholder={[translate('from'), translate('to')]}
            value={rangeValue}
            onChange={(pickerDates) => setRangeValue(pickerDates)}
            style={{ width: '100%' }}
          />
        </Col>
      </Row>
    </Form>
  );

  const footerProps = {
    onCloseModal,
    cancelText: translate('cancel'),
    okText: translate('export'),
    onOk: form.submit,
  };

  return (
    <Modal
      title={translate('exportConversationsToXlsx')}
      visible={visible}
      content={exportExcelModalContent}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default ExportExcelModal;
