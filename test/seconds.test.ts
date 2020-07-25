import { seconds } from '../dist';

describe('seconds()', () => {
	const a = new Date(2016, 0, 1, 0, 15, 30);
	const b = new Date(2016, 11, 31, 5, 10, 30);
	const c = new Date(2016, 0, 1, 0, 15, 20);

	it('should return `true` when two seconds are equal', () => {
		expect(seconds(a, b)).toBe(true);
	});
	it('should return `false` when two seconds are not equal', () => {
		expect(seconds(a, c)).toBe(false);
	});
});
