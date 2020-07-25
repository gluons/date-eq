import { week } from '../dist';

describe('week()', () => {
	const a = new Date(2016, 11, 1);
	const b = new Date(2016, 10, 27);
	const c = new Date(2016, 11, 8);

	it('should return `true` when two weeks are equal', () => {
		expect(week(a, b)).toBe(true);
	});
	it('should return `false` when two weeks are not equal', () => {
		expect(week(a, c)).toBe(false);
	});
});
