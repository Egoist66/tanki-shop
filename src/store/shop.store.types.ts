import type { Tank } from "../api/data.types";

export type ShopStoreType = {
  data: Tank[];
  sortedAndFilteredTanks: Tank[];
  isSorted: boolean;
  setTanksData: (tanks: Tank[]) => void;
  getTanksData: () => Tank[];
  setSortedAndFilteredTanks: (tanks: Tank[]) => void
  toggleSortOrder: () => void
}
