import { create } from 'zustand';

type StoreProps = {
  isLoading: boolean;
  setIsLoading: (newIsLoading: boolean) => void;
};

export const useIsLoadingStore = create<StoreProps>((set) => ({
  isLoading: false,
  setIsLoading: (newIsLoading) => set({ isLoading: newIsLoading }),
}));
