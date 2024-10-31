import { create } from 'zustand';

type ModalValueType = {
  habitManagementModal: {
    isVisible: boolean;
    routineKey?: string | null | number;
  };
};

export type ModalType = ModalValueType & {};

export const initialModalState: ModalValueType = {
  habitManagementModal: {
    isVisible: false,
    routineKey: undefined,
  },
};

export const useModalStore = create<ModalType>()(() => ({ ...initialModalState }));
