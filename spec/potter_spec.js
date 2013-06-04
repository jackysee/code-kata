/*
	2 ==> 5%   ==> @0.4 x 2 ==> 0.8
	3 ==> 10%  ==> @0.8 x 3 ==> 2.4
	4 ==> 20%  ==> @1.6 x 4 ==> 6.4
	5 ==> 25%  ==> @2   x 5 ==> 100

	diff: 1.6, 4, 3.6



	e.g.
	[0, 0, 1, 1, 2, 2, 3, 4]
	combo1: [0,1,2,3,4][0,1,2]  : 5*8*0.75 + 3*8*0.9 = 51.6
	combo2: [0,1,2][0,1,2][3,4] : 3*8*0.9*2 + 2*8*0.95 = 58.4
	combo3: [0,1,2,3][0,1,2,5]  : 4*8*0.8*2 = 51.2  <=== this is the lowest

	[0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4]
	==> [0, 1, 2, 3, 4][0, 1, 2, 3][0, 2][2]
	==> 8*(5*.75 + 4*.8 + 2*.95 + 1)
	==> 78.8


 	[0, 1, 1, 2, 2, 2, 3, 3, 3	, 3, 4, 4, 4, 4, 4]
 	==> 100

 */

describe("potter", function() {

	it("should be defined", function() {
		expect(Potter).toBeDefined();
	});

	it("should buy one book for 8", function(){
		expect(Potter.buy([0])).toEqual(8);
	});

	it("should buy the same book for no discount", function() {
		expect(Potter.buy([0, 0])).toEqual(16);
	});

	it("should buy 2 different book for 5% off", function() {
		expect(Potter.buy([0, 1])).toEqual(2*8*0.95);
		expect(Potter.buy([1, 2])).toEqual(2*8*0.95);
		expect(Potter.buy([2, 3])).toEqual(2*8*0.95);
		expect(Potter.buy([3, 4])).toEqual(2*8*0.95);
	});

	it("should prefer 4,4 combo to 5,3 combo", function() {
		expect(Potter.buy([0, 0, 1, 1, 2, 2, 3, 4])).toEqual(51.2);
		//[0,1,2,3,4][0,1,2] ==> 51.6
		//[0,1,2,3][0,1,2,5] ==> 51.2
	});

	it("should prefer 5,2 combo to 4,3 discount", function() {
		expect(Potter.buy([0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4])).toEqual(78.8);
		//[0, 1, 2, 3, 4][0, 1, 2, 3][0, 2][2] ==> 78.8
		//[0, 1, 2, 4][0, 1, 2, 3][0, 2, 3][2] ==> 80.8
	});

	it("should prefer 4,4 combo to 5,3 combo that appear more than once", function() {
		expect(Potter.buy([0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4])).toEqual(100);
		//[0,1,2,3,4], [1,2,3,4], [2,3,4], [3,4], [4] == >100.4
		//[4], [3, 4], [0, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4] ==> 100.0
	});

});