module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|mjs?|ts?)$',
  transform: { '^.+\\.mjs$': 'babel-jest' },
  moduleFileExtensions: ['js', 'mjs']
};