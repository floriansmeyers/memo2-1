import { StorageUtils } from 'utils';
import { useGetCustomersQuery } from 'models/graphql';

export const useVisibleInvoice = (): { visible: boolean | undefined } => {
  const { data: customers } = useGetCustomersQuery();
  // TODO: remove 179 after implementing authentication
  const selectedCustomerId = StorageUtils.getCustomerId() || '911';
  const selectedCustomer = customers?.customers.items.find(({ id }) => id === selectedCustomerId);

  const showInvoices = selectedCustomer && selectedCustomer.parentId === null;

  return {
    visible: showInvoices,
  };
};
