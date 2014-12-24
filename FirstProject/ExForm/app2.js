/**
 * Created by Anh on 24/12/2014.
 */
var app = angular.module("MyApp", []);

app.controller("User", function ($scope) {
    // Gia tri mac dinh
    $scope.user = {};
    $scope.wasSubmitted = false;

    // Su kien
    $scope.submit = function () {
        $scope.wasSubmitted = true;
    }

    $scope.error = function(name){
        var s = $scope.form(name);
        return s.$invalid && s.$dirty ? "error" : "";
    }
});
