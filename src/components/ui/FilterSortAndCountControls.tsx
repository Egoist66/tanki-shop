import type { FC } from "react";
import { Icon } from "../shared/Icon/Icon";

export const FilterSortAndCountControls: FC = () => {
  return (
    <div className="filter-sort-and-count-controls flex flex-wrap items-center justify-between text-[#FEFEEC]">
      <div className="veicles-shown-count">
        <p>Показано: {0}</p>
      </div>

      <div className="sort-and-filter-controls flex items-center gap-4 flex-wrap">
        <div className="sort-controls flex items-center">
          <span>Сортировать по цене:</span>
          <button>
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
