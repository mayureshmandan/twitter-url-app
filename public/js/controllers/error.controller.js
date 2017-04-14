app.controller('ErrorController', UserController);

function ErrorController($scope, $window) {
	$scope.backtoHome() = function(){
		$window.location.reload();
	};
};