import { useEffect, useState } from "react";
import type { TanksDataStatusState } from "./useTanksShopData.types";
import { delay } from "../../utils/delay";
import { useTanksShopStore } from "../../store/shop.store";
import type { TanksDataApiResponse } from "../../api/data.types";

export const useTanksShopData = () => {
  const [tanksDataStatus, setTanksDataStatus] = useState<TanksDataStatusState>({
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  const { setTanksData, data } = useTanksShopStore();

/**
 * Fetches data from ../../api/data.json and sets it to the store.
 * Waits for 1000ms before fetching the data.
 * Sets the isLoading status to true while fetching the data.
 * Sets the isSuccess status to true if the data is fetched successfully.
 * Sets the isError status to true if an error occurs while fetching the data.
 */
  const getTanksData = async () => {
    try {
      setTanksDataStatus({
        ...tanksDataStatus,
        isLoading: true,
      });

      await delay(1000);
      const tanksData: TanksDataApiResponse = await import("../../api/data.json");
      setTanksData(tanksData.data);

      setTanksDataStatus({
        ...tanksDataStatus,
        isLoading: false,
        isSuccess: true,
      });
    } catch (e) {
      console.log(e);
      setTanksDataStatus({
        ...tanksDataStatus,
        isError: true,
      });
    }
  };

  useEffect(() => {
    (async () => {
      await getTanksData();
    })();

    return () => {};
  }, []);

  return {
    data,
    tanksDataStatus,
  };
};
