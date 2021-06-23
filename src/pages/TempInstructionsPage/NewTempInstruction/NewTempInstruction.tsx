import React, { useEffect } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { Form, message, Input } from 'antd';
import { ButtonTypes, useTranslation } from 'utils';
import { Button } from 'components';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import {
  InstructionTypes,
  useCreateCustomerTemporaryInstructionMutation,
  useGetCustomerTemporaryInstructionsLazyQuery,
  useUpdateCustomerTemporaryInstructionMutation,
} from 'models/graphql';
import './NewTempInstruction.scss';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

const { RangePicker } = DatePicker;

const NewTempInstruction = () => {
  const translate = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const { updateType, instructionId } = useParams() as {
    instructionId: string;
    updateType: string;
  };
  const [form] = Form.useForm();
  const params = new URLSearchParams(location.search);
  const instructionType = params.get('type');

  const [
    createCustomerTemporaryInstruction,
    { loading: createLoading, error, data },
  ] = useCreateCustomerTemporaryInstructionMutation();

  const [
    updateCustomerTemporaryInstruction,
    { loading: updateLoading },
  ] = useUpdateCustomerTemporaryInstructionMutation({
    awaitRefetchQueries: true,
    refetchQueries: ['getCustomerTemporaryInstructions'],
  });

  const [
    customerTemporaryInstructions,
    {
      data: temporaryInstructions,
      loading: customerTemporaryInstructionsLoading,
      error: customerTemporaryInstructionsError,
    },
  ] = useGetCustomerTemporaryInstructionsLazyQuery();

  useEffect(() => {
    if (instructionId) {
      customerTemporaryInstructions({
        variables: {
          filter: { ids: [parseInt(instructionId, 10)], type: instructionType as InstructionTypes },
        },
      });
    }
  }, []);

  const instruction = temporaryInstructions?.customerTemporaryInstructions?.items[0];

  useEffect(() => {
    if (instruction) {
      form.setFieldsValue({
        date: [new Date(instruction.validFrom!), new Date(instruction.validUntil!)],
        message: instruction.content,
      });
    }
  }, [instruction?.content]);

  const onFinish = async (values: { date: string[]; message: string }) => {
    let validFromDate = new Date();
    let validUntilDate = new Date();
    validFromDate.setHours(validFromDate.getHours() + 1);
    validUntilDate.setHours(validUntilDate.getHours() + 1);

    if (values?.date) {
      const [from, until] = values.date;
      validFromDate = new Date(from);
      validUntilDate = new Date(until);
    }

    const validFrom = validFromDate.toISOString();
    const validUntil = validUntilDate.toISOString();

    if (updateType === 'modify-instruction') {
      await updateCustomerTemporaryInstruction({
        variables: {
          id: parseInt(instructionId, 10),
          input: {
            // TODO: create a function for the values bellow according to the function from old app
            validFrom,
            validUntil,
            name: instruction?.name,
            content: values.message,
          },
        },
      });
      history.push(`/customer/instructions/temporary/?type=${instructionType}`);
    }

    if (updateType !== 'modify-instruction') {
      await createCustomerTemporaryInstruction({
        variables: {
          input: {
            // TODO: create a function for the values bellow according to the function from old app
            validFrom,
            validUntil,
            name: '',
            content: values.message,
          },
        },
      });
    }
    message.success(translate('createdSuccesfully'));
    history.push(`/customer/instructions/temporary/?type=${InstructionTypes.Active}`);
  };

  return (
    <Form form={form} onFinish={onFinish} className="new-instruction-form">
      <div className="new-instruction-header">
        <Link to="/customer/instructions/temporary">{translate('backToInstructions')}</Link>
        <div className="new-instruction__date-container">
          <Form.Item name="date">
            <RangePicker showTime format="YYYY/MM/DD HH:mm:ss" />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={updateLoading}
              text={translate('form.save')}
              type={ButtonTypes.Blue}
              htmlType="submit"
            />
          </Form.Item>
        </div>
      </div>
      <Form.Item name="message" className="new-instruction__text-area">
        <Input.TextArea style={{ fontFamily: 'monospace' }} rows={5} />
      </Form.Item>
    </Form>
  );
};

export default NewTempInstruction;
