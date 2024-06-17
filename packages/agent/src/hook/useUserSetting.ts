import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ChatLanguage, ChatSetting } from '../types/select.types';

interface Props {
  onChange?: {
    language?: (value: ChatLanguage) => void;
  };
}

export const useUserSetting = ({ onChange }: Props) => {
  const { i18n } = useTranslation();
  const [setting, setSetting] = useState({
    // mode: 'normal',
    language: i18n.language as ChatLanguage,
  });

  const onKeyChange = (key: keyof ChatSetting) => (value: string) => {
    setSetting((prev) => ({ ...prev, [key]: value }));
    onChange[key] && onChange[key](value);
  };

  useEffect(() => {
    try {
      const localSetting: ChatSetting = JSON.parse(
        localStorage.getItem('chatSetting') as string
      );
      if (localSetting !== null) {
        (Object.keys(localSetting) as Array<keyof ChatSetting>).forEach(
          (key) => {
            onKeyChange(key)(localSetting[key]);
          }
        );
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveSetting = () => {
    localStorage.setItem('chatSetting', JSON.stringify(setting));
  };

  return { setting, saveSetting, onKeyChange };
};
