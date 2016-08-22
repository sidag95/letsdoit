(function(){
	var loginCtrl = function($location, authentication){
		var vm = this;
		vm.pageHeader = {
			title : "Sign into Letsdoit"
		};
		vm.credentials = {
			name : '',
			email : '',
			password : ''
		};

		vm.returnPage = $location.search().page || '/';


		vm.onSubmit = function(){
			console.log(vm.credentials);
			vm.formError = "";
			if(!vm.credentials.email || !vm.credentials.password){
				vm.formError = "All fields are required."
				return false;
			}
			else{
				vm.doLogin();
			}
		};

		vm.doLogin = function(){
			vm.formError = "";
			authentication.login(vm.credentials).error(function(err){
				vm.formError = err;
			})
			.then(function(){
				$location.search('page', null);
				$location.path(vm.returnPage);
			});
		};

	}

	loginCtrl.$inject = ['$location', 'authentication'];
	
	angular.module('letsdoitApp').controller('loginCtrl', loginCtrl);

})();