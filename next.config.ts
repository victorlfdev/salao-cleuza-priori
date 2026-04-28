import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["100.120.169.33"],
  images: {
    localPatterns: [
      {
        pathname: "/beauty/**",
        search: "?v=*",
      },
      {
        pathname: "/beauty/**",
      },
    ],
  },
};

export default nextConfig;
