var app = angular.module('quoteBook').controller('mainCtrl', function($scope, MainService){

    $scope.inputQuote = '';

    $scope.inputAuth = '';

    $scope.quotes = MainService.getData();

    $scope.addQuote = function() {
        $scope.quotes = MainService.addData($scope.inputQuote, $scope.inputAuth);
        $scope.quotes = MainService.getData();
    };

    $scope.removeQuote = function() {
        $scope.quotes = MainService.removeData($scope.inputQuote);
        $scope.quotes = MainService.getData();
    };
});