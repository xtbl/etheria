'use strict';

//Setting up route
angular.module('etheria').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/articles',
        templateUrl: 'views/articles/list.html'
    })
      .state('create article', {
        url: '/articles/create',
        templateUrl: 'views/articles/create.html'
    })
      .state('edit article', {
        url: '/articles/:articleId/edit',
        templateUrl: 'views/articles/edit.html'
    })
      .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: 'views/articles/view.html'
    })
      .state('all products', {
        url: '/products',
        templateUrl: 'js/products/productList.html'
    })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    });
}
])

.run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        console.log("State Change: State change success!");
        console.log("From: ", fromState);
        console.log("To: ", toState);
    });


})
;

//Setting HTML5 Location Mode
angular.module('etheria').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);
