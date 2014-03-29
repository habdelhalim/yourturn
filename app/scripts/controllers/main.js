'use strict';

angular.module('yourturnApp')
  .controller('MainCtrl', function ($scope, teamservice) {

    $scope.auth = teamservice.getSecurity(function (error, user) {
      $scope.$apply(function () {
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

    $scope.team = teamservice.getTeam();

    $scope.add = function () {
      if ($scope.newItem) {
        $scope.team.$add({
          id: $scope.newItem,
          text: $scope.newItem,
          created_by: $scope.user.login,
          count: 0
        });
        $scope.newItem = '';
      }
    };

    $scope.remove = function (member) {
      $scope.team.$remove(member.$id);
      member.updated_by = $scope.user.login;
      member.count = member.count + 1;
      var currentdate = new Date();
      member.updated_at = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      $scope.team.$add(member);
    };

    $scope.sortableOptions = {
      axis: 'y'
    };

    $scope.login = function () {
      $scope.auth.login('github');
    };

    $scope.logout = function () {
      $scope.auth.logout();
    };

  });