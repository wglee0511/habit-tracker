import React, { useMemo, useState } from 'react';

import styled from '@emotion/styled';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import Text from 'src/components/Text';
import useCountUp from 'src/hooks/useCountUp';
import { MONTH, MONTH_RECORD, WEEK, WEEK_RECORD } from 'src/lib/constants';
import {
  getCurrentMonthConsecutiveDays,
  getCurrentWeekDateCount,
  getMaxSequenceCompleteDates,
  getThisMonthDateCount,
} from 'src/lib/day';
import { hapticFeedback } from 'src/lib/device';
import { useThemeStore } from 'src/stores';
import { RoutineType } from 'src/stores/routine';
import { COLORS } from 'src/themes/colors';
import { RADIUS } from 'src/themes/radius';

const S = {
  Container: styled.div`
    width: 100%;
    padding: 10px;
    border-radius: ${RADIUS.base};
  `,
  ButtonContainer: styled.div`
    display: flex;
    border-radius: ${RADIUS.xxl};
    gap: 5px;
    padding: 5px;
  `,
  FullGageBar: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 10px;
    border-radius: ${RADIUS.base};
    background-color: ${COLORS.primary200};
    padding: 2px;
  `,
  GageBar: styled.div`
    height: 6px;
    border-radius: ${RADIUS.base};
    background-color: ${COLORS.primary300};
    transition: all 0.5s;
  `,
};

type RecordType = typeof WEEK | typeof MONTH;

const RoutineTrackingCard = ({ name, completeDates }: RoutineType) => {
  const [recordTab, setRecordTab] = useState<RecordType>('WEEK');
  const { textColor, secondBackgroundColor, thirdBackgroundColor } = useThemeStore();
  const isWeek = useMemo(() => recordTab === 'WEEK', [recordTab]);

  const { maxSequenceCompleteDates, recordPercentValue } = useMemo(() => {
    const countValue = isWeek
      ? getCurrentWeekDateCount(completeDates)
      : getCurrentMonthConsecutiveDays(completeDates);
    const maxRecordValue = isWeek ? 7 : getThisMonthDateCount();
    return {
      maxSequenceCompleteDates: getMaxSequenceCompleteDates(completeDates),
      recordPercentValue: Math.ceil((countValue / maxRecordValue) * 100),
    };
  }, [completeDates, isWeek]);

  const count = useCountUp(recordPercentValue, 0, 500);

  const onClickButton = (tab: RecordType) => {
    hapticFeedback();
    setRecordTab(() => tab);
  };

  return (
    <S.Container style={{ backgroundColor: thirdBackgroundColor }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text
          fontSize={16}
          fontWeight={600}
          color={textColor}
          alignItems="center"
        >
          {name}
        </Text>
        <S.ButtonContainer style={{ backgroundColor: secondBackgroundColor }}>
          <Button
            isSelected={recordTab === 'WEEK'}
            onClick={() => onClickButton('WEEK')}
          >
            <Text
              fontSize={12}
              fontWeight={600}
              color={textColor}
            >
              {WEEK_RECORD}
            </Text>
          </Button>
          <Button
            isSelected={recordTab === 'MONTH'}
            onClick={() => onClickButton('MONTH')}
          >
            <Text
              fontSize={12}
              fontWeight={600}
              color={textColor}
            >
              {MONTH_RECORD}
            </Text>
          </Button>
        </S.ButtonContainer>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Text
          fontSize={16}
          fontWeight={400}
          color={textColor}
        >
          ✅ 연속
        </Text>
        <Divider horizontal={5} />
        <Text
          fontSize={21}
          fontWeight={600}
          color={textColor}
        >
          {maxSequenceCompleteDates} 일
        </Text>
        <Divider horizontal={5} />
        <Text
          fontSize={16}
          fontWeight={400}
          color={textColor}
        >
          달성!
        </Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Text
          fontSize={16}
          fontWeight={400}
          color={textColor}
        >
          📝 {isWeek ? WEEK_RECORD : MONTH_RECORD}
        </Text>
        <Divider horizontal={5} />
        <Text
          fontSize={21}
          fontWeight={600}
          color={textColor}
        >
          {count} %
        </Text>
        <Divider horizontal={5} />
        <Text
          fontSize={16}
          fontWeight={400}
          color={textColor}
        >
          달성!
        </Text>
      </div>
      <Divider vertical={20} />
      <S.FullGageBar>
        <S.GageBar style={{ width: `${recordPercentValue}%` }} />
      </S.FullGageBar>
    </S.Container>
  );
};

export default RoutineTrackingCard;
