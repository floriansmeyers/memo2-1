import React, { useState } from 'react';
import { Form, Col, Row } from 'antd';
import { useIntl } from 'react-intl';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { RangeValue } from 'rc-picker/lib/interface';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { format } from 'date-fns';
import { useMeccaConversationsByFilterQuery } from 'models/graphql';
import { getModalFooter, useTranslation } from 'utils';
import { Modal } from 'components';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

interface IGeneratePdfModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

const GeneratePdfModal: React.FC<IGeneratePdfModalProps> = ({ visible, onCloseModal }) => {
  const [form] = Form.useForm();
  const translate = useTranslation();
  const intl = useIntl();
  const [rangeValue, setRangeValue] = useState<RangeValue<Date>>([new Date(), new Date()]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: meccaConversations, error, loading, refetch } = useMeccaConversationsByFilterQuery({
    variables: { ids: [] },
    fetchPolicy: 'no-cache',
  });

  const onFinish = async (values: { name: string }) => {
    const [fromDate, toDate] = rangeValue || [null, null];
    if (fromDate && toDate) {
      const input = {
        startDate: fromDate.toISOString(),
        endDate: toDate.toISOString(),
      };

      setIsLoading(true);
      // eslint-disable-next-line new-cap
      const pdf = new jsPDF();
      const { data: conversations } = await refetch({
        ids: undefined,
        from: input.startDate,
        till: input.endDate,
      });

      const currentDate = format(new Date(), 'dd / MM / yyyy');
      pdf.setFontSize(10);
      pdf.text(currentDate, 10, 10);
      pdf.text('memoweb', 170, 10);

      autoTable(pdf, {
        head: [[translate('dateTime'), translate('MESSAGE'), translate('importance')]],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: conversations?.meccaConversationsByFilter?.map((el: any) => [
          format(new Date(el.createdAt), 'dd / MM / yyyy HH:mm'),
          `${el.unformattedText}`.split('<br />').join('\n'),
          translate(el.status),
        ]),
      });
      pdf.save(`${translate('MESSAGE')}_${intl.locale}.pdf`);
      setIsLoading(false);
      form.resetFields();
      onCloseModal();
    }
  };

  const generatePdfModalContent = (
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
    isLoading,
    cancelText: translate('cancel'),
    okText: translate('export'),
    onOk: form.submit,
  };

  return (
    <Modal
      // TODO: Get information from PM if the change of this title is correct
      title={translate('generateConversationsPrintVersion')}
      visible={visible}
      content={generatePdfModalContent}
      onCancel={onCloseModal}
      footer={getModalFooter(footerProps)}
    />
  );
};

export default GeneratePdfModal;
