import React, { useMemo } from 'react';

import styled from '@emotion/styled';
import Button from 'src/components/Button';
import Icon from 'src/components/Icons';
import { BOTTOM_NAVIGATION_Z_INDEX, ROUTINE_MANAGING, ROUTINE_TRACKING } from 'src/lib/constants';
import { MainBottomBarType } from 'src/page/Main/type';
import { useThemeStore } from 'src/stores';
import { COLORS } from 'src/themes/colors';
import { RADIUS } from 'src/themes/radius';

const S = {
  Container: styled.div`
    display: flex;
    width: 400px;
    border-radius: ${RADIUS.xxl};
    padding: 5px 5px;

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  `,
  Button: styled.button<{ clickcolor: string }>`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    border-radius: ${RADIUS.xxl};
    transition: all 0.5s;
    cursor: pointer;

    :hover {
      background-color: ${COLORS.grey500};
    }

    :active {
      background-color: ${(props) => props.clickcolor};
    }
  `,
};

const BottomNavigation = ({
  tab,
  onClickBottomTab,
}: {
  tab: MainBottomBarType;
  onClickBottomTab: (selectedTab: MainBottomBarType) => void;
}) => {
  const isManaging = useMemo(() => tab === ROUTINE_MANAGING, [tab]);
  const { textColor, secondBackgroundColor } = useThemeStore();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 12,
        display: 'flex',
        justifyContent: 'center',
        zIndex: BOTTOM_NAVIGATION_Z_INDEX,
        width: '100%',
      }}
    >
      <S.Container style={{ backgroundColor: secondBackgroundColor }}>
        <Button
          isSelected={isManaging}
          onClick={() => onClickBottomTab(ROUTINE_MANAGING)}
        >
          <Icon
            icon="Calendar"
            size={26}
            color={textColor}
          />
        </Button>
        <Button
          isSelected={!isManaging}
          onClick={() => onClickBottomTab(ROUTINE_TRACKING)}
        >
          <Icon
            icon="CheckboxCircleLine"
            size={26}
            color={textColor}
          />
        </Button>
      </S.Container>
    </div>
  );
};

export default BottomNavigation;
