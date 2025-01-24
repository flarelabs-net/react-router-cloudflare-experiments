import { createRequestHandler } from "react-router";

declare global {
  interface CloudflareEnvironment extends Env {}
}

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnvironment;
      ctx: ExecutionContext;
    };
  }
}

export default {
  async fetch(request, env, ctx) {
    // @ts-expect-error - virtual module provided by React Router at build time
    const build = await import("virtual:react-router/server-build");

    const requestHandler = createRequestHandler(build, import.meta.env.MODE);

    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<CloudflareEnvironment>;
