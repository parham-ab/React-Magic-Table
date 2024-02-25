import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const fileNames = [
  "src",
  "assets",
  "components",
  "pages",
  "services",
  "utils",
  "styles",
  "features",
  "routes",
];
const pathes = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...pathes,
    },
  },
  optimizeDeps: {
    exclude: ["react-virtualized"],
  },
});
