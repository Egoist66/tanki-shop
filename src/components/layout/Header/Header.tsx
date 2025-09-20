import type { FC } from "react";
import { VeicleTabs } from "../../ui/VeicleTabs";
import { FilterSortAndCountControls } from "../../ui/FilterSortAndCountControls";

export const Header: FC = () => {
    return (
        <header className="border-b border-[#f3f3f328] pb-3">
            <h1 className="text-[#E9E0BE] uppercase font-medium text-[24px] pb-8">Техника</h1>
            <VeicleTabs />
            <FilterSortAndCountControls />

        </header>
    )
}