import dateFormatting from './dateFormatting';

describe('dateFormatting', () => {
  test('dateFormatting("Mon Feb 21 2022 00:00:00 GMT+0900 (Korean Standard Time)") => "2022.02.21"', () => {
    expect(dateFormatting('Mon Feb 21 2022 00:00:00 GMT+0900 (Korean Standard Time)')).toBe(
      '2022.02.21',
    );
  });
});
