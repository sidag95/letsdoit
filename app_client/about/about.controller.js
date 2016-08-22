(function(){
	angular.module('letsdoitApp').controller('aboutCtrl', aboutCtrl);

	function aboutCtrl(){
		var vm = this;
		vm.title = "About LetsDoIt";
		vm.main = {
			content : 'LetsDoIt is a task todolist which allows users to \n\nadd tasks \n\nedit them \n\nview them \n\nmark them as complete \n\nand \n\ndelete them.'
		};
	}
})();