'use strict';

const assert = require('chai').assert;
const DateEQ = require('../');
const Comparer = DateEQ.Comparer;

describe('Comparer', () => {
	describe('eq()', () => {
		let a = new Date();
		let b = new Date(a.getTime());
		let c = new Date(0);
		it('should return `true` when two date objects are equal', () => {
			assert.isTrue(Comparer.eq(a, b));
		});
		it('should return `false` when two date objects are not equal', () => {
			assert.isFalse(Comparer.eq(a, c));
		});
	});

	describe('day()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 11, 8);
		let c = new Date(2016, 11, 3);
		it('should return `true` when two days are equal', () => {
			assert.isTrue(Comparer.day(a, b));
		});
		it('should return `false` when two days are not equal', () => {
			assert.isFalse(Comparer.day(a, c));
		});
	});

	describe('date()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 10, 1);
		let c = new Date(2016, 11, 3);
		it('should return `true` when two dates are equal', () => {
			assert.isTrue(Comparer.date(a, b));
		});
		it('should return `false` when two dates are not equal', () => {
			assert.isFalse(Comparer.date(a, c));
		});
	});

	describe('week()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 10, 27);
		let c = new Date(2016, 11, 8);
		it('should return `true` when two weeks are equal', () => {
			assert.isTrue(Comparer.week(a, b));
		});
		it('should return `false` when two weeks are not equal', () => {
			assert.isFalse(Comparer.week(a, c));
		});
	});

	describe('month()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 11, 31);
		let c = new Date(2016, 10, 1);
		it('should return `true` when two months are equal', () => {
			assert.isTrue(Comparer.month(a, b));
		});
		it('should return `false` when two months are not equal', () => {
			assert.isFalse(Comparer.month(a, c));
		});
	});

	describe('year()', () => {
		let a = new Date(2016, 11, 31);
		let b = new Date(2016, 0, 1);
		let c = new Date(2015, 0, 1);
		it('should return `true` when two years are equal', () => {
			assert.isTrue(Comparer.year(a, b));
		});
		it('should return `false` when two years are not equal', () => {
			assert.isFalse(Comparer.year(a, c));
		});
	});

	describe('hours()', () => {
		let a = new Date(2016, 0, 1, 0);
		let b = new Date(2016, 11, 31, 0);
		let c = new Date(2016, 0, 1, 12);
		it('should return `true` when two hours are equal', () => {
			assert.isTrue(Comparer.hrs(a, b));
		});
		it('should return `false` when two hours are not equal', () => {
			assert.isFalse(Comparer.hrs(a, c));
		});
	});

	describe('minutes()', () => {
		let a = new Date(2016, 0, 1, 0, 15);
		let b = new Date(2016, 11, 31, 12, 15);
		let c = new Date(2016, 0, 1, 0, 30);
		it('should return `true` when two minutes are equal', () => {
			assert.isTrue(Comparer.min(a, b));
		});
		it('should return `false` when two minutes are not equal', () => {
			assert.isFalse(Comparer.min(a, c));
		});
	});

	describe('seconds()', () => {
		let a = new Date(2016, 0, 1, 0, 15, 30);
		let b = new Date(2016, 11, 31, 5, 10, 30);
		let c = new Date(2016, 0, 1, 0, 15, 20);
		it('should return `true` when two seconds are equal', () => {
			assert.isTrue(Comparer.sec(a, b));
		});
		it('should return `false` when two seconds are not equal', () => {
			assert.isFalse(Comparer.sec(a, c));
		});
	});

	describe('milliseconds()', () => {
		let a = new Date(2016, 0, 1, 0, 15, 30, 500);
		let b = new Date(2016, 11, 31, 5, 10, 20, 500);
		let c = new Date(2016, 0, 1, 0, 15, 30, 250);
		it('should return `true` when two milliseconds are equal', () => {
			assert.isTrue(Comparer.ms(a, b));
		});
		it('should return `false` when two milliseconds are not equal', () => {
			assert.isFalse(Comparer.ms(a, c));
		});
	});
});

describe('DateEQ', () => {
	describe('eq()', () => {
		let a = new Date();
		let b = new Date(a.getTime());
		let c = new Date(0);
		it('should return `true` when two date objects are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.eq());
		});
		it('should return `true` when two date objects are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.eq(b));
		});
		it('should return `false` when two date objects are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.eq());
		});
		it('should return `false` when two date objects are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.eq(c));
		});
	});

	describe('day()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 11, 8);
		let c = new Date(2016, 11, 3);
		it('should return `true` when two days are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.day());
		});
		it('should return `true` when two days are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.day(b));
		});
		it('should return `false` when two days are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.day());
		});
		it('should return `false` when two days are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.day(c));
		});
	});

	describe('date()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 10, 1);
		let c = new Date(2016, 11, 3);
		it('should return `true` when two dates are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.date());
		});
		it('should return `true` when two dates are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.date(b));
		});
		it('should return `false` when two dates are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.date());
		});
		it('should return `false` when two dates are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.date(c));
		});
	});

	describe('week()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 10, 27);
		let c = new Date(2016, 11, 8);
		it('should return `true` when two weeks are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.week());
		});
		it('should return `true` when two weeks are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.week(b));
		});
		it('should return `false` when two weeks are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.week());
		});
		it('should return `false` when two weeks are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.week(c));
		});
	});

	describe('month()', () => {
		let a = new Date(2016, 11, 1);
		let b = new Date(2016, 11, 31);
		let c = new Date(2016, 10, 1);
		it('should return `true` when two months are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.month());
		});
		it('should return `true` when two months are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.month(b));
		});
		it('should return `false` when two months are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.month());
		});
		it('should return `false` when two months are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.month(c));
		});
	});

	describe('year()', () => {
		let a = new Date(2016, 11, 31);
		let b = new Date(2016, 0, 1);
		let c = new Date(2015, 0, 1);
		it('should return `true` when two years are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.year());
		});
		it('should return `true` when two years are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.year(b));
		});
		it('should return `false` when two years are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.year());
		});
		it('should return `false` when two years are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.year(c));
		});
	});

	describe('hours()', () => {
		let a = new Date(2016, 0, 1, 0);
		let b = new Date(2016, 11, 31, 0);
		let c = new Date(2016, 0, 1, 12);
		it('should return `true` when two hours are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.hrs());
		});
		it('should return `true` when two hours are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.hrs(b));
		});
		it('should return `false` when two hours are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.hrs());
		});
		it('should return `false` when two hours are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.hrs(c));
		});
	});

	describe('minutes()', () => {
		let a = new Date(2016, 0, 1, 0, 15);
		let b = new Date(2016, 11, 31, 12, 15);
		let c = new Date(2016, 0, 1, 0, 30);
		it('should return `true` when two minutes are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.min());
		});
		it('should return `true` when two minutes are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.min(b));
		});
		it('should return `false` when two minutes are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.min());
		});
		it('should return `false` when two minutes are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.min(c));
		});
	});

	describe('seconds()', () => {
		let a = new Date(2016, 0, 1, 0, 15, 30);
		let b = new Date(2016, 11, 31, 5, 10, 30);
		let c = new Date(2016, 0, 1, 0, 15, 20);
		it('should return `true` when two seconds are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.sec());
		});
		it('should return `true` when two seconds are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.sec(b));
		});
		it('should return `false` when two seconds are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.sec());
		});
		it('should return `false` when two seconds are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.sec(c));
		});
	});

	describe('milliseconds()', () => {
		let a = new Date(2016, 0, 1, 0, 15, 30, 500);
		let b = new Date(2016, 11, 31, 5, 10, 20, 500);
		let c = new Date(2016, 0, 1, 0, 15, 30, 250);
		it('should return `true` when two milliseconds are equal (by constructor)', () => {
			let dateEq = new DateEQ(a, b);
			assert.isTrue(dateEq.ms());
		});
		it('should return `true` when two milliseconds are equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isTrue(dateEq.ms(b));
		});
		it('should return `false` when two milliseconds are not equal (by constructor)', () => {
			let dateEq = new DateEQ(a, c);
			assert.isFalse(dateEq.ms());
		});
		it('should return `false` when two milliseconds are not equal (by parameter)', () => {
			let dateEq = new DateEQ(a);
			assert.isFalse(dateEq.ms(c));
		});
	});
});
