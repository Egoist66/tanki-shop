import type { FC } from "react";
import type { IconProps } from "./icon.types";

export const Icon: FC<IconProps> = ({ variant, width }) => {
  return (
    <img
      style={{ width: width + "px" }}
      loading="lazy"
      src={`/icons/${variant}.svg`}
      alt={variant}
    />
  );
};
