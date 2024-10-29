import React, { useCallback, useRef } from 'react';

import styled from '@emotion/styled';
import Text from 'src/components/Text';
import Icon from 'src/Icons';
import { useThemeStore } from 'src/stores';

import { TopNavigationProps } from './type';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
  `,
};

const TopNavigation = ({
  name = '',
  leadingIcon,
  onClickLeadingButton = () => {},
  trailingIcon,
  onClickTrailingButton = () => {},
}: TopNavigationProps) => {
  const leadingButtonRef = useRef<HTMLButtonElement>(null);
  const trailingButtonRef = useRef<HTMLButtonElement>(null);
  const { textColor } = useThemeStore();

  const onClickLeading = useCallback(() => {
    onClickLeadingButton();
    if (leadingButtonRef?.current) {
      leadingButtonRef.current.blur();
    }
  }, [onClickLeadingButton]);

  const onClickTrailing = useCallback(() => {
    onClickTrailingButton();
    if (trailingButtonRef?.current) {
      trailingButtonRef.current.blur();
    }
  }, [onClickTrailingButton]);

  return (
    <S.Container>
      {leadingIcon && (
        <button
          type="button"
          ref={leadingButtonRef}
          onClick={onClickLeading}
        >
          <Icon
            icon={leadingIcon}
            size={48}
            color={textColor}
          />
        </button>
      )}
      <Text
        fontSize={32}
        fontWeight={700}
        color={textColor}
      >
        {name}
      </Text>
      {trailingIcon && (
        <button
          type="button"
          ref={trailingButtonRef}
          onClick={onClickTrailing}
        >
          <Icon
            icon={trailingIcon}
            size={48}
            color={textColor}
          />
        </button>
      )}
    </S.Container>
  );
};

export default TopNavigation;
