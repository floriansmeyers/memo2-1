import * as React from 'react';
import { SearchAttachment, Attachment } from 'models/graphql';
import { PaperClipOutlined } from '@ant-design/icons';
import { useTranslation } from 'utils';
import './SearchResultAttachement.scss';

interface IProps {
  item: SearchAttachment;
}

export const SearchResultAttachment: React.FC<IProps> = ({ item }) => {
  const { attachment } = item;
  const { url } = attachment as Attachment;
  const translate = useTranslation();

  return (
    <div className="result-card attachment">
      <div
        className="attachment__inner"
        role="button"
        tabIndex={0}
        onClick={() => {
          window.open(
            url,
            'popUpWindow',
            'height=700,width=900,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes',
          );
        }}
      >
        <div className="attachment-info">
          <PaperClipOutlined />
          <p>{attachment?.fileName || translate('noFilename')}</p>
        </div>
        <div>{translate('clickToDownload')}</div>
      </div>
    </div>
  );
};
