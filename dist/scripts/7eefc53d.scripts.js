"use strict";angular.module("yourturnApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui","LocalStorageModule","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yourturnApp").controller("MainCtrl",["$scope","$firebase","localStorageService",function(a,b){var c=new Firebase("https://yourturn.firebaseIO.com/team"),d=new FirebaseSimpleLogin(c,function(b,c){b?console.log(b):c?(console.log("User ID"+c.id),a.user=c):console.log("user logged out")});a.team=b(c),a.add=function(){a.newItem&&(a.team.$add({id:a.newItem,text:a.newItem}),a.newItem="")},a.remove=function(b){a.team.$remove(b.$id),a.team.$add({id:b.id,text:b.text})},a.sortableOptions={axis:"y"},a.login=function(){d.login("github")}}]);