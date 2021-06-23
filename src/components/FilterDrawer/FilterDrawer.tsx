import React, { useEffect, useState } from 'react';
import { Drawer, Form, Button, Col, Radio, Row, Select } from 'antd';
import { useTranslation } from 'utils';
import { getStartAndEndDay } from 'utils/global/getStartAndEndDay';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { channelOptions, IPeriodOptions, PeriodEnum, statusOptions } from './filterDefaultSettings';
import './FilterDrawer.scss';

const { Option } = Select;
const DatePickerFns = generatePicker(dateFnsGenerateConfig);

const FilterDrawer = () => {
  const [visible, setVisible] = useState(true);
  const [periodDate, setPeriodDate] = useState('');
  const translate = useTranslation();
  const [form] = Form.useForm();

  const onClose = () => {
    setVisible(false);
  };

  const onChangePeriodHandler = (period: string) => {
    setPeriodDate(period);
  };

  const onFinish = () => {
    setVisible(false);
  };

  const periodOptions: IPeriodOptions[] = [
    {
      key: PeriodEnum.TODAY,
      label: translate('today'),
      values: `${getStartAndEndDay()}, ${getStartAndEndDay()}`,
    },
    {
      key: PeriodEnum.YESTERDAY,
      label: translate('yesterday'),
      values: getStartAndEndDay(1),
    },
    {
      key: PeriodEnum.THREE_DAYS,
      label: translate('last_days', { days: 3 }),
      values: getStartAndEndDay(3),
    },
    {
      key: PeriodEnum.SEVEN_DAYS,
      label: translate('last_days', { days: 7 }),
      values: getStartAndEndDay(7),
    },
    {
      key: PeriodEnum.THIRTY_DAYS,
      label: translate('last_days', { days: 30 }),
      values: getStartAndEndDay(30),
    },
    {
      key: PeriodEnum.THREE_MONTH,
      label: translate('last_months', { months: 3 }),
      values: getStartAndEndDay(90),
    },
  ];

  const dateForRangePicker = periodOptions.find((option) => option.key === periodDate)?.values;

  useEffect(() => {
    if (dateForRangePicker) {
      form.setFieldsValue({
        date: [
          new Date(dateForRangePicker.split(',')[0].trim()),
          new Date(dateForRangePicker.split(',')[1].trim()),
        ],
      });
    }
  }, [form, periodDate]);

  return (
    <div className="filter">
      <Drawer
        title="Filter options"
        destroyOnClose={true}
        className="filter-drawer"
        width={720}
        onClose={onClose}
        visible={visible}
        getContainer=".filter"
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div className="filter-drawer__actions">
            <Button onClick={onClose}>Remove filters</Button>
            <Button onClick={onFinish} type="primary">
              Confirm
            </Button>
          </div>
        }
      >
        <Form form={form} layout="vertical">
          <Row>
            <Col span={24}>
              <Form.Item name="channel">
                <Select placeholder="All channels">
                  {channelOptions.map((option) => (
                    <Option key={option} value={option}>
                      {translate(option)}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="status">
                <Select placeholder="All statuses">
                  {statusOptions.map((status) => (
                    <Option key={status} value={status}>
                      {translate(status)}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item className="read" name="read">
                <Radio.Group>
                  <Radio.Button value={translate('read')}>{translate('read')}</Radio.Button>
                  <Radio.Button value={translate('unread')}>{translate('unread')}</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="period">
                <Select onChange={onChangePeriodHandler} placeholder="Select period">
                  {periodOptions.map((period) => (
                    <Option key={period.label} value={period.key}>
                      {period.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="date">
                <DatePickerFns.RangePicker />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
