'use strict';

angular.module('yourturnApp')
    .controller('MainCtrl', function($scope, $firebase, localStorageService) {
        var teamdbRef = new Firebase('https://yourturn.firebaseIO.com/team');
        $scope.auth = new FirebaseSimpleLogin(teamdbRef, function(error, user) {
            $scope.$apply(function() {
                if (error) {
                    console.log(error);
                } else if (user) {
                    $scope.user = user;
                } else {
                    console.log('user logged out');
                    $scope.user = null;
                }
            });

        });

        $scope.team = $firebase(teamdbRef);


        $scope.add = function() {
            if ($scope.newItem) {
                $scope.team.$add({
                    id: $scope.newItem,
                    text: $scope.newItem
                });
                $scope.newItem = '';
            }
        };

        $scope.remove = function(member) {
            $scope.team.$remove(member.$id);
            $scope.team.$add({
                id: member.id,
                text: member.text
            });
        };

        $scope.sortableOptions = {
            axis: 'y'
        };

        $scope.login = function() {
            $scope.auth.login('github');
        };

        $scope.logout = function() {
            $scope.auth.logout();
        };

    });