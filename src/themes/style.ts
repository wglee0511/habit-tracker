import { css } from '@emotion/react';

import { COLORS, getColorWithOpacity } from './colors';

export const PADDING_HORIZONTAL = '28px';

export const MAIN_TAB_HEIGHT = '67px';

export const CHART_HEIGHT_NUMBER = 200;

export const customScrollBar = css`
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${getColorWithOpacity(COLORS.primary700, 0.2)};
  }
`;
