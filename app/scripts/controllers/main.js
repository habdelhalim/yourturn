'use strict';

angular.module('yourturnApp')
    .controller('MainCtrl', function($scope, localStorageService) {
        var localItems = localStorageService.get('items');
        $scope.items = angular.fromJson(localItems) || [];

        $scope.add = function() {
            if ($scope.newItem) {
                $scope.items.push($scope.newItem);
                $scope.newItem = '';
            }
        };

        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        };

        $scope.$watchCollection('items', function() {
            localStorageService.add('items', angular.toJson($scope.items));
        });
    });