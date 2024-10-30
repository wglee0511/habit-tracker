import React, { useCallback, useState } from 'react';

import styled from '@emotion/styled';
import TopNavigation from 'src/container/common/TopNavigation';
import BottomNavigation from 'src/container/Main/BottomNavigation';
import { HABIT_MANAGING } from 'src/lib/constants';
import { hapticFeedback } from 'src/lib/device';
import { useSystemStore } from 'src/stores';
import { customScrollBar } from 'src/themes/style';

import { MainBottomBarType } from './type';

const S = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;

    ${customScrollBar};
  `,
};

const Main = () => {
  const [tab, setTab] = useState<MainBottomBarType>(HABIT_MANAGING);

  const { isDarkTheme } = useSystemStore();

  const onClickThemeButton = useCallback(() => {
    useSystemStore.setState({ isDarkTheme: !isDarkTheme });
  }, [isDarkTheme]);

  const onClickBottomTab = (selectedTab: MainBottomBarType) => {
    setTab(() => selectedTab);
    hapticFeedback();
  };

  return (
    <S.Container>
      <TopNavigation
        name={tab}
        trailingIcon={isDarkTheme ? 'LightMode' : 'DarkMode'}
        onClickTrailingButton={onClickThemeButton}
      />
      <BottomNavigation
        tab={tab}
        onClickBottomTab={onClickBottomTab}
      />
    </S.Container>
  );
};

export default Main;
