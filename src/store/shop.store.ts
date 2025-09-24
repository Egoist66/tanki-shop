import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { ShopStoreType } from "./shop.store.types";
import type { Tank } from "../api/data.types";

const AppMiddleWare = (f: StateCreator<ShopStoreType>) => {
  return devtools(
    persist(f, {
      name: "reserved-tanks-data",
    })
  );
};

const data: ShopStoreType["data"] = [];

export const useTanksShopStore = create<ShopStoreType>()(

  AppMiddleWare((set) => ({
    data,
    sortedAndFilteredTanks: [],
    isSorted: location.search.split("=")[1] === "asc",
    toggleSortOrder: () => set((state) => ({ isSorted: !state.isSorted })),
    getTanksData: () => data,
    setTanksData: (tanks: Tank[]) => set({ data: tanks }),
    setSortedAndFilteredTanks: (
      tanks: Tank[],
      pathName: "premium" | "collection"
    ) => {

      return set((state) => {
        switch (pathName) {
          case "premium": {
            if (state.isSorted) {
              const sortedTanks = tanks
                .filter((tank) => tank.premium)
                .sort((a, b) => a.price - b.price);
              return { sortedAndFilteredTanks: sortedTanks };
            } else {
              const sortedTanks = tanks
                .filter((tank) => tank.premium)
                .sort((a, b) => b.price - a.price);
              return { sortedAndFilteredTanks: sortedTanks};
            }
          }
          case "collection": {
            if(state.isSorted) {
              const sortedTanks = tanks
                .filter((tank) => !tank.premium)
                .sort((a, b) => a.price - b.price);
              return { sortedAndFilteredTanks: sortedTanks };
            } else {
              const sortedTanks = tanks
                .filter((tank) => !tank.premium)
                .sort((a, b) => b.price - a.price);
              return { sortedAndFilteredTanks: sortedTanks };
            }
          }
          default: {
            if(state.isSorted){
              const sortedTanks = tanks.sort((a, b) => a.price - b.price);
              return { sortedAndFilteredTanks: sortedTanks };
            }
            else {
              const sortedTanks = tanks.sort((a, b) => b.price - a.price);
              return { sortedAndFilteredTanks: sortedTanks };
            }
            
          }
        }
        
      });
    },
  }))
);
