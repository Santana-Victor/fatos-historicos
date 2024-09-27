import { create } from 'zustand';

type StoreProps = {
  historicalFact: { mensagem: string };
  setHistoricalFact: (newHistoricalFact: { mensagem: string }) => void;
};

export const useHistoricalFactStore = create<StoreProps>((set) => ({
  historicalFact: { mensagem: '' },
  setHistoricalFact: (newHistoricalFact) =>
    set({ historicalFact: newHistoricalFact }),
}));
