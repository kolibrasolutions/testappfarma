/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify removido conforme recomendação
  images: {
    domains: ['localhost', 'farmacia-app.vercel.app'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone', // Adicionado conforme recomendação
};

module.exports = nextConfig;
