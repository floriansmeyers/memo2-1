import React, { useEffect, useState } from 'react';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';
import { message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FileListItem, Button, Icon } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import fileType from 'file-type/browser';
import './FilePicker.scss';

export interface IFilePickerProps {
  acceptFileType?: string | null;
  value?: UploadFile[];
  messageId?: string;
  onFileListChanged(fileList: UploadFile[]): void;
}

const FilePicker: React.FC<IFilePickerProps> = ({
  onFileListChanged,
  value,
  acceptFileType,
  messageId,
}) => {
  const translate = useTranslation();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onRemoveFile = async (file: UploadFile) => {
    const newFileList = [...fileList];
    newFileList.splice(fileList.indexOf(file), 1);

    await changeFileList(newFileList);
  };

  const onChange = async (info: UploadChangeParam) => {
    await changeFileList(info.fileList);
  };

  const onBeforeUpload = () => false;

  const changeFileList = async (newFileList: UploadFile[]) => {
    if (acceptFileType != null) {
      const fileBuffer = await newFileList[0].originFileObj?.arrayBuffer();
      if (fileBuffer) {
        const uploadedFileType = await fileType.fromBuffer(fileBuffer);
        const regex = RegExp(uploadedFileType?.ext?.trim() || '');
        if (regex.test(acceptFileType)) {
          setFileList(newFileList);
          onFileListChanged(newFileList);
        } else {
          message.error(translate('error.incorrect_file_type'));
        }
      }
    } else {
      setFileList(newFileList);
      onFileListChanged(newFileList);
    }
  };

  useEffect(() => {}, [acceptFileType]);

  const selectFile = messageId || 'selectFile';

  return (
    <div className="file-picker">
      {value &&
        value.map((file) => <FileListItem key={file.name} file={file} onRemove={onRemoveFile} />)}
      {!value &&
        fileList.map((file) => (
          <FileListItem key={file.name} file={file} onRemove={onRemoveFile} />
        ))}

      <Upload
        multiple={true}
        style={{ width: '100%' }}
        accept={acceptFileType || '*'}
        fileList={[]}
        onChange={onChange}
        onRemove={onRemoveFile}
        beforeUpload={onBeforeUpload}
      >
        <Button
          text={translate(selectFile)}
          icon={<Icon name="incoming" />}
          type={ButtonTypes.LightBlue}
        />
      </Upload>
    </div>
  );
};

export default FilePicker;
