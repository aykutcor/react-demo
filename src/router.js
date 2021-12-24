import React, { lazy, Suspense } from "react";
import {
  Route,
  Navigate,
  BrowserRouter as Router,
  Routes as _Routes,
  useNavigate,
} from "react-router-dom";
import { PUBLIC_ROUTE } from "./route.constants";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("./pages/Dashboard/Dashboard")),
  },
];

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/signin" />;
}
export default function Routes() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <Router>
        <_Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            ></Route>
          ))}
          <Route
            path="/app/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </_Routes>
      </Router>
    </Suspense>
  );
}
