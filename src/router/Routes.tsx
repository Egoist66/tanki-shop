import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(async () => await import("../pages/Home"));
//@ts-ignore
const TankPage = lazy(async () => await import("../pages/Tank"));

export const RouterViewComponent = () => (
  <Suspense fallback={<h2 className="text-center text-2xl text-[#E9E2BF]">Загрузка...</h2>}>
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="premium" element={<HomePage />} />
      <Route path="collection" element={<HomePage />} />
      <Route path="/tank/:id" element={<TankPage />} />
    </Routes>
  </Suspense>
);
