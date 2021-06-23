import { useGetDefaultLocaleQuery } from 'models/graphql';

export const useGetDefaultLocale = () => {
  const { data, error, loading } = useGetDefaultLocaleQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  return {
    defaultLocale: data && data.defaultLocale ? data.defaultLocale : [],
    defaultLocaleLoading: loading,
    defaultLocaleError: error,
  };
};
