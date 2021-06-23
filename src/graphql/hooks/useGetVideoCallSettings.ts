import { useGetVideoCallSettingsQuery } from 'models/graphql';

export const useGetVideoCallSettings = () => {
  const { data, error, loading } = useGetVideoCallSettingsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  return {
    videoCallSettings: data?.videoCallSettings,
    videoCallSettingsLoading: loading,
    videoCallSettingsError: error,
  };
};
