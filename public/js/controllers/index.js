'use strict';

angular.module('etheria.system').controller('IndexController', ['$scope', 'Global', 'CachedProduct', function ($scope, Global, CachedProduct) {
    $scope.global = Global;

    $scope.productImagePath = '/img/products/';
    $scope.products = CachedProduct.query();

}]);