import isDate from './isDate';

/**
 * Validate given dates.
 *
 * @export
 * @param {unknown} date1 First object to be validated.
 * @param {unknown} date2 Secon object to be validated.
 */
export default function validateDates(date1: unknown, date2: unknown): boolean {
	const isDate1Valid = isDate(date1);
	const isDate2Valid = isDate(date2);

	return isDate1Valid && isDate2Valid;
}
