module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts', '@testing-library/jest-dom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/styles/**',
    '!src/**/stories.tsx'
  ]
}
