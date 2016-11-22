'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp').controller('MainCtrl',['$scope','$http',function ($scope,$http) {
  
  $scope.tabs = [{
    title :'Login',
    url: 'one.tpl.html'
  },{
    title : 'Register',
    url: 'two.tpl.html'
  }];

  $scope.currentTab = 'one.tpl.html';


  $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $scope.user = {};
    

    $scope.submitForm = function() {
        // Posting data to php file
        $http({
          method  : 'POST',
          url     : 'http://localhost:8888/amgapp/php/clone.php',
          data    : $scope.user, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            
            if (data.message==='success') {

              $scope.sucessMsg='Login is correct';

              window.location.href = '/#/about'
              

              console.log($scope.sucessMsg);
              // Showing errors.
              //$scope.errorName = data.errors.name;
              //$scope.errorUserName = data.errors.username;
              //$scope.errorEmail = data.errors.email;
            } else {
              $scope.errormessage = data.message;
            }
          });
        };

  }]);
