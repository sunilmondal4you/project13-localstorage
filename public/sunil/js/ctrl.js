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

app.controller("form",['$scope','$localStorage','myservices','$base64', function($scope,$localStorage,myservices,$base64){

    $scope.user={};


    $scope.submitdata=function() {
        debugger;
        if($scope.user.check===true){
            var encodednm=$base64.encode($scope.user.name);
            var encodedeml=$base64.encode($scope.user.email);

            localStorage.setItem('name', JSON.stringify(encodednm));
            localStorage.setItem('email', JSON.stringify(encodedeml));
            $scope.user={};
            alert("Yooh, your name and email is saved in the storege.");
        }
        else {
            $scope.user={};
            alert("your name and email is not saved in the storege.");
        }


    };


    var returnname = localStorage.getItem('name');
    var returnemail = localStorage.getItem('email');
    var decodednm=JSON.parse(returnname);
    var decodedeml=JSON.parse(returnemail);

    $scope.user.name =$base64.decode(decodednm);
    $scope.user.email=$base64.decode(decodedeml);




}]);



app.controller("storage", function($scope, $localStorage) {

    $scope.save = function() {
        $localStorage.message = $scope.somedata;
    };

    $scope.load = function() {
        $scope.data = $localStorage.message;
    }

});