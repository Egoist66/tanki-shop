import type { FC } from "react";
import { Icon } from "../shared/Icon/Icon";
import { useTanksShopData } from "../../hooks/useTanksShopData/useTanksShopData";
import { useShopGrid } from "../../hooks/useShopGrid/useShopGrid";
import { useLocation } from "react-router";
import { useTanksShopStore } from "../../store/shop.store";

export const FilterSortAndCountControls: FC = () => {
  const {data} = useTanksShopData()
  const { pathname } = useLocation();


  const computedTextByPathName = () => {
    switch (pathname) {
      case "/premium":
      case "/collection":
        return "Показано";
      default:
        return "Всего";
    }
  }


  const {toggleSortOrder} = useTanksShopStore()
  const {filteredTanks} = useShopGrid(data)
  return (
    <div className="filter-sort-and-count-controls flex flex-wrap items-center justify-between text-[#FEFEEC]">
      <div className="veicles-shown-count">
        <p>{computedTextByPathName()}: {filteredTanks()?.length}</p>
      </div>
      <div className="sort-and-filter-controls flex items-center gap-4 flex-wrap">
        <div className="sort-controls flex items-center">
          <span>Сортировать по цене:</span>
          <button onClick={toggleSortOrder}>
            <Icon  variant="sort-toggle" />
          </button>
        </div>



        <div className="filter-controls flex items-center gap-1 flex-wrap">
          <span>Показать:</span>
          <div className="flex items-center flex-wrap">
            <button>
              <Icon variant="light-tank" />
            </button>
            <button>
              <Icon variant="medium-tank" />
            </button>
            <button>
              <Icon  variant="heavy-tank" />
            </button>
            <button>
              <Icon  variant="pt-sau" />
            </button>
            <button>
              <Icon  variant="artillery" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
