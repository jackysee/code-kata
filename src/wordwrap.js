var WordWrap = {

	wrap: function(input, wrap){
		if(WordWrap.shouldNotWrap(input, wrap)){
			return input || "";
		}

		var breakPos = WordWrap.getBreakPos(input, wrap);

		return input.substring(0, breakPos).trim() + '\n' +
			WordWrap.wrap(input.substring(breakPos).trim(), wrap);
	},

	shouldNotWrap: function(input, wrap){
		input = input || "";
		return wrap === 0 || input.length < wrap;
	},

	getBreakPos: function(input, wrap){
		var breakPos = wrap;
		var spacesIndex = input.substring(0, breakPos).indexOf(" ");
		if(spacesIndex !== -1){
			breakPos = spacesIndex; //shift wrap position
		}
		return breakPos;
	}





};