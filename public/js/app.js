'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'mean.system', 'mean.articles', 'mean.products', 'mean.products.Product']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.products', []);
angular.module('mean.products.Product', []);