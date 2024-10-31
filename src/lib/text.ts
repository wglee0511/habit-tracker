import { replace } from 'lodash';
import { RoutineCycleType } from 'src/stores/routine';

import {
  ROUTINE_CYCLE_CUSTOM_TEXT,
  ROUTINE_CYCLE_DAY_TEXT,
  ROUTINE_CYCLE_WEEK_TEXT,
  ROUTINE_INITIAL_CUSTOM_VALUE,
  ROUTINE_INITIAL_DAY_VALUE,
  ROUTINE_INITIAL_WEEK_VALUE,
} from './constants';
import { removeTextRegex } from './regex';

export const getRoutineCycleText = (tag: RoutineCycleType, customValue?: string) => {
  switch (tag) {
    case 'DAY':
      return ROUTINE_CYCLE_DAY_TEXT;
    case 'WEEK':
      return ROUTINE_CYCLE_WEEK_TEXT;
    case 'CUSTOM':
      if (customValue) {
        return `${customValue} 일`;
      }
      return ROUTINE_CYCLE_CUSTOM_TEXT;
    default:
      return ROUTINE_CYCLE_DAY_TEXT;
  }
};

export const getRoutineCycleDateNumber = (tag: RoutineCycleType) => {
  switch (tag) {
    case 'DAY':
      return ROUTINE_INITIAL_DAY_VALUE;
    case 'WEEK':
      return ROUTINE_INITIAL_WEEK_VALUE;
    case 'CUSTOM':
      return ROUTINE_INITIAL_CUSTOM_VALUE;
    default:
      return ROUTINE_INITIAL_DAY_VALUE;
  }
};

export const getRemoveText = (value: string) => {
  const convertValue = replace(value, removeTextRegex, '');
  return convertValue;
};
