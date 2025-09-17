import { create , type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { CounterStore } from "./counter.store.types";



const AppMiddleWare = (f: StateCreator<CounterStore>) => {
    return devtools(persist(f, {
      name: "counter-storage",
    })
  );
}



const initialState: { bears: CounterStore['bears'] } = {
  bears: 0,
}

export const useCounterStore = create<CounterStore>()(
  AppMiddleWare((set) => ({
   
    ...initialState,


    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears }),
  }))
);
