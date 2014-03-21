'use strict';

angular.module('etheria.products').controller('ProductListCtrl', ['$scope', 'CachedProduct','$rootScope', function ($scope, CachedProduct, $rootScope) {
    $scope.productImagePath = '/img/products/';
    $scope.products = CachedProduct.query();

    var currentProductIndex = 0;
    $scope.addGalleryItem = function () {
        var tempProducts = CachedProduct.query();

    };

    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        if (fromState.name === 'all products') {
            $scope.removeGalleryItems();
        }
        console.log("State Change: State change start!");
        console.log("From: ", fromState);
        console.log("To: ", toState);
    });


    $scope.$on('masonry.created', function() {
        console.log('ON masonry created');
        $scope.products = [];
        $scope.products = CachedProduct.query();
    });
     $scope.$on('masonry.reloaded', function() {
        console.log('ON masonry.RELOADED');
    });

    $scope.$on('layoutComplete', function() {
        console.log('layoutComplete');
    });

    $scope.removeGalleryItems = function () {
        $scope.products = [];
    };
    $scope.createGalleryItems = function () {
        $scope.products = CachedProduct.query();
    };


}])
    .directive('testDirective', function() {
        return {
            template: '<h1>testDirective</h1>'
        }
    })

;