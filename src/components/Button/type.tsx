import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  isSelected?: boolean;
  theme?: 'primary' | 'secondary' | 'errorPrimary';
}
