/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Next 16 bloquea por defecto los recursos de dev para hosts no listados.
  // El preview se sirve por 127.0.0.1:3000; sin esto los chunks JS dan 403
  // y React no hidrata (el HMR websocket también se bloquea).
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  devIndicators: false,
};

export default nextConfig;
