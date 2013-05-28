describe("wordwrap", function(){

	it("should be defined", function(){
		expect(WordWrap).toBeDefined();
	});

	it("should return empty string on null input", function(){
		expect(WordWrap.wrap(null,0)).toEqual("");
	});

	it("should return empty string on empty input", function(){
		expect(WordWrap.wrap("", 0)).toEqual("");
	});

	it("should return original string if wrap is 0", function() {
		expect(WordWrap.wrap("water", 0)).toEqual("water");
	});

	it("should break line without spaces", function(){
		expect(WordWrap.wrap("water", 4)).toEqual("wate\nr");
	});

	it("should break line into multiple spaces", function(){
		expect(WordWrap.wrap("water", 2)).toEqual("wa\nte\nr");
	});

	it("should break line if a previous space is found", function(){
		expect(WordWrap.wrap("water tap", 8)).toEqual("water\ntap");
	});

	it("should wrap within boundary", function() {
		expect(WordWrap.wrap("word word", 3)).toEqual("wor\nd\nwor\nd");
	});

	it("should wrap at boundary", function() {
		expect(WordWrap.wrap("word word", 4)).toBeDefined("word\nword");
	});

	it("should wrap at space", function() {
		expect(WordWrap.wrap("word word word", 9)).toEqual("word word\nword");
	});

	it("should wrap at last space", function() {
		expect(WordWrap.wrap("word word word", 10)).toEqual("word word\nword");
	});

});