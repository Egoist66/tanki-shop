import type { TanksDataApiResponse } from "../../api/data.types";
import { useLocation } from "react-router";
import { useState } from "react";

export const useShopGrid = (data: TanksDataApiResponse["data"]) => {
  const { pathname } = useLocation();
  const clearedPathName = pathname.replace("/", "");

  // Булевый флаг для направления сортировки
  const [sortAsc, setSortAsc] = useState(true);

  const filteredTanks = () => {
    switch (clearedPathName) {
      case "premium": {
        return data.filter((tank) => tank.premium);
      }
      case "collection": {
        return data.filter((tank) => !tank.premium);
      }
      default: {
        return data;
      }
    }
  };



  const toggleSortOrder = () => {
    setSortAsc((prev) => !prev);
  };

  return {
    filteredTanks,
    sortAsc,
    toggleSortOrder,
  };
};
