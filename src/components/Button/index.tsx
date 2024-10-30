import React, { useMemo } from 'react';

import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useThemeStore } from 'src/stores';
import { COLORS } from 'src/themes/colors';
import { RADIUS } from 'src/themes/radius';

import { ButtonProps } from './type';

const S = {
  Container: styled.button<{ clickcolor: string; backgroundcolor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    border-radius: ${RADIUS.xxl};
    transition: all 0.5s;
    background-color: ${(props) => props.backgroundcolor};
    cursor: pointer;

    :hover {
      background-color: ${COLORS.grey500};
    }

    :active {
      background-color: ${(props) => props.clickcolor};
    }
  `,
};

const Button = ({
  width,
  isSelected = false,
  theme = 'secondary',
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const { thirdBackgroundColor, secondBackgroundColor } = useThemeStore();

  const innerStyle = isNil(width) ? { flex: 1 } : { width };

  const { secondBgColor, thirdBgColor } = useMemo(() => {
    switch (theme) {
      case 'primary':
        return { secondBgColor: COLORS.primary300, thirdBgColor: COLORS.primary200 };
      case 'errorPrimary':
        return { secondBgColor: COLORS.red300, thirdBgColor: COLORS.red200 };
      default:
        return { secondBgColor: secondBackgroundColor, thirdBgColor: thirdBackgroundColor };
    }
  }, [secondBackgroundColor, theme, thirdBackgroundColor]);

  return (
    <S.Container
      type="button"
      clickcolor={thirdBackgroundColor}
      backgroundcolor={isSelected ? thirdBgColor : secondBgColor}
      style={{ ...innerStyle }}
      {...props}
    >
      {children}
    </S.Container>
  );
};

export default Button;
