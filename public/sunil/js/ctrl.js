/**
 * Created by abc on 16/06/2016.
 */
var app=angular.module('app');

app.service('myservices',function ($localStorage) {
    this.userarry = [];

});

app.controller("default", function($scope, $localStorage) {
    
    $scope.save = function() {
        $localStorage.message = "Hello World";
    }

    $scope.load = function() {
        $scope.data = $localStorage.message;
    }

});

app.controller("form", function($scope,$localStorage,myservices,$){

    $scope.user={};
    myservices.userarry.push($scope.user);

    $scope.submitdata=function() {
        debugger;
        localStorage.setItem('name', JSON.stringify(myservices.userarry.name));

      //localStorage.name=myservices.userarry.name;
      localStorage.email=myservices.userarry.email;
  };


});

app.controller("storage", function($scope, $localStorage) {

    $scope.save = function() {
        $localStorage.message = $scope.somedata;
    }

    $scope.load = function() {
        $scope.data = $localStorage.message;
    }

});