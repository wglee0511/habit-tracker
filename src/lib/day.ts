/* eslint-disable import/order */
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isToday from 'dayjs/plugin/isToday';
import weekday from 'dayjs/plugin/weekday';
import { find, isNil, map } from 'lodash';

dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);
dayjs.locale('ko');

export const getIsToday = (date: Date) => dayjs(date).isToday();

export const getMonthDateHour = (date: Date) => dayjs(date).format('MM월DD일 h시');

export const getHasSelectedToday = (dates: Date[]) => {
  const selectedDate = find(dates, (value) => getIsToday(value));

  return !isNil(selectedDate);
};

export const getThisMonthDateCount = () => {
  const today = dayjs();
  return today.daysInMonth();
};

export const getMaxSequenceCompleteDates = (dateArray: Date[]) => {
  const dates = map(dateArray, (value) => {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value;
  });

  if (dates.length === 0) return 0;

  dates.sort((a, b) => a.getTime() - b.getTime());

  let maxConsecutive = 1;
  let currentConsecutive = 1;

  for (let i = 1; i < dates.length; i += 1) {
    const prevDate = dates[i - 1];
    const currentDate = dates[i];

    const diffInDays = (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);

    if (diffInDays === 1) {
      currentConsecutive += 1;
    } else {
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
      currentConsecutive = 1;
    }
  }

  return Math.max(maxConsecutive, currentConsecutive);
};

export const getCurrentMonthConsecutiveDays = (dates: Date[]) => {
  const today = dayjs();
  const currentMonth = today.month();
  const currentYear = today.year();

  const currentMonthDates = dates.filter(
    (date) => dayjs(date).month() === currentMonth && dayjs(date).year() === currentYear,
  );

  if (currentMonthDates.length === 0) return 0;

  currentMonthDates.sort((a, b) => dayjs(a).diff(dayjs(b)));

  let maxConsecutive = 1;
  let currentConsecutive = 1;

  for (let i = 1; i < currentMonthDates.length; i += 1) {
    const prevDate = dayjs(currentMonthDates[i - 1]);
    const currentDate = dayjs(currentMonthDates[i]);

    if (currentDate.diff(prevDate, 'day') === 1) {
      currentConsecutive += 1;
    } else {
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
      currentConsecutive = 1;
    }
  }

  return Math.max(maxConsecutive, currentConsecutive);
};

export const getCurrentWeekDateCount = (dates: Date[]) => {
  const today = dayjs();

  const startOfWeek = today.weekday(1).startOf('day');
  const endOfWeek = today.weekday(7).endOf('day');

  const currentWeekDates = dates.filter(
    (date) => dayjs(date).isSameOrAfter(startOfWeek) && dayjs(date).isSameOrBefore(endOfWeek),
  );

  return currentWeekDates.length;
};
