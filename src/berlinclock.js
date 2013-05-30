var BerlinClock = {
	render: function(input, renderer){
		renderer = renderer || this.stringRenderer;
		var time = this.parseTime(input);
		var viewModel = this.getViewModel(time);
		return renderer.render(viewModel);
	},
	parseTime: function(input){
		var arr = input.split(":");
		return {
			hour: parseInt(arr[0], 10),
			min: parseInt(arr[1], 10),
			sec: parseInt(arr[2], 10)
		};
	},
	getViewModel: function(time){
		return {
			seconds: time.sec % 4 > 1 ? 0 : 1,
			hoursTop: Math.floor(time.hour/5),
			hoursBottom: time.hour%5,
			minTop: Math.floor(time.min/5),
			minBottom: time.min%5
		};

	}
};

BerlinClock.stringRenderer = {
	render: function(viewModel){
		return this.renderSeconds(viewModel.seconds) + "\n" +
			this.renderHours(viewModel.hoursTop, viewModel.hoursBottom) + "\n" +
			this.renderMinutes(viewModel.minTop, viewModel.minBottom);
	},
	renderSeconds: function(sec){
		return this.renderSegment("Y", "O", sec, 1);
	},
	renderHours: function(top, bottom){
		return this.renderSegment("R", "O", top, 4) + '\n' +
			this.renderSegment("R", "O", bottom, 4);
	},
	renderMinutes: function(top, bottom){
		var fiveSegment = this.renderSegment("Y", "O", top, 11);
		return this.decorateFiveMinutes(fiveSegment) + "\n" +
			this.renderSegment("Y", "O", bottom, 4);
	},
	decorateFiveMinutes: function(seg){
		return seg.replace(/YYY/g, 'YYR');
	},
	renderSegment: function(onChar, offChar, onNum, len){
		return this.timesStr(onChar, onNum) +
			this.timesStr(offChar, len - onNum);
	},
	timesStr: function(c, times){
		var arr = [];
		for(var i=0; i<times; i++){
			arr.push(c);
		}
		return arr.join("");
	}
};