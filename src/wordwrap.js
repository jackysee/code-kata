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
		if(input[wrap] === " "){
			return wrap;
		}
		var breakPos = wrap;
		var lastSpaceIndex = input.substring(0, wrap).lastIndexOf(" ");
		if(lastSpaceIndex !== -1){
			wrap = lastSpaceIndex ; //shift wrap position
		}
		return wrap;
	}





};