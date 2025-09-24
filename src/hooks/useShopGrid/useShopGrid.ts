import { useEffect } from "react"
import { useLocation } from "react-router";
import { useTanksShopStore } from "../../store/shop.store"
import type { Tank } from "../../api/data.types"

export const useShopGrid = (data: Tank[]) => {
     const {setSortedAndFilteredTanks, isSorted, sortedAndFilteredTanks} = useTanksShopStore()
  const {pathname} = useLocation()



  
  useEffect(() => {
    setSortedAndFilteredTanks(data, pathname.replace("/", "") as "premium" | "collection")

  }, [isSorted])

  return {
    sortedAndFilteredTanks
  }
}