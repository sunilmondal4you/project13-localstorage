/**
 * Created by abc on 16/06/2016.
 */
var app=angular.module('app');

app.service('myservices',function ($localStorage) {
    this.userarry = [];

});

app.controller("default", function($scope, $localStorage, $http) {
    
    $scope.save = function() {
        $localStorage.message = "Hello World";
    };

    $scope.load = function() {
        $scope.data = $localStorage.message;
    };


    $scope.serverCall1 = function() {
        
        $http.get("/a")
        .success(function(resdata){
            $scope.ARES = resdata;
        }).error(function(resdata){
            console.log(resdata);
        });
        
    };

    $scope.serverCall2 = function() {
        $http.get("/a/b")
            .success(function(rescall){
                $scope.RESCALL=rescall;
            }).error(function(rescall) {
            console.log(rescall);
        });
    };

    $scope.serverCall3=function(){
       $http.get("/a/b/c")
           .success(function(call3){
               $scope.CALL(call3);
           }).error(function(call3){
           console.log(call3);
       });
    };

    $scope.serverCall4=function(){
        
        
        $http.get("/a/b/c/d")
            .success(function(call4) {
                $scope.CALL4(call4);
            }).error(function(call4) {
            console.log("You can not get call from server")
        });
    };



});

app.controller("form", function($scope,$localStorage,myservices){

    $scope.user={};


    $scope.submitdata=function() {
        debugger;
        if($scope.user.check===true){
            myservices.userarry.push($scope.user);
            localStorage.setItem('name', JSON.stringify($scope.user.name));
            localStorage.setItem('email', JSON.stringify($scope.user.email));
            $scope.user={};
            alert("Yooh, your name and email is saved in the storege.");
        }
        else {
            $scope.user={};
            alert("your name and email is not saved in the storege.");
        }


    };

    $scope.returnname = localStorage.getItem('name');
    $scope.returnemail = localStorage.getItem('email');
    $scope.user.name=JSON.parse($scope.returnname);
    $scope.user.email=JSON.parse($scope.returnemail);


});



app.controller("storage", function($scope, $localStorage) {

    $scope.save = function() {
        $localStorage.message = $scope.somedata;
    };

    $scope.load = function() {
        $scope.data = $localStorage.message;
    }

});