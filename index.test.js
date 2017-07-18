import clockTime from './index';

describe('clock time formatter', () => {
  test('formats milliseconds as clock time', () =>
    expect(clockTime(260000)).toBe('4:20'));

  test('formats minutes and seconds as clock time', () =>
    expect(clockTime(4, 20)).toBe('4:20'));

  test('pad seconds with zeros', () => expect(clockTime(12, 4)).toBe('12:04'));
});
