import { milliseconds } from '../dist';

describe('milliseconds()', () => {
	const a = new Date(2016, 0, 1, 0, 15, 30, 500);
	const b = new Date(2016, 11, 31, 5, 10, 20, 500);
	const c = new Date(2016, 0, 1, 0, 15, 30, 250);

	it('should return `true` when two milliseconds are equal', () => {
		expect(milliseconds(a, b)).toBe(true);
	});
	it('should return `false` when two milliseconds are not equal', () => {
		expect(milliseconds(a, c)).toBe(false);
	});
});
