import { replace } from 'lodash';
import { RoutineCycleType } from 'src/stores/routine';

import {
  ROUTINE_CYCLE_CUSTOM_TEXT,
  ROUTINE_CYCLE_DAY_TEXT,
  ROUTINE_CYCLE_WEEK_TEXT,
} from './constants';
import { removeTextRegex } from './regex';

export const getRoutineCycleText = (tag: RoutineCycleType) => {
  switch (tag) {
    case 'DAY':
      return ROUTINE_CYCLE_DAY_TEXT;
    case 'WEEK':
      return ROUTINE_CYCLE_WEEK_TEXT;
    case 'CUSTOM':
      return ROUTINE_CYCLE_CUSTOM_TEXT;
    default:
      return ROUTINE_CYCLE_DAY_TEXT;
  }
};

export const getRoutineCycleDateNumber = (tag: RoutineCycleType) => {
  switch (tag) {
    case 'DAY':
      return '1';
    case 'WEEK':
      return '7';
    case 'CUSTOM':
      return '10';
    default:
      return '1';
  }
};

export const getRemoveText = (value: string) => {
  const convertValue = replace(value, removeTextRegex, '');
  return convertValue;
};
