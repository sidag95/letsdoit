(function (){
	angular.module('letsdoitApp').controller('taskCtrlDetailsEdit', taskCtrlDetailsEdit);

	
	function taskCtrlDetailsEdit($routeParams, letsdoitData){
		var vm = this;
		vm.listId = $routeParams.listId;
		letsdoitData.taskById(vm.listId)
		.success(function(data){
			vm.data = {task:data};
			vm.pageHeader = {title :vm.data.task.taskName};
		})
		.error(function(e){
			console.log(e);
		});
	}
	taskCtrlDetailsEdit.$inject = ['$routeParams', 'letsdoitData'];
})();