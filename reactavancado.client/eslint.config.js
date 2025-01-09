import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    extends: [
      ...tseslint.configs.recommended,
      ...pluginReact.configs.recommended,
      'plugin:@next/next/recommended',
      'plugin:react-hooks/recommended',
      'next/core-web-vitals',
      'prettier'
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
]
