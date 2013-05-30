describe("berlinclock", function() {

	it("should be defined", function() {
		expect(BerlinClock).toBeDefined();
	});

	describe("string result", function() {

		function getSec(input){
			var result = BerlinClock.render("00:00:"+input);
			return result[0];
		}
		function getHour(input){
			var result = BerlinClock.render(input+":00:00");
			return result.substring(2, 11);
		}
		function getMin(input){
			var result = BerlinClock.render("00:"+input+":00");
			return result.substring(12);
		}

		describe("second", function() {

			it("should render Y at second 00", function(){
				expect(getSec("00")).toEqual("Y");
			});

			it("should render Y at second 01", function(){
				expect(getSec("01")).toEqual("Y");
			});

			it("should render O at second 02", function(){
				expect(getSec("02")).toEqual("O");
			});

			it("should render O at second 03", function(){
				expect(getSec("03")).toEqual("O");
			});

			it("should render Y at second 04", function(){
				expect(getSec("04")).toEqual("Y");
			});
		});

		describe("hours", function() {

			it("should render hour 00 as OOOO OOOO", function() {
				expect(getHour("00")).toEqual("OOOO\nOOOO");
			});

			it("should render hour 05 as ROOO OOOO", function() {
				expect(getHour("05")).toEqual("ROOO\nOOOO");
			});

			it("should render hour 06 as ROOO ROOO", function() {
				expect(getHour("06")).toEqual("ROOO\nROOO");
			});

			it("should render hour 09 as ROOO RRRR", function() {
				expect(getHour("09")).toEqual("ROOO\nRRRR");
			});

			it("should render hour 16 as ROOO ROOO", function() {
				expect(getHour("16")).toEqual("RRRO\nROOO");
			});

			it("should render hour 24 as RRRR RRRR", function() {
				expect(getHour("24")).toEqual("RRRR\nRRRR");
			});
		});

		describe("minutes", function() {

			it("should render min 00 as OOOOOOOOOOO OOOO", function() {
				expect(getMin("00")).toEqual("OOOOOOOOOOO\nOOOO");
			});

			it("should render min 01 as OOOOOOOOOOO YOOO", function() {
				expect(getMin("01")).toEqual("OOOOOOOOOOO\nYOOO");
			});

			it("should render min 03 as OOOOOOOOOOO YYYO", function() {
				expect(getMin("03")).toEqual("OOOOOOOOOOO\nYYYO");
			});

			it("should render min 05 as YOOOOOOOOOO OOOO", function() {
				expect(getMin("05")).toEqual("YOOOOOOOOOO\nOOOO");
			});

			it("should render min 10 as YYOOOOOOOOO OOOO", function() {
				expect(getMin("10")).toEqual("YYOOOOOOOOO\nOOOO");
			});

			it("should render min 15 as YYROOOOOOOO OOOO", function() {
				expect(getMin("15")).toEqual("YYROOOOOOOO\nOOOO");
			});

			it("should render min 25 as YYRYYOOOOOO OOOO", function() {
				expect(getMin("25")).toEqual("YYRYYOOOOOO\nOOOO");
			});

			it("should render min 30 as YYRYYROOOOO OOOO", function() {
				expect(getMin("30")).toEqual("YYRYYROOOOO\nOOOO");
			});

			it("should render min 40 as YYRYYRYYOOO OOOO", function() {
				expect(getMin("40")).toEqual("YYRYYRYYOOO\nOOOO");
			});

			it("should render min 59 as YYRYYRYYRYY YYYY", function() {
				expect(getMin("59")).toEqual("YYRYYRYYRYY\nYYYY");
			});

		});
	});


});