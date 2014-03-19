'use strict';

angular.module('etheria.products').controller('ProductListCtrl', ['$scope', 'CachedProduct', function ($scope, CachedProduct) {
    console.log('CachedProduct.query()', CachedProduct.query());
    $scope.products = CachedProduct.query();

}]);