import React, { useEffect, useRef } from 'react';
import { Form, Spin, Input, message } from 'antd';
import { format } from 'date-fns';
import { ButtonTypes, useTranslation, Logger } from 'utils';
import {
  Message,
  SocialConversationModel,
  useSendSocialConversationTextMutation,
} from 'models/graphql';
import { scrollToBottom } from 'utils/global/scrollDivToBottom';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { EmojiData } from 'emoji-mart';
import { Button } from '../../../components';
import { EmojiBar } from '../../../components/EmojiBar/EmojiBar';
import './ConversationView.scss';

interface IProps {
  messages: SocialConversationModel;
  loading: boolean;
  conversationError: Error;
  conversationId: string;
}

const ConversationView: React.FC<IProps> = ({
  messages,
  loading,
  conversationError,
  conversationId,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const translate = useTranslation();
  const [sendConversationText] = useSendSocialConversationTextMutation();
  const [form] = Form.useForm();
  const textareaRef = useRef(null);

  const messagesList = messages?.messages;

  if (messagesList) {
    messagesList.sort(
      (a, b) => new Date(a.messageTime).valueOf() - new Date(b.messageTime).valueOf(),
    );
  }

  const renderContent = () => {
    if (conversationError) {
      return <p>Error: {conversationError.message}</p>;
    }
    if (loading) {
      return <Spin size="small" />;
    }

    return messagesList.map((msg: Message) => (
      <div key={msg.id} className={`conversation ${msg.external ? 'conversation--dif' : ''}`}>
        <div className="conversation__meta">
          <p className="conversation__name">{msg.sender.displayName}</p>
          <p className="conversation__content">{msg.content}</p>
        </div>
        <div className="conversation__time">
          <p className="conversation__date">
            {`${format(new Date(msg.messageTime), 'd LLL yyyy')}  ${format(
              new Date(msg.messageTime),
              'H : mm',
            )}`}
          </p>
        </div>
      </div>
    ));
  };

  const onEmojiAdded = (emoji: EmojiData) => {
    const prevTxt = form.getFieldsValue(['answer']).answer;

    if ('native' in emoji) {
      form.setFieldsValue(prevTxt ? { answer: prevTxt + emoji.native } : { answer: emoji.native });
    }
  };

  useEffect(() => {
    scrollToBottom(ref);
  }, [renderContent()]);

  const messageTime = new Date().toISOString();

  const onFinish = async (values: { answer: string }) => {
    const txt = values.answer;
    const input = {
      messageTime,
      content: txt,
    };

    try {
      await sendConversationText({
        variables: {
          input,
          id: conversationId,
        },
      });
    } catch (error) {
      message.error(translate('error.unknown'));
    }
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    Logger.error('Failed:', errorInfo);
  };

  return (
    <div className="conversations-outer">
      <div className="conversations" ref={ref}>
        {renderContent()}
      </div>
      <div className="conversations-answer">
        <Form
          form={form}
          name="answer-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="answer"
            rules={[{ required: true, message: 'Please input your answer!' }]}
          >
            <Input.TextArea
              ref={textareaRef}
              placeholder={translate('fillInYourAnswer')}
              rows={6}
            />
          </Form.Item>
          <EmojiBar
            inputRef={textareaRef}
            disabled={!messages?.canSendResponse}
            onEmojiAdded={onEmojiAdded}
          />
          <Form.Item>
            <Button
              disabled={!messages?.canSendResponse}
              type={ButtonTypes.Blue}
              htmlType="submit"
              text="Submit"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ConversationView;
