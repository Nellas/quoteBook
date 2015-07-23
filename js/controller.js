var app = angular.module('quoteBook').controller('mainCtrl', function($scope, MainService){

    $scope.quotes = MainService.getData();


    $scope.itemChecked = function() {
        if ($scope.itemChecked) {

        }
    };

    $scope.addQuote = function() {
        MainService.addData($scope.inputQuote, $scope.inputAuth);
        MainService.getData();
    };

    $scope.buttonClicked = function(obj) {
        MainService.removeData(obj.text);
    };
});