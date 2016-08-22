(function(){
	angular.module('letsdoitApp').filter('addHtmlLineBreaks', addHtmlLineBreaks);

	function addHtmlLineBreaks () {
		return function (text) {
			var output = text.replace(/\n/g, '<br/>');
			console.log(output);
			return output;
		};
	}

})();