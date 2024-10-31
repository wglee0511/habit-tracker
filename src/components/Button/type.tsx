import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  isSelected?: boolean;
  radius?: string;
  theme?: 'primary' | 'secondary' | 'errorPrimary';
}
