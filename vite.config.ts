import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    // cloudflareDevProxy({
    //   getLoadContext({ context }) {
    //     return { cloudflare: context.cloudflare };
    //   },
    // }),
    reactRouter(),
    tsconfigPaths(),
  ],
});
