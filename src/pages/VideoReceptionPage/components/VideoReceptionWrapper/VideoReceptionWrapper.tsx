import React from 'react';
import { Form } from 'antd';
import './VideoReceptionWrapper.scss';

interface IVideoReceptionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const VideoReceptionWrapper: React.FC<IVideoReceptionWrapperProps> = ({ title, children }) => (
  <div className="video-reception__section">
    <div className="video-reception__section-header">
      <span className="video-reception__header-title">{title} </span>
    </div>
    <div className="video-reception__section-main">
      <Form.Item className="video-reception__content">{children}</Form.Item>
    </div>
  </div>
);

export default VideoReceptionWrapper;
