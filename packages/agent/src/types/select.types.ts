export type ChatMode = 'normal' | 'cute';
export type ChatLanguage = 'ko' | 'en';
type SelectData<T> = { label: string; value: T };

export type SelectBox<T> = {
  title: string;
  data: SelectData<T>[];
};
export type ChatModeSelectBox = SelectBox<ChatMode>;
export type ChatLanguageSelectBox = SelectBox<ChatLanguage>;

export interface ChatSetting {
  mode: ChatMode;
  language: ChatLanguage;
}
