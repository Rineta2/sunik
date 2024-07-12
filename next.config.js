const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLESITEVERIFICATION:
      process.env.NEXT_PUBLIC_GOOGLESITEVERIFICATION,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
