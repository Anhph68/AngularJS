/**
 * Created by Anh on 24/12/2014.
 */
var myApp = angular.module("MyApp", []);

myApp.controller('MyCtrl', function ($scope) {
    $scope.value = "value from controller";
});

var app2 = angular.module("App2", []);

app2.controller('MyCtrl1', ['$scope', function ($scope) {
    $scope.price = "3000";
}]);