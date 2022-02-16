import tensDigit from './tensDigit';
describe('tensDigit', () => {
  test('tensDigit(9) => "09"', () => {
    expect(tensDigit(9)).toBe('09');
  });
  test('tensDigit(4) => "04"', () => {
    expect(tensDigit(4)).toBe('04');
  });
});
