import { lazy } from "react";
const Home = lazy(() => import("pages/Home"));

const mainRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
];

export { mainRoutes as routes };
