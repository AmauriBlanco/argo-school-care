// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGithubPagesBuild = process.env["BUILD_TARGET"] === "github-pages";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPagesBuild ? { prerender: { enabled: true, crawlLinks: true } } : {}),
  },
  // GitHub Pages only serves static files, so this build skips the Cloudflare/Nitro
  // server adapter entirely and lets TanStack Start prerender "/" to static HTML instead.
  ...(isGithubPagesBuild ? { nitro: false, vite: { base: "/argo-school-care/" } } : {}),
});
