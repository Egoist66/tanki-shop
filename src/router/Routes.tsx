import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(async () => await import("../pages/Home"));
//@ts-ignore
const TankPage = lazy(async () => await import("../pages/Tank"));

export const RouterViewComponent = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route path="premium" element={<HomePage />} />
    <Route path="collection" element={<HomePage />} />
    <Route path="/tank/:id" element={<TankPage />} />
  </Routes>
);
