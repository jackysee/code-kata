describe("romannumerals", function() {

	it("should be defined", function() {
		expect(RomanNumerals).toBeDefined();
	});

	var testCases = [
		[1, "I"],
		[2, "II"],
		[3, "III"],
		[4, "IV"],
		[5, "V"],
		[6, "VI"],
		[7, "VII"],
		[8, "VIII"],
		[9, "IX"],
		[10, "X"],
		[11, "XI"],
		[24, "XXIV"],
		[44, "XLIV"],
		[94, "XCIV"],
		[101, "CI"],
		[404, "CDIV"],
		[904, "CMIV"],
		[3999, "MMMCMXCIX"],
		[4000, "out of range"]
	];
	/*
		roman(9) -> IX
		roman(10) -> X
		roman(50) -> L
		roman(100) -> C
		roman(500) -> D
		roman(1000) -> M
	 */

	for(var i=0, l=testCases.length; i<l; i++){
		var tc = testCases[i];
		it(
			"should return " + tc[1] + " for " + tc[0],
			(function(input, output){
				return function(){
					expect(RomanNumerals.get(input)).toEqual(output);
				};
			})(tc[0], tc[1])
		);
	}

});