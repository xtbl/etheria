'use strict';

angular.module('etheria.products').controller('ProductListCtrl', ['$scope', 'CachedProduct', function ($scope, CachedProduct) {
    $scope.productImagePath = '/img/products/';
    $scope.products = CachedProduct.query();
}]);