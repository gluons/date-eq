/**
 * Check whether a given object is date.
 *
 * @export
 * @param {unknown} date An object to be checked.
 * @returns {boolean}
 */
export default function isDate(date: unknown): boolean {
	return date instanceof Date;
}
