import React, { useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'components';
import { useGetPairedChannelsQuery } from 'models/graphql';
import { ICommonColumns, useTranslation } from 'utils';
import AddChannelItem from '../ConnectionsPage/AddChannelItem/AddChannelItem';
import {
  SocialMediaFirstColumn,
  SocialMediaSecondColumn,
  SocialMediaThirdColumn,
} from './SocialMediaTableData';
import './SocialMediaSettingsPage.scss';

interface ISocialMediaColumns extends ICommonColumns {
  active: JSX.Element;
  secondColumn: JSX.Element;
  thirdColumn: JSX.Element;
}

const columns: ColumnsType<ISocialMediaColumns> = [
  {
    title: 'Active',
    dataIndex: 'active',
  },
  {
    title: '',
    dataIndex: 'secondColumn',
  },
  {
    title: '',
    dataIndex: 'thirdColumn',
  },
];

const SocialMediaSettingsPage: React.FC = () => {
  const { data: channels, loading: channelsLoading } = useGetPairedChannelsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  const getData = (): ISocialMediaColumns[] | undefined =>
    channels?.pairedChannels?.items.map(({ active, type, id, redirect, redirectDelay }) => ({
      key: id,
      active: <SocialMediaFirstColumn active={active} type={type} />,
      secondColumn: (
        <SocialMediaSecondColumn redirectDelay={redirectDelay} redirect={redirect} id={id} />
      ),
      thirdColumn: <SocialMediaThirdColumn id={id} active={active} />,
    }));

  return (
    <div className="social-media__settings-page">
      <AddChannelItem />
      <Table loading={channelsLoading} columns={columns} data={getData()} />
    </div>
  );
};

export default SocialMediaSettingsPage;
