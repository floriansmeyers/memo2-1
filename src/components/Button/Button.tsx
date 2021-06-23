import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonHTMLType } from 'antd/lib/button/button';
import { ButtonTypes } from 'utils';
import './Button.scss';

interface IButtonProps {
  icon?: JSX.Element;
  text: string;
  type: ButtonTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (value: any) => void;
  htmlType?: ButtonHTMLType;
  disabled?: boolean;
  loading?: boolean;
  key?: string;
}

const Button: React.FC<IButtonProps> = ({ icon, text, type, ...props }) => (
  <AntdButton className={`custom-button ${type}`} {...props}>
    {icon}
    {text}
  </AntdButton>
);

export default Button;
