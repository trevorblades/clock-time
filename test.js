import test from 'ava';
import clockTime from './main';

test('formats milliseconds as clock time', t =>
  t.is(clockTime(260000), '4:20'));

test('formats minutes and seconds as clock time', t =>
  t.is(clockTime(4, 20), '4:20'));

test('pad seconds with zeros', t => t.is(clockTime(12, 4), '12:04'));
