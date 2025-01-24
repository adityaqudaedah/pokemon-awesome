import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        port: "",
        pathname: "/artwork/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        // port: "",
        // pathname: "/artwork/**",
        // search : ""
      },
    ],
  },
};

export default nextConfig;
