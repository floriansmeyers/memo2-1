import React, { useState } from 'react';
import { Divider, Alert } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { HddOutlined, ExportOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { CustomerAttachmentWithVersions, useGetCustomerAttachmentsQuery } from 'models/graphql';
import { ActionIcons, PageHeader, Table } from 'components';
import { useTranslation } from 'utils';
import UploadModal from './UploadModal/UploadModal';
import VersionsModal from './VersionsModal/VersionsModal';
import './AttachmentsPage.scss';

const AttachmentsPage: React.FC = () => {
  const translate = useTranslation();

  const [visible, setVisible] = useState(false);
  const [versionsVisible, setVersionsVisible] = useState(false);
  const [fileType, setFileType] = useState('');
  const [attachmentToEdit, setAttachmentToEdit] = useState<CustomerAttachmentWithVersions | null>(
    null,
  );
  const [
    attachmentVersions,
    setAttachmentVersions,
  ] = useState<CustomerAttachmentWithVersions | null>(null);

  const { data, loading, refetch } = useGetCustomerAttachmentsQuery({});

  const getDateNoTime = (date: string) => format(new Date(date), 'dd / MM / yyyy');

  const openUpdateModal = (attachment: CustomerAttachmentWithVersions) => {
    setFileType(attachment.type);
    setVisible(true);
    setAttachmentToEdit(attachment);
  };

  const onCloseModal = () => {
    setVisible(false);
    setAttachmentToEdit(null);
    setFileType('');
    refetch();
  };

  const handleOpenAttachmentModel = (attachment: CustomerAttachmentWithVersions) => {
    setAttachmentVersions(attachment);
    setVersionsVisible(true);
  };

  const handleCloseAttachmentModel = () => {
    setVersionsVisible(false);
    setAttachmentVersions(null);
  };

  const attachmentsColumns: ColumnsType<CustomerAttachmentWithVersions> = [
    {
      title: translate('name'),
      dataIndex: 'name',
      key: 'name',
      sorter: {
        compare: (a: CustomerAttachmentWithVersions, b: CustomerAttachmentWithVersions) =>
          a.name.localeCompare(b.name),
        multiple: 2,
      },
      render: (_text, record) => (
        <a
          role="button"
          className="status-indicator"
          href={record.attachment.url}
          target="_blank"
          rel="noreferrer"
          download
        >
          <span
            className="status-dot"
            style={{ backgroundColor: record.active ? 'green' : 'red' }}
          />
          {record.name}
        </a>
      ),
    },
    {
      title: translate('validFrom'),
      dataIndex: 'validFrom',
      key: 'validFrom',
      render: (record) => getDateNoTime(record),
      sorter: {
        compare: (a: CustomerAttachmentWithVersions, b: CustomerAttachmentWithVersions) =>
          a.validFrom.localeCompare(b.validFrom),
        multiple: 2,
      },
    },
    {
      title: translate('validTill'),
      dataIndex: 'validTill',
      key: 'validTill',
      render: (record) => getDateNoTime(record),
      sorter: {
        compare: (a: CustomerAttachmentWithVersions, b: CustomerAttachmentWithVersions) =>
          a.validTill.localeCompare(b.validTill),
        multiple: 2,
      },
    },
    {
      key: 'edit',
      dataIndex: 'edit',
      render: (_text, record) => (
        <div className="attachments-page__table-actions">
          <div
            className="table-action"
            role="button"
            aria-label="test"
            tabIndex={0}
            onClick={() => handleOpenAttachmentModel(record)}
          >
            <HddOutlined />
            <span className="table-action__text">{translate('versions')}</span>
          </div>
          <Divider type="vertical" />
          <div
            className="table-action"
            role="button"
            aria-label="test"
            tabIndex={0}
            onClick={() => openUpdateModal(record)}
          >
            <ExportOutlined />
            <span className="table-action__text"> {translate('upload new document')}</span>
          </div>
        </div>
      ),
    },
  ];

  const hasOutdatedDocuments = data?.customerAttachments.items.some(
    (attachment) => !attachment.active,
  );

  return (
    <div className="attachments-page">
      <PageHeader title={translate('attachments')} actions={<ActionIcons />} />

      {hasOutdatedDocuments && (
        <>
          <Alert message={translate('outdated documents')} type="error" />
          <br />
        </>
      )}
      <Table
        rowKey="addressBook"
        columns={attachmentsColumns}
        data={data?.customerAttachments.items}
        loading={loading}
      />
      <VersionsModal
        visible={versionsVisible}
        onCancel={handleCloseAttachmentModel}
        getDateNoTime={getDateNoTime}
        attachmentVersions={attachmentVersions}
      />
      <UploadModal
        title={`${translate('newAttachment')} ${attachmentToEdit ? attachmentToEdit.name : ''}`}
        visible={visible}
        onCloseModal={onCloseModal}
        fileType={fileType}
      />
    </div>
  );
};

export default AttachmentsPage;
