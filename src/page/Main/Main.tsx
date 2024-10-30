import React, { useCallback, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import Icon from 'src/components/Icons';
import ResponsiveContainer from 'src/container/common/ResponsiveContainer';
import TopNavigation from 'src/container/common/TopNavigation';
import BottomNavigation from 'src/container/Main/BottomNavigation';
import MainManaging from 'src/container/Main/MainManaging';
import MainManagingFullPageModal from 'src/container/Main/MainManagingFullPageModal';
import MainTracking from 'src/container/Main/MainTracking';
import { ROUTINE_MANAGING, ROUTINE_TRACKING } from 'src/lib/constants';
import { hapticFeedback } from 'src/lib/device';
import { useModalStore, useSystemStore, useThemeStore } from 'src/stores';
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
  const [tab, setTab] = useState<MainBottomBarType>(ROUTINE_MANAGING);

  const { isDarkTheme } = useSystemStore();
  const { textColor } = useThemeStore();
  const { habitManagementModal } = useModalStore();

  const renderContents = useMemo(() => {
    switch (tab) {
      case ROUTINE_MANAGING:
        return <MainManaging />;
      case ROUTINE_TRACKING:
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
      <ResponsiveContainer>
        <Divider vertical={50} />
        {renderContents}
      </ResponsiveContainer>
      <BottomNavigation
        tab={tab}
        onClickBottomTab={onClickBottomTab}
      />
      {habitManagementModal.isVisible && <MainManagingFullPageModal />}
      <S.Add>
        <Button
          onClick={() => {
            useModalStore.setState({ habitManagementModal: { isVisible: true, routineKey: null } });
          }}
        >
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
