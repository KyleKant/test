var	app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function ($scope) {
	$scope.contentText = "Enter text here!"
	$scope.showTextBox = true;
	// $scope.showEditMode	= true;
	$scope.toogleTextBox = function(){
		$scope.showTextBox = !$scope.showTextBox;
	}
	$scope.editMode = function(member){
		member.show = !member.show;
	}
	$scope.memberList = [
		{
			name:"Thi",
			age:"24",
			facebook:"fb.com/thinguyen",
			numberphone:"0915727441"
		},
		{
			name:"Son",
			age:"24",
			facebook:"fb.com/sontran",
			numberphone:"0915723324"
		},
		{
			name:"Nhi",
			age:"22",
			facebook:"fb.com/nhihoang",
			numberphone:"0336727441"
		},
		{
			name:"Cuong",
			age:"26",
			facebook:"fb.com/cuongdola",
			numberphone:"0915123441"
		}
	];
})