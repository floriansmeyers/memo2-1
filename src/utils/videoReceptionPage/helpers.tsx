import React from 'react';
import { Form, Select } from 'antd';
import { Rule } from 'antd/lib/form';
import { FormInstance } from 'antd/es/form/Form';
import { CustomerLocation, CustomerScreenLocale, Maybe } from 'models/graphql';

const { Option } = Select;

export interface IVideoReceptionFields {
  name?: string;
  label?: string;
  rules?: Rule[];
  field: JSX.Element | Maybe<string>;
}

export interface IVideoReceptionSectionProps {
  form?: FormInstance;
  logoImage?: string;
  backgroundImage?: Maybe<string>;
  locale?: CustomerScreenLocale[];
  selectedLanguages?: string[];
  setSelectedLanguages?: (selectedLanguages: string[]) => void;
  locations?: CustomerLocation[];
}

export const renderFields = (fields: IVideoReceptionFields[]) =>
  fields.map(({ name, label, rules, field }) =>
    name ? (
      <Form.Item key={name} name={name} label={label} rules={rules}>
        {field}
      </Form.Item>
    ) : (
      <Form.Item key={label} label={label} rules={rules}>
        {field}
      </Form.Item>
    ),
  );

export const renderOptions = (options?: string[]) =>
  options?.map((option: string) => (
    <Option key={option} value={option}>
      {option}
    </Option>
  ));
