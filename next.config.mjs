/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['kudos-vault.s3.ap-southeast-2.amazonaws.com', 'lh3.googleusercontent.com','via.placeholder.com' ],
//       },
// };
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'kudos-vault.ankytt.tech'
      ],
    },
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kudos-vault.s3.ap-southeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'kudos-vault.ankytt.tech',
      },
    ],
  },
};
export default nextConfig;
