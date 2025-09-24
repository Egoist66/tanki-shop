import { useLocation } from "react-router";
import { useTanksShopStore } from "../../store/shop.store";

export const useFilterSortAndCount = () => {

    const { pathname } = useLocation();
    const {sortedAndFilteredTanks, toggleSortOrder, isSorted} = useTanksShopStore()
  
  
    const computedTextByPathName = () => {
      switch (pathname) {
        case "/premium":
        case "/collection":
          return "Показано";
        default:
          return "Всего";
      }
    }
  
  
    return {
      sortedAndFilteredTanks,
      computedTextByPathName,
      isSorted,
      toggleSortOrder
    }

}