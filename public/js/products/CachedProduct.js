'use strict';

angular.module('etheria.products.CachedProduct').factory('CachedProduct', ['$resource', 'Product', function($resource, Product) {
    var productList;
    return {
        query: function() {
            if (!productList) {
                productList = Product.query();
            }
            return productList;
        }
    };
}]);
