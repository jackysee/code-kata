var Potter = {
	discounts:[1, 1, 0.95, 0.9, 0.8, 0.75],
	buy: function(orders){
		return this.getAllPrice(orders);
	},
	getAllPrice: function(orders){
		return 8*this.getDiscount(orders);
	},
	getDiscount: function(orders){
		var bookCounts = this.getBookCounts(orders);
		var combos = this.getSortedCombos(bookCounts);
		combos = this.adjustCombo(combos);
		var totalDiscount = 0;
		for(var i=0, l=combos.length; i<l; i++){
			totalDiscount += combos[i]*this.discounts[combos[i]];
		}
		return Math.round(totalDiscount*100)/100; //avoid floating pt problem
	},
	getBookCounts: function(orders){
		var bookCounts= [0, 0, 0, 0, 0];
		for(var i=0, l=orders.length; i<l; i++){
			bookCounts[orders[i]] += 1;
		}
		return bookCounts.sort().reverse();
	},
	getSortedCombos: function(bookCounts){
		var combo = [];
		while(this.getNoOfBooks(bookCounts)>0){
			var noOfBookInSet = 0;
			for(var i=0, l=bookCounts.length; i<l; i++){
				var count = bookCounts[i];
				if(count > 0){
					bookCounts[i] -= 1;
					noOfBookInSet += 1;
				}
			}
			combo.push(noOfBookInSet);
		}
		return combo.sort().reverse();
	},
	getNoOfBooks: function(bookCounts){
		var total = 0;
		for(var i=0, l=bookCounts.length; i<l; i++){
			total += bookCounts[i];
		}
		return total;
	},
	adjustCombo: function(combos){
		//replacing 5,3 pairs ==> 4,4
		//to handle the special case that
		// 5*0.75 + 3*0.9 = 6.45
		// 8*0.8 = 6.4
		// so buying 4,4 is more preferred
		var combosStr = combos.join("");
		var indexOfFive = combosStr.indexOf("5");
		var indexOfThree = combosStr.indexOf("3");
		while(indexOfFive!=-1 && indexOfThree!=-1){
			combosStr = combosStr.replace(/5/, '4');
			combosStr = combosStr.replace(/3/, '4');
			indexOfFive = combosStr.indexOf("5");
			indexOfThree = combosStr.indexOf("3");
		}
		console.log('combostr', combosStr);
		return combosStr.split("").map(function(count){
			return parseInt(count, 10);
		});
	}



	/*

	[0, 1] ==> (1, 1, 0, 0, 0)

	[0, 0, 1, 1, 2, 2, 3, 4]
	==> (2, 2, 2, 1, 1)
	==>
	*	(1, 1, 1, 1, 1)
		(1, 1, 1, 0, 0)

	*	(1, 1, 1, 0, 0)
		(1, 1, 1, 0, 0)
		(0, 0, 0, 1, 1)

	*	(1, 1, 1, 1, 0)
		(1, 1, 1, 0, 1)

	3, 2, 4, 2, 1
	==>
	1, 1, 1, 1, 1
	1, 1, 1, 1, 0
	1, 0, 1, 0, 0
	0, 0, 1, 0, 0


	 */

};