/* eslint-disable max-len */
import React from 'react';

import { IconStyleProps } from '../../type';

const CheckboxCircleFill = ({ size, color }: IconStyleProps) => (
  <svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
      fill={color || '#181A20'}
    />
  </svg>
);

export default CheckboxCircleFill;
