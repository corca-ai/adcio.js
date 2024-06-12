import {
  ChatLanguageSelectBox,
  ChatModeSelectBox,
} from '../types/select.types';

export const SETUP_CHAT_MODE: ChatModeSelectBox = {
  title: 'start.setup.mode.title',
  data: [
    { label: 'start.setup.mode.data.normal', value: 'normal' },
    { label: 'start.setup.mode.data.cute', value: 'cute' },
  ],
};

export const SETUP_CHAT_LANGUAGE: ChatLanguageSelectBox = {
  title: 'start.setup.language.title',
  data: [
    { label: 'start.setup.language.data.ko', value: 'ko' },
    { label: 'start.setup.language.data.en', value: 'en' },
  ],
};
