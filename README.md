# Clock Time

[![Build Status](https://github.com/trevorblades/clock-time/workflows/Node%20CI/badge.svg)](https://github.com/trevorblades/clock-time/actions)

Formats milliseconds or minutes and seconds as clock time

## Installation

```shell
npm install clock-time
```

## Usage

Import or `require` the package and pass milliseconds as a single argument to get nicely formatted clock time.

```js
import clockTime from 'clock-time'; // es6
const clockTime = require('clock-time'); // cjs

clockTime(60 * 1000); // 1:00
```

Or, pass the number of minutes as the first argument and the number of seconds as the second argument instead.

```js
clockTime(4, 20); // 4:20
```

### `toClockParts`

Use the named export `toClockParts` to convert milliseconds to an object of minutes, zero-padded seconds, and total seconds. This can be useful when you want to use the parts of a clock time separately or in addition to the formatted string.

If the second argument to `toClockParts` is `true`, zero-padding on the returned `seconds` property will be disabled and `seconds` will be a number.

```js
import {toClockParts} from 'clock-time';

const {
  minutes, // 4
  seconds, // 20
  total // 260
} = toClockParts(260000);

const formatted = `${minutes}:${seconds}`; // or clockTime(minutes, seconds)
```

## License

[MIT](./LICENSE)
