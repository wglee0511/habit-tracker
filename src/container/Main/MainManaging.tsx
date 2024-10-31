import React, { useMemo } from 'react';

import { map } from 'lodash';
import Divider from 'src/components/Divider';
import { useRoutineStore } from 'src/stores/routine';

import ListContainer from '../common/ListContainer';

import RoutineCard from './RoutineCard';

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
    <ListContainer>
      {renderCards}
      <Divider vertical={150} />
    </ListContainer>
  );
};

export default MainManaging;
