import React, { useCallback, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { isEmpty } from 'lodash';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import Icon from 'src/components/Icons';
import Text from 'src/components/Text';
import ResponsiveContainer from 'src/container/common/ResponsiveContainer';
import TopNavigation from 'src/container/common/TopNavigation';
import BottomNavigation from 'src/container/Main/BottomNavigation';
import MainManaging from 'src/container/Main/MainManaging';
import MainManagingFullPageModal from 'src/container/Main/MainManagingFullPageModal';
import MainTracking from 'src/container/Main/MainTracking';
import { ROUTINE_ADD_TEXT, ROUTINE_MANAGING, ROUTINE_TRACKING } from 'src/lib/constants';
import { hapticFeedback } from 'src/lib/device';
import { useModalStore, useSystemStore, useThemeStore } from 'src/stores';
import { useRoutineStore } from 'src/stores/routine';
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
  const { routines } = useRoutineStore();

  const onClickThemeButton = useCallback(() => {
    useSystemStore.setState({ isDarkTheme: !isDarkTheme });
  }, [isDarkTheme]);

  const onClickBottomTab = (selectedTab: MainBottomBarType) => {
    setTab(() => selectedTab);
    hapticFeedback();
  };

  const onClickAddRoutineButton = () => {
    useModalStore.setState({ habitManagementModal: { isVisible: true, routineKey: null } });
  };

  const renderContents = useMemo(() => {
    if (isEmpty(routines)) {
      return (
        <Button
          width="100%"
          radius={RADIUS.base}
          onClick={onClickAddRoutineButton}
        >
          <Divider vertical={40} />
          <Text
            fontSize={16}
            fontWeight={600}
            color={textColor}
          >
            {ROUTINE_ADD_TEXT}
          </Text>
          <Divider vertical={40} />
        </Button>
      );
    }

    switch (tab) {
      case ROUTINE_MANAGING:
        return <MainManaging />;
      case ROUTINE_TRACKING:
        return <MainTracking />;
      default:
        return <MainManaging />;
    }
  }, [routines, tab, textColor]);

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
        <Button onClick={onClickAddRoutineButton}>
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
