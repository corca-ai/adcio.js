import { ChatProfileThemeEnum } from "@adcio/api/controller/v1";

export const HISTORY_BOX = {
  item_h: 85, // item height
  mih: 255, // 85(item height) * 3 items
  mah: 340, // 85(item height) * 5 items
};

export const AGENT_THEME_COLOR: Record<
  ChatProfileThemeEnum,
  { tintColor: string; shadeColor: string }
> = {
  lovely: { tintColor: "#FF78A5", shadeColor: "#FFE4F0" },
  warm: { tintColor: "#FFB800", shadeColor: "#FFE79B" },
  cool: { tintColor: "#8FD2FF", shadeColor: "#DCF5FF" },
  greenish: { tintColor: "#A8E956", shadeColor: "#D6FFCF" },
  modern: { tintColor: "#292929", shadeColor: "#989898" },
  simple: { tintColor: "#BFBFBF", shadeColor: "#EEEEEE" },
};

export const CHAT = {
  TOP_HEIGHT: 56,
} as const;
