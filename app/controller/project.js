projmodule.controller("projectController",function($scope,$rootScope,$http,$location,$interval){
	$scope.projectTitle = "";
	$scope.projectDesc = "";
	$scope.apiUrl = "http://localhost:8080/api/v1/"
	$scope.projectForms = [];
	$scope.projectUsers = [];

	$scope.formOptions = [
		{ name: 'Select',value: 0 },
		{ type: 'Form I',value: 1 },
		{ type: 'Application Form',value: 2 },
		{ type: 'Form XI',value: 3 }
	];
	$scope.selectedFormOption = $scope.formOptions[0];

	$http.get($scope.apiUrl+"users/").
	then(function(data){
	  $scope.userOptions = data.data;
	  $scope.selectedUserOption = $scope.userOptions[0];
	});
	// $scope.userOptions = [
	// 	{ type: 'Select', value: 0 },
	// 	{ type: 'Virat Kohli',value: 1 },
	// 	{ type: 'Suresh Raina',value: 2 },
	// 	{ type: 'Ajinkya Rahane',value: 3 }
	// ];
	// $scope.selectedUserOption = $scope.userOptions[0];

	$scope.shapeOptions = [
		{ type: 'Select', value: 0 },
		{ type: 'Polygon',value: 1 },
		{ type: 'Square',value: 2 },
		{ type: 'Circle',value: 3 }
	];
	$scope.selectedshapeOption = $scope.shapeOptions[0];

	$scope.addForm = function() {
		var formToAdd = $scope.formOptions.filter(filter_select_form);
		$scope.projectForms.push(formToAdd[0])
	}

	$scope.removeForm = function(form) {
		var index = $scope.projectForms.indexOf(form);
		$scope.projectForms.splice(index, 1);  
	}

	function filter_select_form(aForm) {
        return aForm.value == $scope.selectedFormOption.value;
    }

    $scope.showProjectDetails = function(id) {      
        
	}
	
	function filter_select_user(aUser) {
        return aUser.id == $scope.selectedUserOption.id;
    }

	$scope.addUser = function() {
		var userToAdd = $scope.userOptions.filter(filter_select_user);
		$scope.projectUsers.push(userToAdd[0])
	}

	$scope.removeUser = function(user) {
		var index = $scope.projectUsers.indexOf(user);
		$scope.projectUsers.splice(index, 1);  
	}

	$scope.postProject = function () {
		console.log("posting project ....");
		var requestData = {};
		requestData.project = $scope.projectTitle;
		requestData.description = $scope.projectDesc;
		requestData.forms = $scope.projectForms;
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