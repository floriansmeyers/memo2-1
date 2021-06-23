import { Spin } from 'antd';
import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
  <div className="loader">
    <Spin size="large" />
  </div>
);

export default Loader;
