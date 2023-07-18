/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.onecms.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.shellyfoodspot.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tasteatlas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.economictimes.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
