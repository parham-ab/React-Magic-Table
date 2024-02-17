import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import PreLoader from "components/common/PreLoader";
import Layout from "components/Layout/index.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={
              <Suspense fallback={<PreLoader />}>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Layout>
  );
};
export default App;
