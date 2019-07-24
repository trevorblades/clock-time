const {clockTime, toClockParts} = require('.');

test('formats milliseconds as clock time', () => {
  expect(clockTime(260000)).toBe('4:20');
});

test('formats minutes and seconds as clock time', () => {
  expect(clockTime(4, 20)).toBe('4:20');
});

test('pad seconds with zeros', () => {
  expect(clockTime(12, 4)).toBe('12:04');
});

test('breaks apart milliseconds into parts', () => {
  expect(toClockParts(260000)).toEqual({
    minutes: 4,
    seconds: '20',
    total: 260
  });
});

test('clock parts works without zero-padding', () => {
  expect(toClockParts(242000, {noPad: true})).toEqual({
    minutes: 4,
    seconds: 2,
    total: 242
  });
});
