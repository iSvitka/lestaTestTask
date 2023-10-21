/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mk-glossary.korabli.su',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
