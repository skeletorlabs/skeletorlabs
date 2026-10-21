/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@reown/appkit', '@reown/appkit-adapter-ethers', 'ethers'],
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'ethers'],
  },
  async redirects() {
    return [{ source: "/cv", destination: "/", permanent: true }];
  },
  images: {
    // 75 is the Next default; 90 is used by the CV profile photo.
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.phasemodel.xyz",
      },
    ],
  },
}

export default nextConfig