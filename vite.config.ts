import { vitePlugin } from "@remix-run/dev";
import { defineConfig } from "vite";
import { stylexPlugin } from "vite-plugin-stylex-dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [vitePlugin({ ssr: false }), stylexPlugin(), tsconfigPaths()],
});
