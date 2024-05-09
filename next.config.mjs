/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com'
            },
            {
                protocol: 'http',
                hostname: 'prinplay.com.br',
            },
            {
                protocol: 'http',
                hostname: 's2.glbimg.com',
            }
        ]
    }
};

export default nextConfig;
