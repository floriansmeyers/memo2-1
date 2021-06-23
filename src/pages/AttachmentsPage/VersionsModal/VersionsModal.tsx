import React from 'react';
import { CustomerAttachmentWithVersions } from 'models/graphql';
import { Button, Modal } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import './VersionsModal.scss';

interface IVersionsModalProps {
  visible: boolean;
  onCancel: () => void;
  getDateNoTime: (date: string) => string;
  attachmentVersions: CustomerAttachmentWithVersions | null;
}

const VersionsModal: React.FC<IVersionsModalProps> = ({
  visible,
  onCancel,
  getDateNoTime,
  attachmentVersions,
}) => {
  const translate = useTranslation();

  const versionsModalContent = (
    <div className="attachments-versions-modal">
      <div className="table">
        <div className="tr">
          <div className="tc th">{translate('version')}</div>
          <div className="tc th">{translate('validFrom')}</div>
          <div className="tc th">{translate('validTill')}</div>
        </div>
        {attachmentVersions != null &&
          attachmentVersions.versions.map((attachment) => (
            <a href={attachment.attachment.url} download className="tr" key={attachment.id}>
              <span className="tc">
                Version {attachment.version}{' '}
                {attachment.id === attachmentVersions.id ? `(${translate('current')})` : ''}
              </span>
              <span className="tc">{getDateNoTime(attachment.validFrom)}</span>
              <span className="tc">{getDateNoTime(attachment.validTill)}</span>
            </a>
          ))}
      </div>
    </div>
  );

  const versionsModalFooter = (
    <Button text={translate('close')} type={ButtonTypes.White} onClick={onCancel} />
  );

  return (
    <Modal
      title={`${translate('versions')} - ${
        attachmentVersions != null ? attachmentVersions.name : ''
      }`}
      visible={visible}
      content={versionsModalContent}
      onCancel={onCancel}
      footer={versionsModalFooter}
    />
  );
};

export default VersionsModal;
