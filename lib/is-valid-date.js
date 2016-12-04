'use strict';

module.exports = function isValidDate(date1, date2) {
	return (date1 && date2) && (date1 instanceof Date) && (date2 instanceof Date);
};
