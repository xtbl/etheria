'use strict';

angular.module('mean.products.Product').factory('Product', ['$resource',function($resource) {
//    TODO: add resource, add caching service
    return {
        test:"test Product service"
    }
}]);