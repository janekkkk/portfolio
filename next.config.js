const { withGoogleFonts } = require('nextjs-google-fonts');
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withGoogleFonts({
    assetPrefix: './',
    trailingSlash: true,
    googleFonts: {
        fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'],
    },
});
