import { type FC } from "react";
import { Layout } from "./layout/Layout";
import { Header } from "./layout/Header/Header";
import { RouterViewComponent } from "../router/Routes";

const App: FC = () => {
  return (
    <Layout containerWidth={1138} header={<Header />}>
      <RouterViewComponent />
    </Layout>
  );
};

export default App;
