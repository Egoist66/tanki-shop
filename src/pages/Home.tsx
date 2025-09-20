import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { useTanksShopData } from "../hooks/useTanksShopData/useTanksShopData";
import { lazy, Suspense } from "react";
import { Loader } from "../components/shared/Loader/Loader";

const ShopGrid = lazy(() => import("../components/ui/ShopGrid"));

export default function Home() {
  const { pathname } = useLocation();
  const { data } = useTanksShopData();

  return (
    <section>
      <Helmet>
        <title>Tanki Shop {pathname.replace("/", "").toUpperCase()}</title>
      </Helmet>
      <Suspense fallback={<Loader text="Загрузка..." />}>
        <ShopGrid data={data} />
      </Suspense>
    </section>
  );
}
