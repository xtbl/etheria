'use strict';

angular.module('etheria.products.Product').factory('Product', ['$resource',function($resource) {
    var ProjectResource = $resource('/api/products/:id', {_id:"@id"});
    return ProjectResource;
}]);