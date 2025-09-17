import { create , type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { ShopStoreType } from "./shop.store.types";



const AppMiddleWare = (f: StateCreator<ShopStoreType>) => {
    return devtools(persist(f, {
      name: "reserved-tanks-data",
    })
  );
}



const initialState: any = {}

export const useCounterStore = create<ShopStoreType>()(
  AppMiddleWare((set) => ({
   
    ...initialState,


    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears }),
  }))
);
