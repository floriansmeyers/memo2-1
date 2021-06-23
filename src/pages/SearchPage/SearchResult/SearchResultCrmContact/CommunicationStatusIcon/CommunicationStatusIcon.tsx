import * as React from 'react';
import { CustomerCrmContactCommunicationStatusses, useGetThemeQuery } from 'models/graphql';
import { Spin, Tooltip } from 'antd';
import { MehOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';

interface IProps {
  status: CustomerCrmContactCommunicationStatusses;
  condition?: string;
  type: 'forward' | 'passThrough';
}

export const CommunicationStatusIcon: React.FC<IProps> = ({ status, condition, type }) => {
  const { data: themeData, loading: themeLoading, error: themeError } = useGetThemeQuery();

  const getColor = (_status: CustomerCrmContactCommunicationStatusses): string => {
    if (themeData?.theme) {
      switch (_status) {
        case CustomerCrmContactCommunicationStatusses.Always:
          return themeData!.theme.colors.success;
        case CustomerCrmContactCommunicationStatusses.Never:
          return themeData!.theme.colors.error;
        default:
          return themeData!.theme.colors.warning;
      }
    }

    return '';
  };

  const getIconType = () => {
    switch (type) {
      case 'forward':
        return <PhoneOutlined style={{ color: getColor(status) }} />;
      case 'passThrough':
        return <MessageOutlined style={{ color: getColor(status) }} />;
      default:
        return <MehOutlined style={{ color: getColor(status) }} />;
    }
  };

  return (
    <React.Fragment>
      {themeLoading && <Spin size="small" />}
      {!themeLoading && themeData?.theme && (
        <div>
          {getIconType()}
          {condition && <Tooltip title={condition} />}
        </div>
      )}
    </React.Fragment>
  );
};
