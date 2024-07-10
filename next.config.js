const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLESITEVERIFICATION: process.env.GOOGLESITEVERIFICATION,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
