import React from 'react';
import { PrinterOutlined, FileExcelOutlined } from '@ant-design/icons';
import './ActionIcons.scss';

interface IActionIconsProps {
  endIcon?: JSX.Element;
  onPrinterClick?: () => void;
  onExcelClick?: () => void;
}

const ActionIcons: React.FC<IActionIconsProps> = ({ endIcon, onPrinterClick, onExcelClick }) => (
  <div className="action-icons">
    <PrinterOutlined onClick={onPrinterClick} />
    <FileExcelOutlined onClick={onExcelClick} />
    {endIcon}
  </div>
);

export default ActionIcons;
