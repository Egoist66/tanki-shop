import { AnimatePresence, motion } from "motion/react";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router";

const HomePage = lazy(async () => await import("../pages/Home"));
const TankPage = lazy(async () => await import("../pages/Tank"));

export const RouterViewComponent = () => {
  const location = useLocation();
  return (
    <Suspense
      fallback={
        <h2 className="text-center text-2xl text-[#E9E2BF]">Загрузка...</h2>
      }
    >
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Navigate to="/premium" replace />} />
          <Route path="premium" element={<HomePage />} />
          <Route path="collection" element={<HomePage />} />
          <Route
            path="/tank/:id"
            element={
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <TankPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
