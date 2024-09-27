import { create } from 'zustand';

type StoreProps = {
  isError: boolean;
  setIsError: (newIsError: boolean) => void;
};

export const useErrorResponseStore = create<StoreProps>((set) => ({
  isError: false,
  setIsError: (newIsError) => set({ isError: newIsError }),
}));
