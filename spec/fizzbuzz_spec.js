describe("fizzbuzz", function() {

	it("should be defined", function() {
		expect(FizzBuzz).toBeDefined();
	});

	it("should accept range and return array", function() {
		expect(FizzBuzz.run(1, 1)).toEqual([1]);
		expect(FizzBuzz.run(1, 2)).toEqual([1, 2]);
	});

	it("should return fizz for mulitple of 3", function() {
		var arr = FizzBuzz.run(1, 9);
		expect(arr[2]).toEqual("Fizz");
		expect(arr[5]).toEqual("Fizz");
		expect(arr[8]).toEqual("Fizz");
	});

	it("should return buzz for mulitple of 5", function() {
		var arr = FizzBuzz.run(1, 10);
		expect(arr[4]).toEqual("Buzz");
		expect(arr[9]).toEqual("Buzz");
	});

	it("should return FizzBuzz for multiple of 3 and 5", function() {
		var arr = FizzBuzz.run(1, 30);
		expect(arr[14]).toEqual("FizzBuzz");
		expect(arr[29]).toEqual("FizzBuzz");
	});

});