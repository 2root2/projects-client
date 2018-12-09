projmodule.controller("projectController",function($scope,$rootScope,$http,$location,$interval){
	$scope.projectTitle = "";
	$scope.projectDesc = "";
	$scope.apiUrl = "http://localhost:8080/api/v1/"

	$scope.postProject = function () {
		console.log("posting project ....");
		var requestData = {};
		requestData.project = $scope.projectTitle;
		requestData.description = $scope.projectDesc;
		data = JSON.stringify(requestData);
		console.log(data);
		$http.post($scope.apiUrl+"projects/", data, {
				headers: { 'Content-Type': 'application/json; charset=UTF-8'}
			}).then(function(responseData) {
		//do stuff with response
		$scope.projectTitle = "";
		$scope.projectDesc = "";
    	});

	}
});