import React from 'react';

import styled from '@emotion/styled';
import Icon from 'src/Icons';
import { BOTTOM_NAVIGATION_Z_INDEX } from 'src/lib/constants';
import { useThemeStore } from 'src/stores';
import { COLORS, SELECTED_COLOR } from 'src/themes/colors';
import { RADIUS } from 'src/themes/radius';

const S = {
  Container: styled.div`
    display: flex;
    width: 400px;
    border-radius: ${RADIUS.xxl};
    padding: 10px 10px;

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  `,
  Button: styled.button`
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
      background-color: ${SELECTED_COLOR};
    }
  `,
};

const BottomNavigation = () => {
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
        <S.Button>
          <Icon
            icon="Calendar"
            size={32}
            color={textColor}
          />
        </S.Button>
        <S.Button>
          <Icon
            icon="Progress"
            size={32}
            color={textColor}
          />
        </S.Button>
      </S.Container>
    </div>
  );
};

export default BottomNavigation;
