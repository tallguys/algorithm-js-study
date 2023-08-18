'use strict'

module.exports = {
  verbose: true,
  rootDir: '.',
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', '<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.js'],
  coverageDirectory: '<rootDir>/../coverage',
  coverageReporters: ['text'],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageThreshold: {
    global: {
      statements: 0,
      functions: 0,
      lines: 0,
      branches: 0
    }
  }
}
