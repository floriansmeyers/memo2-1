import React from 'react';
import { Spin } from 'antd';

export default function Fallback() {
  return (
    <div className="router-lazy-spin">
      <Spin tip="Loading..." />
    </div>
  );
}
