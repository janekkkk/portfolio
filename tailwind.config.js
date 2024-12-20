/* eslint-disable @typescript-eslint/no-require-imports */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './shared/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                luminis: '#DC8115',
                han: '#e50056',
                kate: '#005b82',
            },
        },
    },
    variants: {},
};
