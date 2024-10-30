import { ROUTINE_CYCLE_CUSTOM, ROUTINE_CYCLE_DAY, ROUTINE_CYCLE_WEEK } from 'src/lib/constants';
import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

export type RoutineCycleType =
  | typeof ROUTINE_CYCLE_DAY
  | typeof ROUTINE_CYCLE_WEEK
  | typeof ROUTINE_CYCLE_CUSTOM;

export type RoutineType = {
  key: number | string;
  name: string;
  type: RoutineCycleType;
  customValue?: string;
  completeDates: Date[];
};

type RoutineValueType = {
  routines: RoutineType[];
};

export type RoutineStoreType = RoutineValueType & {};

const initialRoutineState: RoutineValueType = { routines: [] };

export const useRoutineStore = create<RoutineStoreType>()(
  devtools(
    persist(() => ({ ...initialRoutineState }), {
      name: 'routine',
      storage: createJSONStorage(() => sessionStorage),
    }),
  ),
);

export class InitialRoutine {
  key = new Date().getTime();

  name = '';

  type = 'DAY';

  customValue = '0';

  completeDates = [];
}
