import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Custom webpack only used when running next build --webpack (Turbopack is default in v16)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Turbopack config (top-level in v16; used by next dev and next build by default)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
