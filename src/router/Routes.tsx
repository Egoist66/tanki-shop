import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(async () => await import("../pages/Home"));

export const RouterViewComponent = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route path="premium" element={<HomePage />} />
    <Route path="collection" element={<HomePage />} />
  </Routes>
);
