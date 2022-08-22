// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withGoogleFonts } = require('nextjs-google-fonts');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withGoogleFonts({
    env: {
        MIXPANEL_PROJECT_TOKEN: process.env.MIXPANEL_PROJECT_TOKEN,
    },
    trailingSlash: true,
    googleFonts: {
        fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'],
    },
});
