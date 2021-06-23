import React, { useState } from 'react';
import { Select } from 'antd';
import { User } from 'oidc-client';
import { LANGUAGES } from '../../../constants';
import { appLanguageVar } from '../../../graphql/cache';
import {
  useGetCurrentUserQuery,
  useUpdateCurrentUserLocaleMutation,
} from '../../../models/graphql';
import { useTranslation } from '../../../utils';

interface ILanguagePickerProps {
  user?: User;
}

const LanguagePicker: React.FC<ILanguagePickerProps> = ({ user }) => {
  const [language, setLanguage] = useState('');

  const { data: currentUser, loading: currentUserLoading } = useGetCurrentUserQuery();
  const [updateUserLocale] = useUpdateCurrentUserLocaleMutation();

  const translate = useTranslation();

  const onChangeLanguageHandler = async (lang: string) => {
    appLanguageVar(lang);

    setLanguage(lang);

    if (user) {
      await updateUserLocale({
        variables: {
          locale: lang,
        },
      });
    }
  };

  return (
    <Select
      className="lang-select"
      loading={currentUserLoading}
      onChange={onChangeLanguageHandler}
      value={language || currentUser?.getCurrentUser.locale!}
    >
      {LANGUAGES.map((lang) => (
        <Select.Option key={lang.value} value={lang.key}>
          {translate(lang.value)}
        </Select.Option>
      ))}
    </Select>
  );
};

export default LanguagePicker;
