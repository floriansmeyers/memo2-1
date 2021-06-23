import { useTranslation } from './useTranslation';

export const useGetFormInputRequiredRule = (text: string = 'form.isrequired') => {
  const translate = useTranslation();

  return { required: true, message: translate(text) };
};
