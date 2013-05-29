var PrimeFactor = {

	find:function(num){
		var result = [];
		for(var factor=2; factor<=num; factor++){
			if(num % factor === 0){ //divisible
				result.push(factor);
				result = result.concat(PrimeFactor.find(num / factor));
				break;
			}
		}
		return result;
	}


};