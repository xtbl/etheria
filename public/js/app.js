'use strict';

angular.module('etheria',
    ['ngCookies',
     'ngResource',
     'ui.bootstrap',
     'ui.router',
     'etheria.system',
     'etheria.articles',
     'etheria.products',
     'etheria.products.Product',
     'etheria.products.CachedProduct'
    ]);

angular.module('etheria.system', []);
angular.module('etheria.articles', []);
angular.module('etheria.products', []);
angular.module('etheria.products.Product', []);
angular.module('etheria.products.CachedProduct', []);