import React from 'react';

import styled from '@emotion/styled';
import Text from 'src/components/Text';
import { useThemeStore } from 'src/stores';
import { RoutineType } from 'src/stores/routine';

const S = {
  Container: styled.div`
    width: 100%;
  `,
};

const RoutineTrackingCard = ({ name }: RoutineType) => {
  const { textColor } = useThemeStore();

  return (
    <S.Container>
      <Text
        fontSize={16}
        fontWeight={600}
        color={textColor}
      >
        {name}
      </Text>
    </S.Container>
  );
};

export default RoutineTrackingCard;
