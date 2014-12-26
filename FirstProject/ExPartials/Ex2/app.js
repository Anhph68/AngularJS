/**
 * Created by Anh on 25/12/2014.
 */
var myApp = angular.module('MyApp', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider) {
    console.log($routeProvider);
    $routeProvider
        .when('/Book/:bookId', {
            templateUrl: 'book.html',
            controller: 'BookCtrl'
        })
        //thuộc về Param
        .when('/Book/:bookId/ch/:ChapterId', {
            templateUrl: 'chapter.html',
            controller: 'ChapterCtrl'
        });
});

myApp.controller('MainCtrl', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

myApp.controller('BookCtrl', function ($scope, $routeParams) {
    console.log($scope);
    $scope.name = "BookCtrl";
    $scope.params = $routeParams;
}).controller('ChapterCtrl', function ($scope, $routeParams) {
    console.log($scope);
    $scope.name = "ChapterCtrl";
    $scope.params = $routeParams;
});