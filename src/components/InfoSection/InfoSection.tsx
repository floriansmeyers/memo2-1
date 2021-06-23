import React from 'react';
import { IWrapperProps } from 'utils';
import './InfoSection.scss';

const InfoSection: React.FC<IWrapperProps> = ({ children }) => (
  <div className="info-section-container">{children}</div>
);

export default InfoSection;
