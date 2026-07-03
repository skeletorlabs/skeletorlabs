/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@reown/appkit', '@reown/appkit-adapter-ethers', 'ethers'],
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'ethers'],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.phasemodel.xyz",
      },
    ],
  },
}

export default nextConfig