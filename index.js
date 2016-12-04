'use strict';

const nvl = require('nvl');
const Comparer = require('./lib/comparer');

class DateEQ {
	constructor(date1, date2) {
		if (date1 instanceof Date) {
			this.date1 = date1;
		} else {
			throw new Error('DateEQ: first argument is not `Date` type.');
		}
		if (date2 && (date2 instanceof Date)) {
			this.date2 = date2;
		}
	}

	eq(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.eq(this.date1, date2);
	}

	day(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.day(this.date1, date2);
	}

	date(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.date(this.date1, date2);
	}

	week(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.week(this.date1, date2);
	}

	month(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.month(this.date1, date2);
	}

	year(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.year(this.date1, date2);
	}

	hours(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.hours(this.date1, date2);
	}

	minutes(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.minutes(this.date1, date2);
	}

	seconds(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.seconds(this.date1, date2);
	}

	milliseconds(date2) {
		date2 = nvl(date2, this.date2);
		return Comparer.milliseconds(this.date1, date2);
	}
}

DateEQ.Comparer = Comparer;

/*
 * Alias
 */
DateEQ.prototype.hrs = DateEQ.prototype.hours;
DateEQ.prototype.min = DateEQ.prototype.minutes;
DateEQ.prototype.sec = DateEQ.prototype.seconds;
DateEQ.prototype.ms = DateEQ.prototype.milliseconds;

module.exports = DateEQ;
