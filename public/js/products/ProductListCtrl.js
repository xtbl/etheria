'use strict';

angular.module('mean.products').controller('ProductListCtrl', [ '$scope', 'Product', function ($scope, Product) {
    console.log(Product.test);
    $scope.productTest = Product.test;
}]);