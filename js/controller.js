var app = angular.module('quoteBook').controller('mainCtrl', function($scope, MainService){

    $scope.quotes = MainService.getData();

    $scope.addQuote = function() {
        MainService.addData($scope.inputQuote, $scope.inputAuth);
    };

    $scope.buttonClicked = function(obj) {
        MainService.removeData(obj.text);
    };
});