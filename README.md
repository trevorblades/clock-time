# Clock Time

[![Build Status](https://travis-ci.com/trevorblades/clock-time.svg?branch=master)](https://travis-ci.com/trevorblades/clock-time)

Formats milliseconds or minutes and seconds as clock time

## Installation

```shell
npm install clock-time
```

## Usage

Import or require the package and pass milliseconds as a single argument to get nicely formatted clock time.

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

`toClockParts` also accepts an object of options as a second argument. You can disable zero-padding on the returned `seconds` property by passing `{noPad: true}` to the function.

```js
import {toClockParts} from 'clock-time';

const {
  minutes, // 4
  seconds, // 20
  total // 260
} = toClockParts(260000);

const formatted = `${minutes}:${seconds}`; // or clockTime(minutes, seconds)
```
