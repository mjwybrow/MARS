app.controller('PollResultsController', function($scope, $routeParams, $location, $mdDialog, $interval) {
	// TODO: Request melts code and results

	$scope.pollCode = "QF177" 
	$scope.highestVotes = 100;

	$scope.results = [
		{ option: "Answer 1", votes: 0 },
		{ option: "Answer 2", votes: 0 },
		{ option: "Answer 3", votes: 0 },
		{ option: "Answer 4", votes: 0 },
		{ option: "Answer 5", votes: 0 },
	] 

	// Simulate new votes
	$interval(newVotes, 100);

	function newVotes() {
		$scope.results.forEach(function(x,i) {
			x.votes += Math.floor(Math.random()*2 + ((i+2)%2))
		});

		var highest = 0;

		$scope.results.forEach(function(x) {
			if (x.votes > highest) highest = x.votes;
		});

		if (highest > 100) $scope.highestVotes = highest;
	}


	// Color Generator
	// Adapted from: http://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
	function HSVtoRGB(h, s, v) {
	    var r, g, b, i, f, p, q, t;

	    h = h/360
	    i = Math.floor(h * 6);
	    f = h * 6 - i;
	    p = v * (1 - s);
	    q = v * (1 - f * s);
	    t = v * (1 - (1 - f) * s);
	    switch (i % 6) {
	        case 0: r = v, g = t, b = p; break;
	        case 1: r = q, g = v, b = p; break;
	        case 2: r = p, g = v, b = t; break;
	        case 3: r = p, g = q, b = v; break;
	        case 4: r = t, g = p, b = v; break;
	        case 5: r = v, g = p, b = q; break;
	    }
	    console.log(r,g,b)

	    var red = Math.floor(r * 255).toString(16);
	    var grn = Math.floor(g * 255).toString(16);
	    var blu = Math.floor(b * 255).toString(16);

	    return {
	        r: red.length === 2 ? red : "0"+red,
	        g: grn.length === 2 ? grn : "0"+grn,
	        b: blu.length === 2 ? blu : "0"+blu
	    };
	}

	// Assign colors
	for (var i = 0; i < $scope.results.length; i++)
	{
		col = HSVtoRGB(0+i*360/$scope.results.length,0.6,0.8);
		$scope.results[i].color = '#2196F3'// + col.r + col.g + col.b;
	}

})