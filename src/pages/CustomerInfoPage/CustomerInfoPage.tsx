import React, { useState } from 'react';
import { Spin, Tabs } from 'antd';
import { PageHeader } from 'components';
import { StorageUtils, useTranslation } from 'utils';
import { CustomerContactInformationTypes, useGetCustomersWithInfoQuery } from 'models/graphql';
import CustomerInfoWelcomeSection from './CustomerInfoWelcomeSection/CustomerInfoWelcomeSection';
import CustomerInfoForm from './CustomerInfoForm/CustomerInfoForm';
import './CustomerInfoPage.scss';

const { TabPane } = Tabs;

const CustomerInfoPage: React.FC = () => {
  const customerId = StorageUtils.getCustomerId();
  const {
    data: customersData,
    loading: customersLoading,
    error: customersError,
  } = useGetCustomersWithInfoQuery({
    notifyOnNetworkStatusChange: true,
    variables: { filter: { ids: customerId ? [customerId] : [] } },
  });
  const [defaultActiveKey, setDefaultActiveKey] = useState('BUSINESS_1');

  const translate = useTranslation();
  const customerInfo = customersData?.customers?.items[0]?.info?.contactInformationList;
  const customerWelcomeMessage = customersData?.customers?.items[0]?.info?.welcomeMessage;

  if (customersError) {
    return <div>{customersError.message}</div>;
  }

  const onChangeTabHandler = (key: string) => {
    setDefaultActiveKey(key);
  };

  return (
    <div className="customer-info-page">
      <PageHeader title={translate('information')} />
      <CustomerInfoWelcomeSection message={customerWelcomeMessage || ''} />
      {customersLoading ? (
        <Spin size="small" />
      ) : (
        <Tabs defaultActiveKey={defaultActiveKey} onChange={onChangeTabHandler}>
          <TabPane tab="Business 1" key={CustomerContactInformationTypes.Business_1}>
            <CustomerInfoForm
              informationList={customerInfo}
              customerContactInformationType={CustomerContactInformationTypes.Business_1}
              customerId={customerId}
            />
          </TabPane>
          <TabPane tab="Business 2" key={CustomerContactInformationTypes.Business_2}>
            <CustomerInfoForm
              informationList={customerInfo}
              customerContactInformationType={CustomerContactInformationTypes.Business_2}
              customerId={customerId}
            />
          </TabPane>
          <TabPane tab="Private 1" key={CustomerContactInformationTypes.Private_1}>
            <CustomerInfoForm
              informationList={customerInfo}
              customerContactInformationType={CustomerContactInformationTypes.Private_1}
              customerId={customerId}
            />
          </TabPane>
          <TabPane tab="Private 2" key={CustomerContactInformationTypes.Private_2}>
            <CustomerInfoForm
              informationList={customerInfo}
              customerContactInformationType={CustomerContactInformationTypes.Private_2}
              customerId={customerId}
            />
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

export default CustomerInfoPage;
