import React from 'react';
import { CustomerLocation, Scalars } from 'models/graphql';
import { Modal } from 'components';
import { getModalFooter } from 'utils';
import VideoReceptionModalContent from './VideoReceptionModalContent';
import './VideoReceptionModal.scss';

interface IVideoReceptionModalProps {
  visible: boolean;
  onCloseModal: () => void;
  defaultLanguage?: Scalars['String'];
  locations?: Array<CustomerLocation>;
}

const VideoReceptionModal: React.FC<IVideoReceptionModalProps> = ({
  visible,
  onCloseModal,
  defaultLanguage,
  locations,
}) => (
  <Modal
    className="video-reception-modal"
    visible={visible}
    content={<VideoReceptionModalContent defaultLanguage={defaultLanguage} locations={locations} />}
    onCancel={onCloseModal}
    footer={getModalFooter({ onOk: onCloseModal })}
  />
);

export default VideoReceptionModal;
