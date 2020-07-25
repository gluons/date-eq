import { date } from '../dist';

describe('date()', () => {
	const a = new Date(2016, 11, 1);
	const b = new Date(2016, 10, 1);
	const c = new Date(2016, 11, 3);

	it('should return `true` when two dates are equal', () => {
		expect(date(a, b)).toBe(true);
	});
	it('should return `false` when two dates are not equal', () => {
		expect(date(a, c)).toBe(false);
	});
});
