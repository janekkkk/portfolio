const { withGoogleFonts } = require("nextjs-google-fonts");
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withGoogleFonts({
    googleFonts: {
        fonts: [
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        ],
    },
});
