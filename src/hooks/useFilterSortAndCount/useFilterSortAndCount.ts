import { useLocation, useSearchParams } from "react-router";
import { useTanksShopStore } from "../../store/shop.store";
import { useEffect, useState, type MouseEvent } from "react";
import type { VehicleType } from "../../store/shop.store.types";
import type { Tank } from "../../api/data.types";

export const useFilterSortAndCount = () => {
  const [vehicleType, setVehicleType] = useState<VehicleType[]>([]);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    sortedAndFilteredTanks,
    data,
    toggleSortOrder,
    isSorted,
    setSortedAndFilteredTanks,
  } = useTanksShopStore();

  // Копия всегда содержит все танки и никогда не меняется
  const [copyOfAllTanks, setCopyOfAllTanks] = useState<Tank[]>([]);

  const computedTextByPathName = () => {
    switch (pathname) {
      case "/premium":
      case "/collection":
        return "Показано";
      default:
        return "Всего";
    }
  };

  const setVehicleTypes = (
    e: MouseEvent<HTMLButtonElement>,
    type: VehicleType
  ) => {
    if (e.shiftKey && e.button === 0) {
      setVehicleType((prev) => (prev.includes(type) ? prev : [...prev, type]));
    } else {
      setVehicleType((prev) => prev.filter((item) => item !== type));
    }
  };

  useEffect(() => {
    if (data.length) {
      setCopyOfAllTanks([...data]);
    }
  }, []);

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
    if (vehicleType.length === 0) {
      setSortedAndFilteredTanks(
        copyOfAllTanks,
        pathname.replace("/", "") as "premium" | "collection"
      );
      return;
    }

    // Если есть выбранные типы - фильтруем ИСХОДНУЮ копию
    const filteredTanks = copyOfAllTanks.filter((tank) =>
      vehicleType.includes(tank.vehicle_type as VehicleType)
    );

    setSortedAndFilteredTanks(
      filteredTanks,
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
