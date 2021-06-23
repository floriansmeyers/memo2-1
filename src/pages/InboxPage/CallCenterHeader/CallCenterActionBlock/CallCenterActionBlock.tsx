import React, { useState } from 'react';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import { ActionIcons, Button } from 'components';
import { ButtonTypes, useTranslation } from 'utils';
import GeneratePdfModal from '../../InboxModals/GeneratePdfModal';
import ExportExcelModal from '../../InboxModals/ExportExcelModal';
import './CallCenterActionBlock.scss';

const CallCenterActionBlock: React.FC = () => {
  const translate = useTranslation();
  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  const [excelModalVisible, setExcelModalVisible] = useState(false);

  return (
    <div className="call-center-title-actions">
      <Button icon={<PlusOutlined />} text={translate('newMessage')} type={ButtonTypes.LightBlue} />
      <GeneratePdfModal visible={pdfModalVisible} onCloseModal={() => setPdfModalVisible(false)} />
      <ExportExcelModal
        visible={excelModalVisible}
        onCloseModal={() => setExcelModalVisible(false)}
      />
      <ActionIcons
        onPrinterClick={() => setPdfModalVisible(true)}
        onExcelClick={() => setExcelModalVisible(true)}
        endIcon={<FilterOutlined />}
      />
    </div>
  );
};

export default CallCenterActionBlock;
