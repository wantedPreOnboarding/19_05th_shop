import slugMatcher from './slugMatcher';

describe('slugMatcher는 :로 시작하는 subString을 입력된 값으로 바꾸는 함수입니다. ', () => {
  test(':slug를 10으로 바꿉니다.', () => {
    expect(slugMatcher('test/:slug/', ['10'])).toBe('test/10/');
  });

  test('배열의 string은 앞에서부터 순차적으로 slug과 매치됩니다.', () => {
    expect(slugMatcher('search/:slug/detail/:id', ['10', '11'])).toBe('search/10/detail/11');
  });
});
