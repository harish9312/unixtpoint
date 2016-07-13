
var ob = angular.module("unixApp",[]);
ob.controller("ctrl",function($scope){
alert("controller");
$scope.msg="Cion";
$scope.std  = ["Name","Harish","RollNo","123","Address","KORBA"]

});


ob.controller("myctrl",function($scope){

$scope.std  = ["Name","Harish","RollNo","123","Address","KORBA"]

});
