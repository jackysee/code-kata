var FizzBuzz = {

	run: function(start, end){
		return this.createArray(start, end);
	},

	createArray: function(start, end){
		var arr = [];
		for(var i=start; i<=end; i++){
			var result = i;
			if(i%3 === 0){
				result = "Fizz";
			}
			if(i%5 === 0){
				result = "Buzz";
			}
			if(i%3 ==0 && i%5 ==0){
				result= "FizzBuzz";
			}
			arr.push(result);
		}
		return arr;
	}

};