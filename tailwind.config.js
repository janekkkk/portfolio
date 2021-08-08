const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './shared/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
};
