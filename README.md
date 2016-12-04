# Date EQ
[![license](https://img.shields.io/github/license/gluons/date-eq.svg?style=flat-square)](https://github.com/gluons/date-eq/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/date-eq.svg?style=flat-square)](https://www.npmjs.com/package/date-eq)
[![npm](https://img.shields.io/npm/dt/date-eq.svg?style=flat-square)](https://www.npmjs.com/package/date-eq)
[![Travis](https://img.shields.io/travis/gluons/date-eq.svg?style=flat-square)](https://travis-ci.org/gluons/date-eq)

📆 Extensive date equality checker.

## Installation
```
npm install date-eq
```

## Usage

### new DateEQ(date1, [date2])
Create `DateEQ` instance.

#### date1
Type: `Date`

First date to compare.

#### date2
Type: `Date`

Second date to compate.

```javascript
let date1 = new Date(2016, 0, 1);
let date2 = new Date(2016, 11, 31);
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
.
.
.
```

### eq(date2)
Return `true` if `date1` is equal to `date2`.

```javascript
let date1 = new Date();
let date2 = new Date(date1.getTime());
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.eq(date2)) // -> true
console.log(dateEq2.eq()); // -> true
```

### day(date2)
Return `true` if `date1`'s weekday is equal to `date2`'s weekday.

```javascript
let date1 = new Date(2016, 11, 1); // Thu 1 Dec 2016
let date2 = new Date(2016, 11, 8); // Thu 8 Dec 2016
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.day(date2)) // -> true
console.log(dateEq2.day()); // -> true
```

### date(date2)
Return `true` if `date1`'s date is equal to `date2`'s date.

```javascript
let date1 = new Date(2016, 11, 1);
let date2 = new Date(2016, 10, 1);
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.date(date2)) // -> true
console.log(dateEq2.date()); // -> true
```

### week(date2)
Return `true` if `date1`'s week number is equal to `date2`'s week number.

```javascript
let date1 = new Date(2016, 11, 1); // Thu 1 Dec 2016
let date2 = new Date(2016, 10, 27); // Sun 27 Nov 2016
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.week(date2)) // -> true
console.log(dateEq2.week()); // -> true
```

### month(date2)
Return `true` if `date1`'s month is equal to `date2`'s month.

```javascript
let date1 = new Date(2016, 11, 1);
let date2 = new Date(2016, 11, 31);
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.month(date2)) // -> true
console.log(dateEq2.month()); // -> true
```

### year(date2)
Return `true` if `date1`'s year is equal to `date2`'s year.

```javascript
let date1 = new Date(2016, 11, 31);
let date2 = new Date(2016, 0, 1);
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.year(date2)) // -> true
console.log(dateEq2.year()); // -> true
```

### hours(date2)
**Alias: `hrs(date2)`**

Return `true` if `date1`'s hours is equal to `date2`'s hours.

```javascript
let date1 = new Date(2016, 0, 1, 0);
let date2 = new Date(2016, 11, 31, 0);
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.hours(date2)) // -> true
console.log(dateEq2.hours()); // -> true
```

### minutes(date2)
**Alias: `min(date2)`**

Return `true` if `date1`'s minutes is equal to `date2`'s minutes.

```javascript
let date1 = new Date(2016, 0, 1, 0, 15); // 1 Jan 2016 0:15:00
let date2 = new Date(2016, 11, 31, 12, 15); // 31 Dec 2016 12:15:00
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.minutes(date2)) // -> true
console.log(dateEq2.minutes()); // -> true
```

### seconds(date2)
**Alias: `sec(date2)`**

Return `true` if `date1`'s seconds is equal to `date2`'s seconds.

```javascript
let date1 = new Date(2016, 0, 1, 0, 15, 30); // 1 Jan 2016 0:15:30
let date2 = new Date(2016, 11, 31, 5, 10, 30); // 31 Dec 2016 5:10:30
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.seconds(date2)) // -> true
console.log(dateEq2.seconds()); // -> true
```

### milliseconds(date2)
**Alias: `ms(date2)`**

Return `true` if `date1`'s milliseconds is equal to `date2`'s milliseconds.

```javascript
let date1 = new Date();
let date2 = new Date(date1.getTime());
let dateEq1 = new DateEQ(date1);
let dateEq2 = new DateEQ(date1, date2);
console.log(dateEq1.milliseconds(date2)) // -> true
console.log(dateEq2.milliseconds()); // -> true
```

### DateEQ.Comparer
The class that contain **static** methods for checking date equality. All methods are similar to `DateEQ` methods.

- `eq(date1, date2)`
- `day(date1, date2)`
- `date(date1, date2)`
- `week(date1, date2)`
- `month(date1, date2)`
- `year(date1, date2)`
- `hours(date1, date2)`, `hrs(date1, date2)`
- `minutes(date1, date2)`, `min(date1, date2)`
- `seconds(date1, date2)`, `sec(date1, date2)`
- `milliseconds(date1, date2)`, `ms(date1, date2)`

**Example:**
```javascript
const Comparer = DateEQ.Comparer;
let date1 = new Date();
let date2 = new Date(date1.getTime());
console.log(Comparer.eq(date1, date2)); // -> true
```
