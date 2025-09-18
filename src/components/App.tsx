import { type FC } from "react";
import { Layout } from "./layout/Layout";
import { Header } from "./layout/Header/Header";
import { useLocation } from "react-router";
import { RouterViewComponent } from "../router/routes";

const App: FC = () => {
  const {} = useLocation();
  return (
    <Layout containerWidth={1138} header={<Header />}>
      <RouterViewComponent />
    </Layout>
  );
};

export default App;
