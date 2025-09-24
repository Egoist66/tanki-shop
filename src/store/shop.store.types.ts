import type { Tank } from "../api/data.types";

export type ShopStoreType = {
  data: Tank[];
  sortedAndFilteredTanks: Tank[];
  isSorted: boolean;
  setTanksData: (tanks: Tank[]) => void;
  getTanksData: () => Tank[];
  setSortedAndFilteredTanks: (tanks: Tank[], pathName: "premium" | "collection") => void
  toggleSortOrder: () => void
}


export type VehicleType = 'lightTank' | 'mediumTank' | 'heavyTank' | 'SPG' | 'AT-SPG' | 'all'