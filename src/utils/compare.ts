import validateDates from './validateDates';

/**
 * Compare two dates via `Date`'s getter function.
 *
 * @export
 * @template T Return type of `getter` function.
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @param {() => T} getter `Date`'s getter function.
 * @returns {boolean}
 */
export default function compare<T>(
	date1: Date,
	date2: Date,
	getter: () => T
): boolean {
	if (!validateDates(date1, date2)) {
		return false;
	}

	return getter.call(date1) === getter.call(date2);
}
