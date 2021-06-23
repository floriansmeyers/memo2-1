import { PrimitiveType, FormatXMLElementFn } from 'intl-messageformat';
import { useIntl } from 'react-intl';

export const useTranslation = () => {
  // TODO - make all id's in translations camelCase

  const { formatMessage } = useIntl();

  return (
    id: string,
    param:
      | Record<string, PrimitiveType | FormatXMLElementFn<string, string>>
      | undefined = undefined,
  ) => formatMessage({ id }, param);
};
