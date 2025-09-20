import type { TanksDataApiResponse } from "../../api/data.types";

export default function ShopGrid({data}: TanksDataApiResponse){
  return (
    <div className="text-[#FEFEEC]">
      Grid

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
