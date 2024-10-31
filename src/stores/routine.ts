import { ROUTINE_CYCLE_CUSTOM, ROUTINE_CYCLE_DAY, ROUTINE_CYCLE_WEEK } from 'src/lib/constants';
import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

export type RoutineCycleType =
  | typeof ROUTINE_CYCLE_DAY
  | typeof ROUTINE_CYCLE_WEEK
  | typeof ROUTINE_CYCLE_CUSTOM;

export type RoutineType = {
  routineKey: number | string;
  name: string;
  type: RoutineCycleType;
  customValue: string;
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
      storage: createJSONStorage(() => localStorage),
    }),
  ),
);

export class InitialRoutine {
  routineKey = new Date().getTime();

  name = '';

  type = 'DAY';

  customValue = '1';

  completeDates = [
    new Date('2024-9-9'),
    new Date('2024-9-11'),
    new Date('2024-9-12'),
    new Date('2024-9-13'),
    new Date('2024-9-14'),
    new Date('2024-9-15'),
    new Date('2024-9-5'),
    new Date('2024-10-6'),
    new Date('2024-10-7'),
    new Date('2024-10-8'),
    new Date('2024-10-10'),
    new Date('2024-10-11'),
    new Date('2024-10-12'),
    new Date('2024-10-13'),
    new Date('2024-10-14'),
    new Date('2024-10-15'),
    new Date('2024-10-24'),
    new Date('2024-10-26'),
    new Date('2024-10-27'),
    new Date('2024-10-28'),
  ];
}
