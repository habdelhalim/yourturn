"use strict";angular.module("yourturnApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui","LocalStorageModule","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yourturnApp").controller("MainCtrl",["$scope","$firebase","localStorageService",function(a,b){var c=new Firebase("https://yourturn.firebaseIO.com/team");a.team=b(c),a.add=function(){a.newItem&&(a.team.$add({id:a.newItem,text:a.newItem}),a.newItem="")},a.remove=function(b){a.team.$remove(b.$id)},a.sortableOptions={axis:"y"}}]);