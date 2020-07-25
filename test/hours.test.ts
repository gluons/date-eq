import { hours } from '../dist';

describe('hours()', () => {
	const a = new Date(2016, 0, 1, 0);
	const b = new Date(2016, 11, 31, 0);
	const c = new Date(2016, 0, 1, 12);

	it('should return `true` when two hours are equal', () => {
		expect(hours(a, b)).toBe(true);
	});
	it('should return `false` when two hours are not equal', () => {
		expect(hours(a, c)).toBe(false);
	});
});
