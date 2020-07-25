import { eq } from '../dist';

describe('eq()', () => {
	const a = new Date();
	const b = new Date(a.getTime());
	const c = new Date(0);

	it('should return `true` when two date objects are equal', () => {
		expect(eq(a, b)).toBe(true);
	});

	it('should return `false` when two date objects are not equal', () => {
		expect(eq(a, c)).toBe(false);
	});
});
