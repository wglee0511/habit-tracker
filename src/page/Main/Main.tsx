import React, { useCallback, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import TopNavigation from 'src/container/common/TopNavigation';
import BottomNavigation from 'src/container/Main/BottomNavigation';
import MainManaging from 'src/container/Main/MainManaging';
import MainTracking from 'src/container/Main/MainTracking';
import Icon from 'src/Icons';
import { HABIT_MANAGING, HABIT_TRACKING } from 'src/lib/constants';
import { hapticFeedback } from 'src/lib/device';
import { useSystemStore, useThemeStore } from 'src/stores';
import { RADIUS } from 'src/themes/radius';
import { customScrollBar } from 'src/themes/style';

import { MainBottomBarType } from './type';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: scroll;

    ${customScrollBar};
  `,
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    justify-content: center;
  `,
  Content: styled.div`
    width: 600px;
    height: 100%;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  `,
  Add: styled.div`
    position: fixed;
    z-index: 1;
    bottom: 100px;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: ${RADIUS.circle};
  `,
};

const Main = () => {
  const [tab, setTab] = useState<MainBottomBarType>(HABIT_MANAGING);

  const { isDarkTheme } = useSystemStore();
  const { textColor } = useThemeStore();

  const renderContents = useMemo(() => {
    switch (tab) {
      case HABIT_MANAGING:
        return <MainManaging />;
      case HABIT_TRACKING:
        return <MainTracking />;
      default:
        return <MainManaging />;
    }
  }, [tab]);

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
      <S.Wrapper>
        <S.Content>
          <Divider vertical={50} />
          {renderContents}
        </S.Content>
      </S.Wrapper>
      <BottomNavigation
        tab={tab}
        onClickBottomTab={onClickBottomTab}
      />
      <S.Add>
        <Button onClick={() => {}}>
          <Icon
            icon="Add"
            size={26}
            color={textColor}
          />
        </Button>
      </S.Add>
    </S.Container>
  );
};

export default Main;
