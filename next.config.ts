import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deployed to GitHub Pages (see .github/workflows/deploy-pages.yml).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve("."),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
