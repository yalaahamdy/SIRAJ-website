import type { NextConfig } from "next";

/**
 * BUILD_STATIC=1  → static export for GitHub Pages (no server features).
 * NEXT_PUBLIC_BASE_PATH → set to "/<repo-name>" when deploying to a project
 * page (https://<user>.github.io/<repo>). Leave empty for user/org pages.
 */
const isStaticExport = process.env.BUILD_STATIC === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        basePath,
      }
    : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
