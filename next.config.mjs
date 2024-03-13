/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverActions: {
      allowedOrigins: [
        "fuzzy-fortnight-qwjj7495qrwh4gw9-3000.app.github.dev/" /* or Codespace port forward url, no including scheme */,
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
