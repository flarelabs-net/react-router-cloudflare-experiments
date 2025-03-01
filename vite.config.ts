import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    // cloudflareDevProxy({
    //   getLoadContext({ context }) {
    //     return { cloudflare: context.cloudflare };
    //   },
    // }),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
    tsconfigPaths(),
  ],
});
