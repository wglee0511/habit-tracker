import { COLORS } from 'src/themes/colors';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ThemeValueType = {
  textColor: string;
  backgroundColor: string;
  secondBackgroundColor: string;
  thirdBackgroundColor: string;
  placeHolderColor: string;
};

type ThemeType = ThemeValueType & {};

export const lightThemeState: ThemeValueType = {
  textColor: COLORS.grey900,
  backgroundColor: COLORS.grey100,
  secondBackgroundColor: COLORS.grey200,
  thirdBackgroundColor: COLORS.grey300,
  placeHolderColor: COLORS.grey700,
};

export const darkThemeState: ThemeValueType = {
  textColor: COLORS.grey100,
  backgroundColor: COLORS.grey900,
  secondBackgroundColor: COLORS.grey800,
  thirdBackgroundColor: COLORS.grey700,
  placeHolderColor: COLORS.grey300,
};

export const useThemeStore = create<ThemeType>()(devtools(() => ({ ...darkThemeState })));
