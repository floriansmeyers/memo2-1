import React, { useEffect } from 'react';
import { Form, message, Select, Spin } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  CreateStandbyMutationVariables,
  StandbyNotifyChannels,
  UpdateStandbyInput,
  UpdateStandbyMutationVariables,
  useCreateStandbyMutation,
  useDeleteStandbyMutation,
  useGetCustomerCrmContactsQuery,
  useGetStandbyQuery,
  useUpdateStandbyMutation,
} from 'models/graphql';
import { useTranslation, ButtonTypes } from 'utils';
import { pad } from 'utils/global/pad';
import { Button } from 'components';
import './StandByServicePage.scss';

interface IForm {
  transferFrom: number;
  transferTo: number;
  untilFrom: number;
  untilTo: number;
  via: StandbyNotifyChannels[];
  forwardTo: number[];
}

const StandbyServicePage: React.FC = () => {
  const translate = useTranslation();
  const [form] = Form.useForm();

  const { data: standbyData, loading: standbyLoading } = useGetStandbyQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });
  const [updateStandby] = useUpdateStandbyMutation();
  const [createStandby] = useCreateStandbyMutation({
    refetchQueries: ['getStandby'],
    awaitRefetchQueries: true,
  });
  const [deleteStandby] = useDeleteStandbyMutation({
    refetchQueries: ['getStandby'],
    awaitRefetchQueries: true,
  });
  const { data } = useGetCustomerCrmContactsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  const standbyItems = standbyData?.standby.items;

  const convertLocalToUtc = (time: { hours: number; minutes: number }) => {
    const date = new Date();
    date.setHours(time.hours);
    return {
      ...time,
      hours: time.hours + date.getTimezoneOffset() / 60,
    };
  };

  const convertUtcHoursToLocal = (hours: number) => {
    const date = new Date();
    date.setHours(hours);
    return hours - date.getTimezoneOffset() / 60;
  };

  const onFinish = async (values: IForm) => {
    const { transferFrom, transferTo, untilFrom, untilTo, forwardTo, via } = values;

    const params: UpdateStandbyMutationVariables | CreateStandbyMutationVariables = {
      input: {
        from: convertLocalToUtc({ hours: transferFrom, minutes: transferTo }),
        to: convertLocalToUtc({ hours: untilFrom, minutes: untilTo }),
        notifyChannels: via,
        crmContactIds: forwardTo,
      },
    };

    let response;

    if (standbyItems?.length) {
      response = await updateStandby({
        variables: {
          id: standbyItems[0].id,
          input: params.input as UpdateStandbyInput,
        },
      });
    } else {
      response = await createStandby({
        variables: params,
      });
    }

    if (response?.data) {
      message.success(translate('standby.updated'));
    } else {
      message.error(translate('error.unknown'));
    }
  };

  useEffect(() => {
    if (standbyItems?.length) {
      form.setFieldsValue({
        transferFrom: convertUtcHoursToLocal(standbyItems[0].from.hours!) || 0,
        transferTo: standbyItems[0].from.minutes! || 0,
        untilFrom: convertUtcHoursToLocal(standbyItems[0].to.hours!) || 0,
        untilTo: standbyItems[0].to.minutes! || 0,
        forwardTo: (standbyItems[0].crmContacts || []).map((c) => c.id),
        via: standbyItems[0].notifyChannels || [],
      });
    }
  }, [standbyItems?.length, standbyLoading]);

  const onClickRemoveStandbyHandler = async () => {
    const response = await deleteStandby({
      variables: { id: standbyData?.standby.items[0].id! },
    });

    if (response?.data) {
      message.success(translate('standby.deleted'));
    } else {
      message.error(translate('error.unknown'));
    }
    form.resetFields();
  };

  return (
    <div className="standby">
      <div className="standby__inner">
        {standbyLoading ? (
          <Spin size="small" />
        ) : (
          <Form form={form} onFinish={onFinish} className="standby-form">
            <Form.Item
              label={translate('standby.forwardFrom')}
              name="transferFrom"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select>
                {Array.from(Array(24).keys()).map((hour) => (
                  <Select.Option key={hour} value={hour}>
                    {pad(hour, '0')}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <ArrowRightOutlined />
            <Form.Item
              name="transferTo"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select>
                {Array.from(Array(60).keys()).map((minute) => (
                  <Select.Option key={minute} value={minute}>
                    {pad(minute, '0')}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label={translate('standby.forwardUntil')}
              name="untilFrom"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select>
                {Array.from(Array(24).keys()).map((hour) => (
                  <Select.Option key={hour} value={hour}>
                    {pad(hour, '0')}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <ArrowRightOutlined />
            <Form.Item
              name="untilTo"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select>
                {Array.from(Array(60).keys()).map((minute) => (
                  <Select.Option key={minute} value={minute}>
                    {pad(minute, '0')}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              className="full-w"
              label={translate('standby.forwardTo')}
              name="forwardTo"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select mode="multiple">
                {data?.customerCrmContacts?.items.map((crmContact) => (
                  <Select.Option key={crmContact.id} value={crmContact.id}>
                    {crmContact.firstName} {crmContact.lastName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              className="full-w"
              label={translate('standby.forwardVia')}
              name="via"
              rules={[{ required: true, message: translate('form.isrequired') }]}
            >
              <Select mode="multiple">
                {Object.values(StandbyNotifyChannels)
                  .filter((v) => isNaN(Number(v)))
                  .map((channel) => (
                    <Select.Option key={channel} value={channel}>
                      {translate(`standby.${channel}`)}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <div className="standby-form__actions">
              {standbyItems?.length ? (
                <Form.Item>
                  <Button
                    type={ButtonTypes.White}
                    text={translate('form.delete')}
                    htmlType="button"
                    onClick={onClickRemoveStandbyHandler}
                  />
                </Form.Item>
              ) : null}
              <Form.Item>
                <Button text={translate('save')} type={ButtonTypes.Blue} htmlType="submit" />
              </Form.Item>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default StandbyServicePage;
