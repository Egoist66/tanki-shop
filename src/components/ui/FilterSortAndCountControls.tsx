import type { FC } from "react";
import { Icon } from "../shared/Icon/Icon";
import { useFilterSortAndCount } from "../../hooks/useFilterSortAndCount/useFilterSortAndCount";

export const FilterSortAndCountControls: FC = () => {

  const {computedTextByPathName, sortedAndFilteredTanks, toggleSortOrder} = useFilterSortAndCount()

  return (
    <div className="filter-sort-and-count-controls flex flex-wrap items-center justify-between text-[#FEFEEC]">
      <div className="veicles-shown-count">
        <p>{computedTextByPathName()}: {sortedAndFilteredTanks.length}</p>
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
