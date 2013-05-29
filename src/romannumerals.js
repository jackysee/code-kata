var RomanNumerals = {

	level: [
		["I", "V", "X"],	//ones
		["X", "L", "C"],	//tens
		["C", "D", "M"],	//hundreds
		["M", "", ""]		//thousand
	],

	get: function(n){

		//limit is 3999  when only use numerals up to M (1000)
		if(n > 3999){
			return "out of range";
		}

		var digits = this.getDigits(n),
			result = "";

		for(var i=0, l=digits.length; i<l; i++){
			result += this.getLevelNumeral(this.level[l-i-1], digits[i]);
		}

		return result;
	},

	getDigits: function(n){
		var arr = (n+"").split("");
		for (var i = 0, l = arr.length; i<l; i++) {
			arr[i] = parseInt(arr[i], 10);
		}
		return arr;
	},

	timesStr: function(n, letter){
		var str = [];
		for(var i=0; i<n; i++){
			str.push(letter);
		}
		return str.join("");
	},

	getLevelNumeral: function(levelChars, n){
		var one = levelChars[0],
			five = levelChars[1],
			ten = levelChars[2];
		if(!n){
			return "";
		}
		if(n < 4){
			return this.timesStr(n, one);
		}
		if(n === 4){
			return one + five;
		}
		if(n === 5){
			return five;
		}
		if(n === 9){
			return one + ten;
		}
		if(n > 5){
			return five + this.timesStr(n-5, one);
		}

	}

};