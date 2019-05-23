angular.module("myApp").config(function ($routeProvider) {

    console.log($routeProvider);
    $routeProvider
    .when("/", {
        templateUrl: "app/components/home/home.html",
        controller:"homectrl"
    })
    .when("/Employee", {
        templateUrl : "app/components/employee/employee.html",
        controller : "empctrl"
    })
    .when("/pmbok", {
        templateUrl : "app/components/pmbok/pmbokmatrix.html",
        controller : "matrixctrl"
    })
    .when ("/aboutme", {
        templateUrl : "C:\Users\S534570\Desktop\angular_sample_app\app\components\aboutme"
    });
});