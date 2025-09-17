import { type FC } from "react";
import { Layout } from "./layout/Layout";
import { ShopGrid } from "./ui/ShopGrid";

const App: FC = () => {
  return (
    <Layout containerWidth={1138} header={<header>Header</header>}>
      <ShopGrid />
      
    </Layout>
  );
};

export default App;
