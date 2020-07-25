# Date EQ
[![license](https://img.shields.io/github/license/gluons/date-eq.svg?style=flat-square)](https://github.com/gluons/date-eq/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/date-eq.svg?style=flat-square)](https://www.npmjs.com/package/date-eq)
[![npm](https://img.shields.io/npm/dt/date-eq.svg?style=flat-square)](https://www.npmjs.com/package/date-eq)
[![Travis](https://img.shields.io/travis/gluons/date-eq.svg?style=flat-square)](https://travis-ci.org/gluons/date-eq)

📆 Extensive date equality checker.

## Installation

Via [npm](https://www.npmjs.com/)
```bash
npm install date-eq
```

Or [Yarn](https://yarnpkg.com/)
```bash
yarn add date-eq
```

Or [pnpm](https://pnpm.js.org/)
```bash
pnpm install date-eq
```

## Usage

```js
import DateEQ from 'date-eq';

const date1 = new Date(2020, 0, 1);
const date2 = new Date(2020, 11, 1);

if (DateEQ.year(date1, date2)) {
	console.log('"date1" and "date2" are in the same year.');
}
```

```js
import { date } from 'date-eq';

const date1 = new Date(2020, 0, 1);
const date2 = new Date(2020, 11, 1);

if (date(date1, date2)) {
	console.log(`"date1"'s date is equal to "date2"'s date.`);
}
```

```js
const DateEQ = require('date-eq');
const { month } = DateEQ;

const date1 = new Date(2020, 0, 1);
const date2 = new Date(2020, 0, 31);

if (month(date1, date2)) {
	console.log('"date1" and "date2" are in the same month.');
}
```

## API

### eq(date1, date2)

Return `true` if `date1` is equal to `date2`.

### day(date1, date2)

Return `true` if `date1`'s weekday is equal to `date2`'s weekday.

### date(date1, date2)

Return `true` if `date1`'s date is equal to `date2`'s date.

### week(date1, date2)

Return `true` if `date1`'s week number is equal to `date2`'s week number.

### month(date1, date2)

Return `true` if `date1`'s month is equal to `date2`'s month.

### year(date1, date2)

Return `true` if `date1`'s year is equal to `date2`'s year.

### hours(date1, date2)
**Alias:** `hrs([date2])`

Return `true` if `date1`'s hours is equal to `date2`'s hours.

### minutes(date1, date2)
**Alias:** `min([date2])`

Return `true` if `date1`'s minutes is equal to `date2`'s minutes.

### seconds(date1, date2)
**Alias:** `sec([date2])`

Return `true` if `date1`'s seconds is equal to `date2`'s seconds.

### milliseconds(date1, date2)
**Alias:** `ms([date2])`

Return `true` if `date1`'s milliseconds is equal to `date2`'s milliseconds.


