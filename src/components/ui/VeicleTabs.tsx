import { type FC } from "react";
import { Button } from "../shared/Button/Button";
import { useLocation, useNavigate } from "react-router";

/**
 * A component that renders two buttons for navigating to the
 * "premium" and "collection" pages.
 *
 * @returns A JSX element containing two buttons.
 */
export const VeicleTabs: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const clearPathName = pathname.replace("/", "");


  

  return (
    <div className="vehicle-tabs pb-6">
      <Button
        onClick={() => navigate("/premium")}
        active={clearPathName === "premium" || clearPathName === ""}
        text="Премиумная"
      />
      <Button
        onClick={() => navigate("/collection")}
        active={clearPathName === "collection"}
        text="Коллекционная"
      />
    </div>
  );
};
