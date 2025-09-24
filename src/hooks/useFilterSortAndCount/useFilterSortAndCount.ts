import { useLocation, useSearchParams } from "react-router";
import { useTanksShopStore } from "../../store/shop.store";
import { useEffect, useState } from "react";
import type { VehicleType } from "../../store/shop.store.types";

export const useFilterSortAndCount = () => {
  const [vehicleType, setVehicleType] = useState<VehicleType>("all");
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    sortedAndFilteredTanks,
    toggleSortOrder,
    isSorted,
    setSortedAndFilteredTanks,
  } = useTanksShopStore();

  const computedTextByPathName = () => {
    switch (pathname) {
      case "/premium":
      case "/collection":
        return "Показано";
      default:
        return "Всего";
    }
  };

  const setVehicleTypes = (type: VehicleType) => {
    setVehicleType(type);
  };

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (pathname.startsWith("/tank")) {
      newParams.delete("price");
      setSearchParams(newParams, { replace: true });
      return;
    }

    if (isSorted) {
      newParams.set("price", "asc");
    } else {
      newParams.set("price", "desc");
    }

    setSearchParams(newParams, { replace: true });
  }, [isSorted, pathname]);

  useEffect(() => {
    const sortedAndFilteredTanksAndTypes = sortedAndFilteredTanks.filter(
      (tank) => tank.vehicle_type === vehicleType
    );
    setSortedAndFilteredTanks(
      sortedAndFilteredTanksAndTypes,
      pathname.replace("/", "") as "premium" | "collection"
    );
  }, [vehicleType]);

  return {
    sortedAndFilteredTanks,
    computedTextByPathName,
    setVehicleTypes,
    isSorted,
    toggleSortOrder,
  };
};
