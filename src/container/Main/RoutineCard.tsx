/* eslint-disable max-len */
import React, { useCallback, useMemo } from 'react';

import styled from '@emotion/styled';
import { filter, isEmpty, map } from 'lodash';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import Icon from 'src/components/Icons';
import Text from 'src/components/Text';
import { getHasSelectedToday, getIsToday, getMonthDateHour } from 'src/lib/day';
import { getRoutineCycleText } from 'src/lib/text';
import { useModalStore, useThemeStore } from 'src/stores';
import { RoutineType, useRoutineStore } from 'src/stores/routine';
import { COLORS } from 'src/themes/colors';
import { RADIUS } from 'src/themes/radius';

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: ${RADIUS.base};
    padding: 10px;
  `,
  flexRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `,
};

const RoutineCard = ({ customValue, routineKey, type, completeDates, name }: RoutineType) => {
  const { textColor, thirdBackgroundColor, backgroundColor } = useThemeStore();
  const { routines } = useRoutineStore();

  const hasSelectedToday = useMemo(() => getHasSelectedToday(completeDates), [completeDates]);
  const mainText = useMemo(
    () =>
      `${name}\n\n🗓️  ${getRoutineCycleText(type, customValue)} 루틴 ${!isEmpty(completeDates) ? ` / 최근 완료일: ${getMonthDateHour(completeDates[completeDates.length - 1])}` : ''}`,
    [completeDates, customValue, name, type],
  );

  const onClickEditButton = () => {
    useModalStore.setState({ habitManagementModal: { isVisible: true, routineKey } });
  };

  const onClickCompleteButton = useCallback(() => {
    useRoutineStore.setState(() => {
      const routineArray = map(routines, (value) => {
        if (value.routineKey === routineKey) {
          if (hasSelectedToday) {
            const filteredDates = filter([...value.completeDates], (date) => !getIsToday(date));
            return {
              ...value,
              completeDates: [...filteredDates],
            };
          }
          return {
            ...value,
            completeDates: [...value.completeDates, new Date()],
          };
        }

        return value;
      });
      return { routines: routineArray };
    });
  }, [hasSelectedToday, routineKey, routines]);

  return (
    <S.Container style={{ backgroundColor: thirdBackgroundColor }}>
      <Text
        fontSize={16}
        fontWeight={600}
        color={textColor}
        whiteSpace="pre-wrap"
        textAlign="start"
      >
        {mainText}
      </Text>

      <Divider vertical={12} />

      <Divider
        vertical={2}
        horizontal="100%"
        backgroundColor={backgroundColor}
      />

      <Divider vertical={12} />
      <S.flexRow>
        <Button
          radius={RADIUS.base}
          onClick={onClickEditButton}
        >
          <Icon
            icon="Edit"
            size={24}
            color={textColor}
          />
        </Button>

        <Button
          radius={RADIUS.base}
          onClick={onClickCompleteButton}
        >
          <Icon
            icon={hasSelectedToday ? 'CheckboxCircleFill' : 'CheckboxCircleLine'}
            size={24}
            color={hasSelectedToday ? COLORS.green400 : textColor}
          />
        </Button>
      </S.flexRow>
    </S.Container>
  );
};

export default RoutineCard;
