import React from 'react';
import { CloseOutlined, PaperClipOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';
import './FileListItem.scss';

interface IFileListItemProps {
  file: UploadFile;
  onRemove(file: UploadFile): void;
}

const FileListItem: React.FC<IFileListItemProps> = ({ file, onRemove }) => (
  <div className="file-list-item">
    <div className="file-info">
      <PaperClipOutlined />
      <p>{file.name}</p>
    </div>

    <CloseOutlined onClick={() => onRemove(file)} />
  </div>
);

export default FileListItem;
