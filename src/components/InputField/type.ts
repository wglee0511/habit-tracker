import { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width: string | number;
  fontSize?: number;
  isVisibleTrailingIcon?: boolean;
  onClickClear?: () => void;
}

export interface InputFieldStyleProps {
  isThickBorder: boolean;
  borderColor?: string;
  disabled?: boolean;
  backgroundColor?: string;
}

export interface InputFieldLayout {
  width?: string | number;
}

export interface InputFieldFontStyleProps {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  fontColor: string;
  placeHolderColor: string;
}
