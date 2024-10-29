import React from 'react';

import styled from '@emotion/styled';

import * as Icons from '../icons';

import { PressableIconProps } from './type';

const S = {
  Container: styled.button`
    display: flex;
    outline: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
    }
  `,
};

/**
 * @component
 * 컬러셋이 지정되지 않고 단순 클릭 가능한 아이콘 컴포넌트
 *
 * @props
 * paddingSize: none: 0, xs: 4, s: 10, base: 12, lg: 16, xl: 20, xxl: 24
 *
 * @example
 * <PressableIcon
 *   icon=" "    // required
 *   size={10}             // required
 *   color={COLORS.black}  // optional
 * />
 */
const PressableIcon = ({ icon, size, color, ...props }: PressableIconProps) => {
  const IconComponent = Icons[icon];

  return (
    <S.Container {...props}>
      <IconComponent size={size} color={color} />
    </S.Container>
  );
};

export default PressableIcon;
