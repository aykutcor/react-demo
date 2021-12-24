import React, { lazy, Suspense } from "react";
import { Route, useLocation, Routes as _Routes } from "react-router-dom";

const routes = [
  {
    path: "",
    component: lazy(() => import("../../components/Dashboard/Dashboard")),
    exact: true,
  },
  {
    path: "test",
    component: lazy(() => import("../../components/Test/Test")),
    exact: true,
  },
];
const Test = lazy(() => import("../../components/Test/Test"));

export default function DashboardRoutes() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <_Routes>
        {routes.map((route, idx) => (
          <Route
            exact={route.exact}
            key={idx}
            path={`/${route.path}`}
            element={<route.component />}
          ></Route>
        ))}
      </_Routes>
    </Suspense>
  );
}
