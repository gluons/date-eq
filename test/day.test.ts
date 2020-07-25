import { day } from '../dist';

describe('day()', () => {
	const a = new Date(2016, 11, 1);
	const b = new Date(2016, 11, 8);
	const c = new Date(2016, 11, 3);

	it('should return `true` when two days are equal', () => {
		expect(day(a, b)).toBe(true);
	});
	it('should return `false` when two days are not equal', () => {
		expect(day(a, c)).toBe(false);
	});
});
