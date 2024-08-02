import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: "export",
  // distDir: "./dist",
  // assetPrefix: "/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects() {
    return [
      // {
      //   source: "/components",
      //   destination: "/docs/components/accordion",
      //   permanent: true,
      // },
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/task-center/:path*',
  //       destination: `http://localhost:3001/app/micro/task-center/:path*`
  //     },
  //   ]
  // }
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
