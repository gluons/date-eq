import compare from '../utils/compare';

/**
 * Compare the month of `date1` and `date2`.
 *
 * @export
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {boolean}
 */
export default function month(date1: Date, date2: Date): boolean {
	return compare(date1, date2, Date.prototype.getMonth);
}
