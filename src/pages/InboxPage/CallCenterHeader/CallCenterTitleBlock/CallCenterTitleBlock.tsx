import React, { Dispatch, SetStateAction } from 'react';
import { PicRightOutlined, PicCenterOutlined } from '@ant-design/icons';
import { useTranslation, mockCallCenterHeaderMessages } from 'utils';
import CheckBoxBlock, { FilterCb } from '../CheckBoxBlock/CheckBoxBlock';
import './CallCenterTitleBlock.scss';

export interface ICallCenterTitleBlockProps {
  singleMessageView: boolean;
  setSingleMessageView: (singleMessageView: boolean) => void;
  toggleCheckbox: Dispatch<SetStateAction<boolean>>;
  allChecked: boolean;
  checkByFilter: (filter: FilterCb) => void;
}

const CallCenterTitleBlock: React.FC<ICallCenterTitleBlockProps> = ({
  singleMessageView,
  setSingleMessageView,
  toggleCheckbox,
  allChecked,
  checkByFilter,
}) => {
  const translate = useTranslation();
  const showDefault = (): void => setSingleMessageView(false);
  const showSingleMessage = (): void => setSingleMessageView(true);

  return (
    <div className="call-center-title-block">
      <div className="call-center-title-left">
        {singleMessageView && (
          <CheckBoxBlock
            checkByFilter={checkByFilter}
            checked={allChecked}
            toggleCheckbox={toggleCheckbox}
          />
        )}
        <div className="call-center-title">
          {translate('allMessages')}
          <span className="call-center-messages-count">{mockCallCenterHeaderMessages}</span>
        </div>
      </div>
      <div className="call-center-title-right">
        <span role="button" className="view-button" onClick={showDefault} tabIndex={-1}>
          <PicRightOutlined />
        </span>
        <span role="button" className="view-button" onClick={showSingleMessage} tabIndex={0}>
          <PicCenterOutlined />
        </span>
      </div>
    </div>
  );
};

export default CallCenterTitleBlock;
