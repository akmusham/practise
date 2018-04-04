module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.mocks/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/.mocks/styleMock.js"
  },
  setupTestFrameworkScriptFile: "./enzyme.config.js",
  collectCoverage: false,
  verbose: true
}
