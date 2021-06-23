import React, { useEffect, useMemo } from 'react';
import { Form, Input, message, Row, Select } from 'antd';
import { User } from 'oidc-client';
import { ButtonTypes, useTranslation } from 'utils';
import { CreateContactRequestInput, useSendContactRequestMutation } from 'models/graphql';
import { Button } from 'components';
import useLocalStorage from 'utils/hooks/useLocalStorage.hook';
import './ContactPage.scss';

const { Option } = Select;

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();
  const translate = useTranslation();
  const { 0: user } = useLocalStorage<User>('user');
  const [sendContactRequest, { loading }] = useSendContactRequestMutation();

  const currentUser = user?.profile;

  const subjects = useMemo(
    () => [
      {
        id: '1',
        text: translate('feedback'),
        value: 'Feedback',
      },
      {
        id: '2',
        text: translate('bug'),
        value: 'Bug',
      },
      {
        id: '3',
        text: translate('idea'),
        value: 'Idee',
      },
    ],
    [],
  );

  const onFinish = async (values: CreateContactRequestInput) => {
    const result = await sendContactRequest({
      variables: {
        input: values,
      },
    });
    if (result.errors) {
      message.success(translate('errorOccured'));
    }
    if (result.data) {
      message.success(translate('request has been send'));
      form.resetFields(['subject', 'message']);
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      name: `${currentUser?.given_name} ${currentUser?.family_name}`,
      email: currentUser?.email,
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="contact__title">{translate('contact us')}</h1>
      </div>
      <div className="contact-body">
        {currentUser ? (
          <Form form={form} className="contact-form" name="contact-form" onFinish={onFinish}>
            <Row className="horizontal-items">
              <Form.Item
                className="half-width"
                label={translate('first and last name')}
                name="name"
                rules={[{ required: true, message: translate('form.isrequired') }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                className="half-width"
                label={translate('email')}
                name="email"
                rules={[{ required: true, message: translate('form.isrequired') }]}
              >
                <Input />
              </Form.Item>
            </Row>
            <Form.Item
              label={translate('subject')}
              name="subject"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select>
                {subjects.map((subject) => (
                  <Option value={subject.value} key={subject.id}>
                    {subject.text}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label={translate('MESSAGE')}
              name="message"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Input.TextArea autoSize={{ minRows: 3, maxRows: 10 }} />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={loading}
                text={translate('send')}
                type={ButtonTypes.Blue}
                htmlType="submit"
              />
            </Form.Item>
          </Form>
        ) : (
          <p>No info...</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
