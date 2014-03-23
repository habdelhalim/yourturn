'use strict';

angular.module('yourturnApp')
    .controller('MainCtrl', function($scope, $firebase, localStorageService) {
        var teamdbRef = new Firebase('https://yourturn.firebaseIO.com/team');
        var auth = new FirebaseSimpleLogin(teamdbRef, function(error, user) {
            if (error) {
                console.log(error);
            } else if (user) {
                console.log('User ID' + user.id);
                $scope.user = user;
            } else {
                console.log('user logged out');
            }

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
            auth.login('github');
        }

    });