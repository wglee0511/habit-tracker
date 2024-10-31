/* eslint-disable max-len */
import React from 'react';

import { IconStyleProps } from '../../type';

const Edit = ({ size, color }: IconStyleProps) => (
  <svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.243 18H3V13.757L14.435 2.32201C14.6225 2.13454 14.8768 2.02922 15.142 2.02922C15.4072 2.02922 15.6615 2.13454 15.849 2.32201L18.678 5.15101C18.8655 5.33853 18.9708 5.59284 18.9708 5.85801C18.9708 6.12317 18.8655 6.37748 18.678 6.56501L7.243 18ZM3 20H21V22H3V20Z"
      fill={color || 'black'}
    />
  </svg>
);

export default Edit;
