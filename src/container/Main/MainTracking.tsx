import React from 'react';

import { map } from 'lodash';
import Divider from 'src/components/Divider';
import { useRoutineStore } from 'src/stores/routine';

import ListContainer from '../common/ListContainer';

import RoutineTrackingCard from './RoutineTrackingCard';

const MainTracking = () => {
  const { routines } = useRoutineStore();

  const renderRoutines = map(routines, (value) => (
    <RoutineTrackingCard
      key={value.routineKey}
      {...value}
    />
  ));

  return (
    <ListContainer>
      {renderRoutines}
      <Divider vertical={150} />
    </ListContainer>
  );
};

export default MainTracking;
