/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: {
    resolve: {
      fallback: {
        util: require.resolve("util/")
      }
    }
  }

}





module.exports = nextConfig
