import type { FC } from "react";
import { Icon } from "../shared/Icon/Icon";
import { useFilterSortAndCount } from "../../hooks/useFilterSortAndCount/useFilterSortAndCount";
import type { VehicleType } from "../../store/shop.store.types";
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

  const filterButtons: Array<{ type: VehicleType; icon: IconVariant }> = [
    {
      type: "lightTank",
      icon: "light-tank",
    },
    {
      type: "mediumTank",
      icon: "medium-tank",
    },
    {
      type: "heavyTank",
      icon: "heavy-tank",
    },
    {
      type: "AT-SPG",
      icon: "pt-sau",
    },
    {
      type: "SPG",
      icon: "artillery",
    },
  ];

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
            {filterButtons.map((button, i) => (
              <button
                key={button.type}
                onClick={(e) => setVehicleTypes(e, button.type)}
              >
                <Icon
                  className={`${
                    vehicleType[i]?.type === button.type ? "sepia-[1]" : ""
                  } `}
                  variant={button.icon}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
