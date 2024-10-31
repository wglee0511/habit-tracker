import React, { useCallback, useRef } from 'react';

import styled from '@emotion/styled';
import Icon from 'src/components/Icons';
import Text from 'src/components/Text';
import { hapticFeedback } from 'src/lib/device';
import { useThemeStore } from 'src/stores';

import { TopNavigationProps } from './type';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
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
    hapticFeedback();
    if (leadingButtonRef?.current) {
      leadingButtonRef.current.blur();
    }
  }, [onClickLeadingButton]);

  const onClickTrailing = useCallback(() => {
    onClickTrailingButton();
    hapticFeedback();
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
            size={32}
            color={textColor}
          />
        </button>
      )}
      <Text
        fontSize={26}
        fontWeight={700}
        color={textColor}
      >
        {name}
      </Text>
      {trailingIcon ? (
        <button
          type="button"
          ref={trailingButtonRef}
          onClick={onClickTrailing}
        >
          <Icon
            icon={trailingIcon}
            size={32}
            color={textColor}
          />
        </button>
      ) : (
        <div />
      )}
    </S.Container>
  );
};

export default TopNavigation;
