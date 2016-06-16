/**
 * Created by abc on 16/06/2016.
 */
var app=angular.module('app',['ngRoute','ngStorage']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
            controller : 'default'
        })
        .when('/storage', {
            templateUrl : 'storage.html',
            controller : 'storage'
        })
        .when('/form', {
            templateUrl : 'form.html',
            controller : 'form'
        });


});