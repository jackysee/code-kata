describe("bowlinggame", function() {

	var game;
	beforeEach(function() {
		game = BowlingGame.create();
	});

	it("should be defined", function() {
		expect(BowlingGame).toBeDefined();
		expect(BowlingGame.create).toBeDefined();
	});

	it("should create inst with roll() and score()", function() {
		expect(game.roll).toBeDefined();
		expect(game.score).toBeDefined();
	});

	function rollAll(score, times){
		times = times || 20;
		for(var i=0; i<times; i++){
			game.roll(score);
		}
	}

	it("should roll all 0 to score 0", function(){
		rollAll(0);
		expect(game.score()).toEqual(0);
	});

	it("should roll all 1 to 20", function() {
		rollAll(1);
		expect(game.score()).toEqual(20);
	});

	it("should record spare bonus", function() {
		game.roll(5);
		game.roll(5);
		game.roll(5);
		rollAll(0, 18);
		expect(game.score()).toEqual(20);
	});

	it("should record strike bonus", function() {
		game.roll(10);
		game.roll(5);
		game.roll(3);
		rollAll(0, 18);
		expect(game.score()).toEqual(26);
	});

	it("should finish game at 300", function() {
		rollAll(10, 12);
		expect(game.score()).toEqual(300);
	});

});