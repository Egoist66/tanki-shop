import type { FC } from "react";
import { Icon } from "../shared/Icon/Icon";
import { useFilterSortAndCount } from "../../hooks/useFilterSortAndCount/useFilterSortAndCount";
import type { IconVariant } from "../shared/Icon/icon.types";

export const FilterSortAndCountControls: FC = () => {
  const {
    computedTextByPathName,
    sortedAndFilteredTanks,
    vehicleType,
    isSorted,
    toggleSortOrder,
    setVehicleTypes,
  } = useFilterSortAndCount();


  return (
    <div className="filter-sort-and-count-controls flex flex-wrap items-center justify-between text-[#FEFEEC]">
      <div className="veicles-shown-count">
        <p>
          {computedTextByPathName()}: {sortedAndFilteredTanks.length}
        </p>
      </div>
      <div className="sort-and-filter-controls flex items-center gap-4 flex-wrap">
        <div className="sort-controls flex items-center">
          <span>Сортировать по цене:</span>
          <button onClick={toggleSortOrder}>
            <Icon
              className={
                isSorted
                  ? "sepia-[1] transition-all duration-300"
                  : " transition-all duration-300"
              }
              variant="sort-toggle"
            />
          </button>
        </div>

        <div className="filter-controls flex items-center gap-1 flex-wrap">
          <span>Показать:</span>
          <div className="flex items-center flex-wrap">
            {vehicleType.map((button) => (
              <button
                title="Удерживайте Shift + клик"
                key={button.type}
                onClick={(e) => setVehicleTypes(e, button.type)}
              >
                <Icon
                  className={`${
                    button?.checked ? "sepia-[1]" : "cursor-pointer"
                  } `}
                  variant={button.type as IconVariant}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
