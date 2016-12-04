'use strict';

const isValidDate = require('./is-valid-date');

module.exports = function eq(date1, date2, getter) {
	if (isValidDate(date1, date2)) {
		return getter.call(date1) == getter.call(date2);
	} else {
		return false;
	}
};
