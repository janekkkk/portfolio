/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
