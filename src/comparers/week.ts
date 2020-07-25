import dayjs from 'dayjs';

import validateDates from '../utils/validateDates';

/**
 * Compare the week of year of `date1` and `date2`.
 *
 * @export
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {boolean}
 */
export default function week(date1: Date, date2: Date): boolean {
	if (!validateDates(date1, date2)) {
		return false;
	}

	const djsDate1 = dayjs(date1);
	const djsDate2 = dayjs(date2);

	return djsDate1.week() === djsDate2.week();
}
