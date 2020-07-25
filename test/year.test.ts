import { year } from '../dist';

describe('year()', () => {
	const a = new Date(2016, 11, 31);
	const b = new Date(2016, 0, 1);
	const c = new Date(2015, 0, 1);

	it('should return `true` when two years are equal', () => {
		expect(year(a, b)).toBe(true);
	});
	it('should return `false` when two years are not equal', () => {
		expect(year(a, c)).toBe(false);
	});
});
