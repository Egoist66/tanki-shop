import type { FC } from "react";
import { FilterSortAndCountControls } from "../../ui/FilterSortAndCountControls";
import { VehicleTabs } from "../../ui/VehicleTabs";
import { useLocation } from "react-router";
import { Icon } from "../../shared/Icon/Icon";

export const Header: FC = () => {
  const { pathname } = useLocation();
  return (
    <header className="border-b border-[#f3f3f328] pb-3">
      <h1 className="text-[#E9E0BE] uppercase font-medium text-[24px] pb-8">
        Техника
      </h1>
      <VehicleTabs />
      {!pathname.includes("tank") && <FilterSortAndCountControls />}

      <div className="relative">
        {!pathname.includes("tank") && (
          <Icon
            className="absolute top-[-20px] right-0 w-full"
            variant="box-icon"
          />
        )}
      </div>
    </header>
  );
};
