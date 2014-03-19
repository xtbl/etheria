'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// http://coolmaterial.com/cool-list/ultra-minimalism-18-cool-products-that-are-almost-impossible-to-use/

// {name: "RECYCLED PAPER SIDE TABLE", price: 2798, description: "It’s kind of easy to call anything that could technically support a lamp and some magazines a side table which gives lots of room to minimalist designers. The Recycled Paper Side Table by Matt Gagnon technically fits the requirement of being able to hold something on it, although until you put a lamp on it people will have no clue what it is.", url: "http://designcrack.blogspot.com/2007/12/matt-gagnon-recycled-paper-side-table.html", image: "gagnon_paper_side_table.jpg", tags["office"] }
// {name: "KONE VACUUM SYSTEM", price: 40, description: "Usually you’re looking for a place to stash your vacuum in your tiny city apartment, but here’s one that you can leave out as a piece of modern art. The Dirt Devil Kone Vacuum is cordless, bagless and the coolest looking vacuum you never knew you wanted.", url: "http://dirtdevil.com/products/details/m0212/kone-by-karim-rashid/", image: "cone-dirt-devil.jpg", tags["apartment", "cleaning"] }
// {name: "END TABLE BOOKSPINE SAVER", price: 99, description: "As most minimalist products you might not know what this is until you see it in use. And like the best minimalist designs, once you realize what Habitual Bedside Table is you realize it’s really the ONLY way to design a bedside table… especially if you read a lot.", url: "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/", image: "bedside_table.jpg", tags["bedroom"] }
// {name: "", price: 99, description: "", url: "", image: "", tags[""] }
// {name: "", price: 99, description: "", url: "", image: "", tags[""] }

var ProductSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    url: {
        type: String,
        default: '',
        trim: true
    },
    image: {
        type: String,
        default: 'default.jpg'
    },
    tags: [String]
});

var Product = mongoose.model('Product', ProductSchema);



function createDefaultProducts() {
    Product.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            Product.create({name: "RECYCLED PAPER SIDE TABLE", price: 2798, description: "It’s kind of easy to call anything that could technically support a lamp and some magazines a side table which gives lots of room to minimalist designers. The Recycled Paper Side Table by Matt Gagnon technically fits the requirement of being able to hold something on it, although until you put a lamp on it people will have no clue what it is.", url: "http://designcrack.blogspot.com/2007/12/matt-gagnon-recycled-paper-side-table.html", image: "gagnon_paper_side_table.jpg", tags:["office"] });
            Product.create({name: "KONE VACUUM SYSTEM", price: 40, description: "Usually you’re looking for a place to stash your vacuum in your tiny city apartment, but here’s one that you can leave out as a piece of modern art. The Dirt Devil Kone Vacuum is cordless, bagless and the coolest looking vacuum you never knew you wanted.", url: "http://dirtdevil.com/products/details/m0212/kone-by-karim-rashid/", image: "cone-dirt-devil.jpg", tags:["apartment", "cleaning"] });
            Product.create({name: "END TABLE BOOKSPINE SAVER", price: 99, description: "As most minimalist products you might not know what this is until you see it in use. And like the best minimalist designs, once you realize what Habitual Bedside Table is you realize it’s really the ONLY way to design a bedside table… especially if you read a lot.", url: "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/", image: "bedside_table.jpg", tags:["bedroom"] });
        }
    });
};

exports.createDefaultProducts = createDefaultProducts;