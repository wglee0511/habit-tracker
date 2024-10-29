import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import TopNavigation from 'src/container/common/TopNavigation';
import BottomNavigation from 'src/container/Main/BottomNavigation';
import { useSystemStore } from 'src/stores';
import { customScrollBar } from 'src/themes/style';

const S = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;

    ${customScrollBar};
  `,
};

const Main = () => {
  const { isDarkTheme } = useSystemStore();

  const onClickThemeButton = useCallback(() => {
    useSystemStore.setState({ isDarkTheme: !isDarkTheme });
  }, [isDarkTheme]);

  return (
    <S.Container>
      <TopNavigation
        name="test"
        trailingIcon={isDarkTheme ? 'LightMode' : 'DarkMode'}
        onClickTrailingButton={onClickThemeButton}
      />
      <BottomNavigation />
    </S.Container>
  );
};

export default Main;
