import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  // environments: {
  //   ssr: {
  //     build: {
  //       rollupOptions: {
  //         input: "./workers/app.ts",
  //       },
  //     },
  //   },
  //   dummy: {},
  // },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
    tsconfigPaths(),
    {
      name: "test-plugin",
      config(userConfig) {
        // console.log(userConfig.environments.ssr);
      },
      configResolved(resolvedConfig) {
        // console.log(resolvedConfig.environments.dummy);
      },
    },
  ],
});
