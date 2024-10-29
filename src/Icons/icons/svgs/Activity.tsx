/* eslint-disable max-len */
import React from 'react';

import { IconStyleProps } from '../../type';

const Activity = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 22.5C2.17163 22.5 1.5 21.8291 1.5 21V12C1.5 11.1709 2.17163 10.5 3 10.5C3.82837 10.5 4.5 11.1709 4.5 12V21C4.5 21.8291 3.82837 22.5 3 22.5Z"
      fill={color || 'black'}
    />
    <path
      d="M9 22.5C8.17163 22.5 7.5 21.8291 7.5 21V3C7.5 2.1709 8.17163 1.5 9 1.5C9.82837 1.5 10.5 2.1709 10.5 3V21C10.5 21.8291 9.82837 22.5 9 22.5Z"
      fill={color || 'black'}
    />
    <path
      d="M15 22.5C14.1709 22.5 13.5 21.8291 13.5 21V15C13.5 14.1709 14.1709 13.5 15 13.5C15.8291 13.5 16.5 14.1709 16.5 15V21C16.5 21.8291 15.8291 22.5 15 22.5Z"
      fill={color || 'black'}
    />
    <path
      d="M21 22.5C20.1709 22.5 19.5 21.8291 19.5 21V9C19.5 8.1709 20.1709 7.5 21 7.5C21.8291 7.5 22.5 8.1709 22.5 9V21C22.5 21.8291 21.8291 22.5 21 22.5Z"
      fill={color || 'black'}
    />
  </svg>
);

export default Activity;
