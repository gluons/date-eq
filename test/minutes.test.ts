import { minutes } from '../dist';

describe('minutes()', () => {
	const a = new Date(2016, 0, 1, 0, 15);
	const b = new Date(2016, 11, 31, 12, 15);
	const c = new Date(2016, 0, 1, 0, 30);

	it('should return `true` when two minutes are equal', () => {
		expect(minutes(a, b)).toBe(true);
	});
	it('should return `false` when two minutes are not equal', () => {
		expect(minutes(a, c)).toBe(false);
	});
});
