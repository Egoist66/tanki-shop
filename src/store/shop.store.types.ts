import type { Tank } from "../api/data.types";

export type ShopStoreType = {
  data: Tank[];
  setTanksData: (tanks: Tank[]) => void;
  getTanksData: () => Tank[];
};
