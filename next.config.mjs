/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
            },
        ]
    },
    env: {
        MOVIE_API: process.env.MOVIE_API,
    },
};

export default nextConfig;
