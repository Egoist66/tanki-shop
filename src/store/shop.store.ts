import { create , type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { ShopStoreType } from "./shop.store.types";
import type { Tank } from "../api/data.types";



const AppMiddleWare = (f: StateCreator<ShopStoreType>) => {
    return devtools(persist(f, {
      name: "reserved-tanks-data",
    })
  );
}



const data: ShopStoreType['data'] = [];

export const useTanksShopStore = create<ShopStoreType>()(
  AppMiddleWare((set) => ({
   
    data,
    getTanksData: () => data,
    setTanksData: (tanks: Tank[]) => set({ data: tanks }),
    
  }))
);
