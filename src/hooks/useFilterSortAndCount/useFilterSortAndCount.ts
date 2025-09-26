import { useLocation, useSearchParams } from "react-router";
import { useTanksShopStore } from "../../store/shop.store";
import { useEffect, useState, type MouseEvent } from "react";
import type { VehicleType } from "../../store/shop.store.types";
import type { Tank } from "../../api/data.types";

export const useFilterSortAndCount = () => {
  const [vehicleType, setVehicleType] = useState<Array<{ type: VehicleType; checked: boolean }>>([]);
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
      setVehicleType((prev) => {
        const existingType = prev.find(item => item.type === type);
        if (existingType) {
          return prev.map(item => 
            item.type === type ? { ...item, checked: true } : item
          );
        } else {
          return [...prev, { type, checked: true }];
        }
      });
    } else {
      setVehicleType((prev) => 
        prev.filter((item) => item.type !== type)
      );
    }
  };

  useEffect(() => {
    if (data.length) {
      setCopyOfAllTanks([...data]);
    }
  }, [data]); // Добавил data в зависимости

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
    // Получаем только выбранные типы (где checked: true)
    const selectedTypes = vehicleType
      .filter(item => item.checked)
      .map(item => item.type);

    // Если нет выбранных типов - показываем все танки
    if (selectedTypes.length === 0) {
      setSortedAndFilteredTanks(
        copyOfAllTanks,
        pathname.replace("/", "") as "premium" | "collection"
      );
      return;
    }

    // Фильтруем танки по выбранным типам
    const filteredTanks = copyOfAllTanks.filter((tank) =>
      selectedTypes.includes(tank.vehicle_type as VehicleType)
    );

    setSortedAndFilteredTanks(
      filteredTanks,
      pathname.replace("/", "") as "premium" | "collection"
    );
  }, [vehicleType, copyOfAllTanks, pathname]); // Добавил недостающие зависимости

  return {
    sortedAndFilteredTanks,
    vehicleType,
    computedTextByPathName,
    setVehicleTypes,
    isSorted,
    toggleSortOrder,
  };
};