import React, { useMemo } from 'react';

import styled from '@emotion/styled';
import { map } from 'lodash';
import { COLORS } from 'src/themes/colors';

import Text from '../Text';

import { SwitchSelectorProps } from './type';

const BORDER_RADIUS = '20px';

const S = {
  Container: styled.div`
    display: flex;
    height: 34px;
    border-radius: ${BORDER_RADIUS};
    background-color: ${COLORS.grey200};
  `,
  Button: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${BORDER_RADIUS};
  `,
};

/**
 * @component
 * 스위치 방식의 선택 버튼
 *
 *
 * @SwitchSelector
 * <SwitchSelector
 *   list=[]    // required
 *   onClickTab={() => {}}             // required
 *   selectedItem=""    // requried
 *   buttonWidth=  // optional
 * />
 * */

const SwitchSelector = ({
  list,
  onClickTab,
  selectedItem,
  buttonWidth = 86,
}: SwitchSelectorProps) => {
  const width = typeof buttonWidth === 'number' ? `${buttonWidth}px` : buttonWidth;

  const renderButtons = useMemo(
    () =>
      map(list, (item) => {
        const isSelected = selectedItem === item;

        return (
          <S.Button
            key={item}
            onClick={() => onClickTab(item)}
            style={{ backgroundColor: isSelected ? COLORS.primary200 : 'transparent', width }}
          >
            <Text fontSize={16} fontWeight={600} color={isSelected ? COLORS.white : COLORS.grey400}>
              {item}
            </Text>
          </S.Button>
        );
      }),
    [list, onClickTab, selectedItem, width],
  );
  return <S.Container>{renderButtons}</S.Container>;
};

export default SwitchSelector;
