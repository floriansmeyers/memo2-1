import { useGetCustomerCrmContactsQuery } from 'models/graphql';

export const useGetCustomerCrmContacts = () => {
  const { data, error, loading } = useGetCustomerCrmContactsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  return {
    customerCrmContacts: data?.customerCrmContacts,
    customerCrmContactsLoading: loading,
    customerCrmContactsError: error,
  };
};
