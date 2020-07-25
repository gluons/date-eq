import { month } from '../dist';

describe('month()', () => {
	const a = new Date(2016, 11, 1);
	const b = new Date(2016, 11, 31);
	const c = new Date(2016, 10, 1);

	it('should return `true` when two months are equal', () => {
		expect(month(a, b)).toBe(true);
	});
	it('should return `false` when two months are not equal', () => {
		expect(month(a, c)).toBe(false);
	});
});
