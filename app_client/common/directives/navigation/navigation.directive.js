(function(){
	angular.module('letsdoitApp').directive('navigation', navigation);

	function navigation(){
		return{
			restrict : 'EA',
			templateUrl : '/common/directives/navigation/navigation.template.html',
			controller: 'navigationCtrl as navvm'
		};	
	}
})();