let myapp = angular.module("Myapp" , []);

let mycontroller = function($scope){
    $scope.message = " Hellow world";
}

myapp.controller ("MyController", mycontroller);

let JSONController  = function($scope){

    let Student = {
        

        FirstName : "Prajakt",
        LastName : "Khawase",
        Email :"Khawse.prajakt@gmail.com"

    }

    $scope.Student = Student;

}

myapp.controller ("Student" , JSONController);