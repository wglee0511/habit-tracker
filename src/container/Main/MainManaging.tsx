import React, { useMemo } from 'react';

import styled from '@emotion/styled';
import { map } from 'lodash';
import Divider from 'src/components/Divider';
import { useRoutineStore } from 'src/stores/routine';

import RoutineCard from './RoutineCard';

const S = {
  Container: styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    width: 100%;
    padding: 12px 20px;
    gap: 12px;
  `,
};

const MainManaging = () => {
  const { routines } = useRoutineStore();

  const renderCards = useMemo(
    () =>
      map(routines, (value) => (
        <RoutineCard
          key={value.routineKey}
          {...value}
        />
      )),
    [routines],
  );

  return (
    <S.Container>
      {renderCards}
      <Divider vertical={150} />
    </S.Container>
  );
};

export default MainManaging;
