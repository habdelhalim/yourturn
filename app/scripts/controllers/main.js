'use strict';

angular.module('yourturnApp')
    .controller('MainCtrl', function($scope, $firebase, localStorageService) {
        var teamdb = new Firebase('https://yourturn.firebaseIO.com/team');
        $scope.team = $firebase(teamdb);

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
        }
    });