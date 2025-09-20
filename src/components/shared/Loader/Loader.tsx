import type { FC } from "react";

export const Loader: FC<{text?: string}> = ({text}) => {
  return (
    <h2 className="text-center uppercase font-medium text-2xl text-[#E9E2BF]">
      {text || "Loading..."}
    </h2>
  );
};
