import type { TanksDataApiResponse } from "../../api/data.types";
import { Link } from "react-router";

export default function ShopGrid({ data }: TanksDataApiResponse) {
  return (
    <div className="text-[#FEFEEC]">
      <div
        className={`grid items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]`}
      >
        {data.map((tank) => (
          <Link
            key={tank.id}
            to={`/tank/${tank.id}`}
            className="border-1 overflow-hidden rounded-sm border-[#fbf8f83b] bg-[#00000098] h-[222px] p-4 text-center"
            style={{
              backgroundImage: `url(${tank.image}), url('../icons/card-discount-sparkles.svg')`,
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundSize: "contain, contain",
              backgroundPosition: "right, right top",
            }}
          >
            <h2 className="text-right text-[#E9E0BE] text-[20px] font-medium">
              -{tank.discount}%
            </h2>

            <div className="description">
              <div>
                <h3 className="text-[#E9E0BE] text-left text-[20px] font-medium">
                  {tank.title}
                </h3>
                <p className="text-[#8C8C7E] max-w-[270px] text-[16px] overflow-hidden text-left text-ellipsis font-medium">
                  {tank.description}
                </p>

                <p className="text-[#CBAC77] text-left text-[16px] font-medium">
                  {tank.price} $
                </p>

              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );

}