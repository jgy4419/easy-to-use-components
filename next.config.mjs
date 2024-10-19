/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    images: {
        unoptimized: true
    },
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
}

export default nextConfig;
