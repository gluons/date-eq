import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import eq from './comparers/eq';
import day from './comparers/day';
import date from './comparers/date';
import week from './comparers/week';
import month from './comparers/month';
import year from './comparers/year';
import hours from './comparers/hours';
import minutes from './comparers/minutes';
import seconds from './comparers/seconds';
import milliseconds from './comparers/milliseconds';

dayjs.extend(weekOfYear);

export {
	eq,
	day,
	date,
	week,
	month,
	year,
	hours,
	minutes,
	seconds,
	milliseconds
};

export const hrs = hours;
export const min = minutes;
export const sec = seconds;
export const ms = milliseconds;

const DateEQ = {
	eq,
	day,
	date,
	week,
	month,
	year,
	hours,
	hrs,
	minutes,
	min,
	seconds,
	sec,
	milliseconds,
	ms
};

export default DateEQ;
