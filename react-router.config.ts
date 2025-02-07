import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  future: {
    // unstable_optimizeDeps: true,
    unstable_viteEnvironmentApi: true,
    // unstable_splitRouteModules: true,
  },
} satisfies Config;
