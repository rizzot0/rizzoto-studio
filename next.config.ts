import type { NextConfig } from "next";

const repo = "rizzoto-studio";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : undefined,
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
};

export default nextConfig;
