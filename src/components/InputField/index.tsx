import React, { FocusEvent, forwardRef, useMemo, useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useThemeStore } from 'src/stores';
import { RADIUS } from 'src/themes/radius';

import Divider from '../Divider';
import PressableIcon from '../Icons/PressableIcon';
import Text from '../Text';

import {
  InputFieldFontStyleProps,
  InputFieldLayout,
  InputFieldProps,
  InputFieldStyleProps,
} from './type';

import { useForwardRef } from '../../hooks/useForwardRef';

const S = {
  Container: styled.div<InputFieldLayout>`
    width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
  `,
  InputContainer: styled.div<InputFieldStyleProps>`
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 15px;
    border: 1px solid ${(props) => props.borderColor};
    border-radius: ${RADIUS.base};
    background-color: ${(props) => props.backgroundColor};
    box-sizing: border-box;

    ${(props) =>
      props.isThickBorder &&
      css`
        border-width: 2px;
      `}
  `,
  InputInner: styled.div<InputFieldStyleProps>`
    display: flex;
    flex: 1;
    align-items: center;
    padding: ${(props) => (props.isThickBorder ? 0 : 1)}px;
  `,
  StyledInput: styled.input<InputFieldFontStyleProps>`
    display: flex;
    width: 100%;
    padding: 0;
    border: none;
    border-radius: ${RADIUS.s};
    outline: none;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.fontColor};
    opacity: 1;
    -webkit-text-fill-color: ${(props) => props.fontColor};

    :disabled {
      background: inherit;
    }

    ::placeholder {
      color: ${(props) => props.placeHolderColor};
      opacity: 1;
      -webkit-text-fill-color: ${(props) => props.placeHolderColor};
    }
  `,
  LabelContainer: styled.div`
    display: flex;
    align-items: center;
  `,
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      width,
      label,
      fontSize = 16,
      onClickClear = () => {},
      isVisibleTrailingIcon = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const { textColor, placeHolderColor } = useThemeStore();
    const [isEditableTextInputFocused, setIsEditableTextInputFocused] = useState(false);

    const isFocused = useMemo(() => isEditableTextInputFocused, [isEditableTextInputFocused]);

    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const isThickBorder = isFocused;

    const backgroundColor = 'transparent';

    const handleTextInputFocusEvent = (event: FocusEvent<HTMLInputElement>) => {
      setIsEditableTextInputFocused(true);
      if (props.onFocus) {
        props.onFocus(event);
      }
    };

    const handleTextInputBlurEvent = (event: FocusEvent<HTMLInputElement>) => {
      setIsEditableTextInputFocused(false);
      if (props.onBlur) {
        props.onBlur(event);
      }
    };

    return (
      <S.Container width={width}>
        {label && (
          <>
            <S.LabelContainer>
              <Text
                fontSize={12}
                fontWeight={600}
                color={textColor}
                alignItems="center"
              >
                {label}
              </Text>
            </S.LabelContainer>
            <Divider vertical={8} />
          </>
        )}
        <S.InputContainer
          isThickBorder={isThickBorder}
          borderColor={textColor}
          backgroundColor={backgroundColor}
          onClick={onClick}
        >
          <S.InputInner isThickBorder={isThickBorder}>
            <S.StyledInput
              ref={inputRef}
              fontSize={`${fontSize}px`}
              fontWeight={400}
              lineHeight={`${fontSize * 1.5}px`}
              fontColor={textColor}
              {...props}
              onFocus={handleTextInputFocusEvent}
              onBlur={handleTextInputBlurEvent}
              placeHolderColor={placeHolderColor}
            />
            {isVisibleTrailingIcon && (
              <>
                <Divider horizontal={4} />
                <PressableIcon
                  icon="CloseCircle"
                  color={textColor}
                  size={24}
                  onMouseDown={onClickClear}
                />
              </>
            )}
          </S.InputInner>
        </S.InputContainer>
      </S.Container>
    );
  },
);

InputField.displayName = 'InputField';

export default InputField;
