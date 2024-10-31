import React, { useMemo } from 'react';

import { map } from 'lodash';
import { useRoutineStore } from 'src/stores/routine';

import ListContainer from '../common/ListContainer';

import RoutineTrackingCard from './RoutineTrackingCard';

const MainTracking = () => {
  const { routines } = useRoutineStore();

  const renderRoutines = useMemo(
    () =>
      map(routines, (value) => (
        <RoutineTrackingCard
          key={value.routineKey}
          {...value}
        />
      )),
    [routines],
  );

  return <ListContainer>{renderRoutines}</ListContainer>;
};

export default MainTracking;
