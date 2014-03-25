'use strict';

angular.module('yourturnApp')
  .factory('teamservice', function ($firebase) {
    var ref = new Firebase('https://yourturn.firebaseIO.com/team');

    return {
      getTeam: function () {
        return $firebase(ref);
      },

      getSecurity: function (callback) {
        return new FirebaseSimpleLogin(ref, callback);
      }
    }
  });