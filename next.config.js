/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://lmarena.ai/:path*"
      }
    ];
  }
};

module.exports = nextConfig;
