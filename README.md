# Clock time

[![CircleCI](https://circleci.com/gh/trevorblades/clock-time.svg?style=shield&circle-token=61b9155b46620cdaac0b9b712e5934cb041164f3)](https://circleci.com/gh/trevorblades/clock-time)

Formats milliseconds or minutes and seconds as clock time

## Installation

Install `clock-time` using your favourite package manager:

```
npm install --save clock-time
```

...or

```
yarn add clock-time
```

## Usage

You can pass milliseconds as a single argument

```js
const text = clockTime(60 * 1000);
// 1:00
```

You can also pass the number of minutes as the first argument and the number of seconds as the second argument

```js
const text = clockTime(4, 20);
// 4:20
```
