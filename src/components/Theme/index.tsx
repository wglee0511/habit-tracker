import React, { PropsWithChildren, useLayoutEffect } from 'react';

import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useSystemStore, useThemeStore, useToastStore } from 'src/stores';
import { darkThemeState, lightThemeState } from 'src/stores/theme';

import Toast from '../Toast';

const S = {
  Container: styled.div`
    flex: 1;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s;
  `,
};

const Theme = ({ children }: PropsWithChildren) => {
  const { isDarkTheme } = useSystemStore();
  const { backgroundColor } = useThemeStore();
  const { isVisible, message, close } = useToastStore();

  useLayoutEffect(() => {
    const { userAgent } = window.navigator;
    console.log('userAgent: ', userAgent);
    if (isNil(isDarkTheme)) {
      const isDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      useSystemStore.setState({ isDarkTheme: isDarkMode });
      useThemeStore.setState(isDarkMode ? darkThemeState : lightThemeState);
    } else {
      useThemeStore.setState(isDarkTheme ? darkThemeState : lightThemeState);
    }
  }, [isDarkTheme]);

  return (
    <S.Container style={{ backgroundColor, flex: 1 }}>
      {isVisible && (
        <Toast
          message={message}
          onCloseToast={close}
        />
      )}
      {children}
    </S.Container>
  );
};

export default Theme;
