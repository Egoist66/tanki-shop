import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { useTanksShopData } from "../hooks/useTanksShopData/useTanksShopData";
import { useEffect, useState } from "react";
import type { Tank } from "../api/data.types";

export default function Tank() {
  const params = useParams();

  const { data } = useTanksShopData();

  const [currentTank, setFoundTank] = useState<Tank | null>(null);

  useEffect(() => {
    if (data.length) {
      const foundTank = data.find((tank) => tank.id === params.id);
      if (foundTank) {
        setFoundTank(foundTank);
      }
    }
  }, []);
  return (
    <section>
      <Helmet>
        <title>Tanki Shop - {`${currentTank?.title}`}</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen p-10 md:p-20">
        {currentTank && (
          <div className="flex flex-col items-center">
            <img
              src={currentTank.image}
              alt={currentTank.title}
              className="w-full object-c rounded-md"
            />
            <h1 className="text-4xl text-[#E9E0BE] font-bold text-center">
              {currentTank.title}
            </h1>
            <p className="text-xl text-[#8C8C7E] text-center">{currentTank.fullDescription}</p>
            <div className="flex flex-row items-center justify-center mt-10">
              <p className="text-2xl text-[#E9E0BE] font-bold mr-5">{currentTank.price} $</p>
              {currentTank.old_price && (
                <p className="text-2xl font-bold text-[#CBAC77] line-through">
                  {currentTank.old_price} $
                </p>
              )}
            </div>
            <div></div>
          </div>
        )}
      </div>
    </section>
  );
}
