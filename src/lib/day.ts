import dayjs from 'dayjs';
// eslint-disable-next-line import/order
import isToday from 'dayjs/plugin/isToday';

import 'dayjs/locale/ko';
import { find, isNil } from 'lodash';

dayjs.extend(isToday);
dayjs.locale('ko');

export const getIsToday = (date: Date) => dayjs(date).isToday();

export const getMonthDateHour = (date: Date) => dayjs(date).format('MM월DD일 h시');

export const getHasSelectedToday = (dates: Date[]) => {
  const selectedDate = find(dates, (value) => getIsToday(value));

  return !isNil(selectedDate);
};
