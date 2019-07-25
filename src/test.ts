/* eslint-env jest */
import {clockTime, toClockParts} from '.';

test('formats milliseconds as clock time', (): void => {
  expect(clockTime(260000)).toBe('4:20');
});

test('formats minutes and seconds as clock time', (): void => {
  expect(clockTime(4, 20)).toBe('4:20');
});

test('pad seconds with zeros', (): void => {
  expect(clockTime(12, 4)).toBe('12:04');
});

test('breaks apart milliseconds into parts', (): void => {
  expect(toClockParts(260000)).toEqual({
    minutes: 4,
    seconds: '20',
    total: 260
  });
});

test('clock parts works without zero-padding', (): void => {
  expect(toClockParts(242000, true)).toEqual({
    minutes: 4,
    seconds: 2,
    total: 242
  });
});
