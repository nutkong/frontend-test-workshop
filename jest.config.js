module.exports = {
  moduleDirectories: ['node_modules'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: ['src/*.{js,jsx}'],
  testPathIgnorePatterns: ['cypress/']
}
