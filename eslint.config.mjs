import typescriptEslint from '@typescript-eslint/eslint-plugin';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupPluginRules } from '@eslint/compat';
import typescriptEslintParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    ...compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'next',
        'prettier',
        'plugin:prettier/recommended'
    ),
    {
        plugins: {
            '@typescript-eslint/eslint-plugin': fixupPluginRules(typescriptEslint),
            'eslint-plugin-jest': fixupPluginRules(jest),
            'eslint-plugin-prettier': fixupPluginRules(prettier),
            'eslint-plugin-react': fixupPluginRules(react),
            'eslint-plugin-tailwindcss': fixupPluginRules(tailwindcss),
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: typescriptEslintParser,
        },
        rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'no-use-before-define': 'off',
            // '@typescript-eslint/no-use-before-define': ['error'],
            'max-len': [
                'error',
                {
                    code: 120,
                    tabWidth: 6,
                    ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
                    ignoreUrls: true,
                },
            ],
            'no-console': 'error',
            'no-debugger': 'error',
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: false,
                },
            ],
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                },
            ],
        },
    },
];
