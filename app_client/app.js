(function(){
angular.module('letsdoitApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);
function config ($routeProvider, $locationProvider) {
$routeProvider
.when('/', {
	templateUrl : 'lists/lists.view.html',
	controller : 'listCtrl',
	controllerAs : 'vm'
})
.when('/about',{
	templateUrl : '/common/views/genericText.view.html',
	controller : 'aboutCtrl',
	controllerAs : 'vm'
})
.when('/lists/:listId',{
	templateUrl : '/taskDetailsEdit/taskDetailsEdit.view.html',
	controller : 'taskCtrlDetailsEdit',
	controllerAs : 'vm'
})
.when('/register', {
	templateUrl : '/auth/register/register.view.html',
	controller : 'registerCtrl',
	controllerAs : 'vm'
})
.when('/login', {
templateUrl: '/auth/login/login.view.html',
controller: 'loginCtrl',
controllerAs: 'vm'
})
.otherwise({redirectTo : '/'});

$locationProvider.html5Mode(true);

}
angular
.module('letsdoitApp')
.config(['$routeProvider', '$locationProvider', config]);

})();