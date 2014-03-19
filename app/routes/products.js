'use strict';

var products = require('../controllers/products');

module.exports = function(app) {
    app.get('/api/products', products.all);
};