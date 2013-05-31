var BowlingGame = {
	create: function(){
		var rolls = [];
		return {
			roll: function(score){
				rolls.push(score);
			},
			score: function(){
				var total = 0, currentRoll = 0;
				for(var frame=0; frame<10; frame++){
					var score = 0;
					if(this.isStrike(currentRoll)){
						score += this.getStrikeScore(currentRoll);
						currentRoll += 1;
					}
					else if(this.isSpare(currentRoll)){
						score += this.getSpareScore(currentRoll);
						currentRoll += 2;
					}
					else{
						score += this.getFrameScore(currentRoll);
						currentRoll += 2;
					}
					total += score;
				}
				return total;
			},
			isStrike: function(currentRoll){
				return rolls[currentRoll] === 10;
			},
			getStrikeScore: function(currentRoll){
				return 10 + rolls[currentRoll+1] + rolls[currentRoll+2];
			},
			isSpare: function(currentRoll){
				return rolls[currentRoll] + rolls[currentRoll+1] === 10;
			},
			getSpareScore: function(currentRoll){
				return 10 + rolls[currentRoll+1];
			},
			getFrameScore: function(currentRoll){
				return rolls[currentRoll] + rolls[currentRoll+1];
			}
		};
	}

};