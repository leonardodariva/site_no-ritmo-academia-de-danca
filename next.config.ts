import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig: NextConfig = isStaticExport
  ? { output: "export", trailingSlash: false, typescript: { ignoreBuildErrors: true } }
  : {};

export default nextConfig;
