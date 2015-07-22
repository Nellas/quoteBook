var app = angular.module('quoteBook').controller('mainCtrl', function($scope, MainService){
    console.log("ran");
    $scope.test = 'TEST';

    $scope.quotes = MainService.getData();

    //$scope.addQuote = MainService.addData();

    $scope.removeQuote = MainService.removeData();


});