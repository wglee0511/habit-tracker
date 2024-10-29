import { ANDROID, IOS, WEB } from 'src/lib/constants';
import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

type SystemValueType = {
  isDarkTheme?: boolean;
  device?: typeof IOS | typeof ANDROID | typeof WEB;
  isMobile: boolean;
};

export type SystemType = SystemValueType & {};

const initialSystemState: SystemValueType = {
  isDarkTheme: undefined,
  device: 'Web',
  isMobile: false,
};

export const useSystemStore = create<SystemType>()(
  devtools(
    persist(() => ({ ...initialSystemState }), {
      name: 'system',
      storage: createJSONStorage(() => sessionStorage),
    }),
  ),
);
