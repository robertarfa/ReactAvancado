module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts', '@testing-library/jest-dom'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
