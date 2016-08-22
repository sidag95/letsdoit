(function(){


var letsdoitData = function($http, authentication){
	var tasksList = function(){
		return $http.get('/api/tasks', {
			header : {
				Authorization : 'Bearer '+authentication.getToken()
			}
		});		
	};
	var taskById = function(taskId){
		return  $http.get('/api/tasks/'+taskId,  {
			header : {
				Authorization : 'Bearer '+authentication.getToken()
			}
		});
	}
	var addNewTask = function(data){
		return $http.post('/api/tasks/new', data,  {
			header : {
				Authorization : 'Bearer '+authentication.getToken()
			}
		});
	};
	return {
		tasksList : tasksList,
		taskById : taskById,
		addNewTask : addNewTask
	};
};
letsdoitData.$inject = ['$http', 'authentication'];

angular
.module('letsdoitApp')
.service('letsdoitData', letsdoitData);
})();
