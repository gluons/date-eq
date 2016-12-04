'use strict';

const moment = require('moment');
const isValidDate = require('./is-valid-date');
const eq = require('./eq');

class Comparer {
	static eq(date1, date2) {
		return eq(date1, date2, Date.prototype.getTime);
	}
	static day(date1, date2) {
		return eq(date1, date2, Date.prototype.getDay);
	}
	static date(date1, date2) {
		return eq(date1, date2, Date.prototype.getDate);
	}
	static week(date1, date2) {
		if (isValidDate(date1, date2)) {
			let mDate1 = moment(date1);
			let mDate2 = moment(date2);
			return mDate1.week() == mDate2.week();
		} else {
			return false;
		}
	}
	static month(date1, date2) {
		return eq(date1, date2, Date.prototype.getMonth);
	}
	static year(date1, date2) {
		return eq(date1, date2, Date.prototype.getFullYear);
	}
	static hours(date1, date2) {
		return eq(date1, date2, Date.prototype.getHours);
	}
	static minutes(date1, date2) {
		return eq(date1, date2, Date.prototype.getMinutes);
	}
	static seconds(date1, date2) {
		return eq(date1, date2, Date.prototype.getSeconds);
	}
	static milliseconds(date1, date2) {
		return eq(date1, date2, Date.prototype.getMilliseconds);
	}
}

/*
 * Alias
 */
Comparer.hrs = Comparer.hours;
Comparer.min = Comparer.minutes;
Comparer.sec = Comparer.seconds;
Comparer.ms = Comparer.milliseconds;

module.exports = Comparer;
