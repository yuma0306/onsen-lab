/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/st/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
