describe("primefactor", function() {

	var testCases = [
		[1, []],
		[2, [2]],
		[3, [3]],
		[4, [2, 2]],
		[5, [5]],
		[6, [2,3]],
		[7, [7]],
		[8, [2, 2, 2]],
		[9, [3, 3]],
		[10, [2, 5]],
		[11, [11]],
		[12, [2, 2, 3]]
	];



	it("should be defined", function() {
		expect(PrimeFactor).toBeDefined();
	});

	for(var i=0, l=testCases.length; i<l; i++){
		var tc = testCases[i];
		it(
			"should return " + tc[1] + " for " + tc[0] ,
			(function(input, output){
				return function(){
					expect(PrimeFactor.find(input)).toEqual(output);
				}
			})(tc[0], tc[1])
		);
	}


});