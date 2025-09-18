import { useLocation } from "react-router";
import { ShopGrid } from "../components/ui/ShopGrid";
import { Helmet } from "react-helmet";

export default function Home() {


    const {pathname} = useLocation()

  return (
    <section>
      <Helmet>
        <title>Tanki Shop - {pathname.replace("/", "").toUpperCase()}</title>
      </Helmet>
      <ShopGrid />
    </section>
  );
}
