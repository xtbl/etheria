'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    productModel = require('../models/product');

exports.all = function(req, res) {
    Product.find({}).exec(function(error, collection) {
        if (error) {
            res.render('error', {
                status: 500
            });
        } else {
            res.json(collection);
        }
    });
};

//create default products
productModel.createDefaultProducts();