(function(){


function listCtrl(letsdoitData, $uibModal){
	if (window.location.pathname !== '/') {
		window.location.href = '/#' + window.location.pathname;
	}
	var vm = this;
	vm.pageHeader = {title : "Tasks"};
	vm.message = "Loading your Tasks List . . .";
	letsdoitData.tasksList()
		.success(function(data){
			vm.message = data.length > 0? "" : "Hurray! No more tasks left.";
			vm.data = { tasks : data };
			console.log(vm.data);
		})
		.error(function(e){
			vm.message = "Sorry, something's gone wrong. Please Try again";
		});
		vm.popupAddTask = function(){
			var modalInstance = $uibModal.open({
				templateUrl : '/addTaskModal/addTaskModal.view.html',
				controller : 'addTaskModalCtrl as vm'
			});
			modalInstance.result.then(function(data){
				vm.data.tasks.push(data);
			});
		};
}
listCtrl.$inject = ['letsdoitData', '$uibModal'];
angular.module('letsdoitApp').controller('listCtrl', listCtrl);
})();