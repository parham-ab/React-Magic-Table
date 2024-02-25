import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import PreLoader from "components/common/PreLoader";
import Layout from "components/Layout/index.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
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
        <Toaster />
      </Layout>
    </>
  );
};
export default App;
