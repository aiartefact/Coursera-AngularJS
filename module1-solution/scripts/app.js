(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.msg = "";

  $scope.lunchProc = function () {
    if ($scope.lunch == "") //Check for empty input
      $scope.msg = "Please enter data first";
    else {
      var itemArr = $scope.lunch.split(',');
      var totalItemNum = 0;

      for (var i = 0; i < itemArr.length; i++) { //Counting items
        if ( !( (itemArr[i] == "") || (!CheckForNonSpaceChar(itemArr[i])) ) ) { //Check for empty items
          totalItemNum++;
        }
      }

      if (totalItemNum == 0)  //Check for output conditions
        $scope.msg = "You entered a list of empty items";
      else {
        if (totalItemNum <= 3)  
          $scope.msg = "Enjoy!";
        else
          $scope.msg = "Too much!";
      }
      
    }
    
  };
}

function CheckForNonSpaceChar (str) {  //Function checks a string for non-space characters. If there are non-space characters it returns "true".
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() != 32)
      return true;
  }
  return false;
}

})();