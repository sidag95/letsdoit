(function(){
	
	var addTaskModalCtrl = function($uibModalInstance, letsdoitData){
		var vm = this;
		vm.formData ={};
		vm.modal = {
			close :function(result){
				$uibModalInstance.close(result);
			},
		 	cancel : function(){
		 		$uibModalInstance.dismiss('cancel');
		 	}
		};
		vm.onSubmit = function(){
			vm.formError = "";
			if(!vm.formData.taskName || !vm.formData.taskBody){
				vm.formError = "All fields are required.";
				return false;
			}
			else{
				vm.doAddNewTask(vm.formData);
			}
		};
		vm.doAddNewTask = function(formData){
			letsdoitData.addNewTask({
				taskName : formData.taskName,
				taskBody : formData.taskBody
			})
			.success(function(data){
				vm.modal.close(data);
			})
			.error(function(data){
				vm.formError = "Your task could not be saved. Please try again."
			});
			return false;
		};
	}
	addTaskModalCtrl.$inject = ['$uibModalInstance', 'letsdoitData'];
	angular.module('letsdoitApp').controller('addTaskModalCtrl', addTaskModalCtrl);
})();