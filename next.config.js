/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentCollections } = require('@content-collections/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = withContentCollections(nextConfig);
