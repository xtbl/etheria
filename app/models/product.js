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

var dummyProducts = [
    {
        "name": "Elemantra",
        "price": 2617,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/300/200/",
        "tags": [
            "Magneato",
            "Dognosis"
        ]
    },
    {
        "name": "Zillidium",
        "price": 146,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/300/300/",
        "tags": [
            "Mantro",
            "Talkalot"
        ]
    },
    {
        "name": "Frenex",
        "price": 2707,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/300/200/",
        "tags": [
            "Evidends",
            "Biolive"
        ]
    },
    {
        "name": "Housedown",
        "price": 2881,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/400/300/",
        "tags": [
            "Minga",
            "Webiotic"
        ]
    },
    {
        "name": "Exozent",
        "price": 450,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/300/100/",
        "tags": [
            "Deminimum",
            "Datagen"
        ]
    },
    {
        "name": "Ezent",
        "price": 1718,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/400/100/",
        "tags": [
            "Biotica",
            "Zillan"
        ]
    },
    {
        "name": "Medesign",
        "price": 1805,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/100/200/",
        "tags": [
            "Accel",
            "Kineticut"
        ]
    },
    {
        "name": "Extrawear",
        "price": 1364,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/100/300/",
        "tags": [
            "Acusage",
            "Digique"
        ]
    },
    {
        "name": "Flumbo",
        "price": 2688,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/100/200/",
        "tags": [
            "Honotron",
            "Futurize"
        ]
    },
    {
        "name": "Eargo",
        "price": 1624,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/400/400/",
        "tags": [
            "Volax",
            "Verbus"
        ]
    },
    {
        "name": "Bitendrex",
        "price": 2258,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/400/400/",
        "tags": [
            "Proxsoft",
            "Frolix"
        ]
    },
    {
        "name": "Cowtown",
        "price": 777,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/300/200/",
        "tags": [
            "Supremia",
            "Metroz"
        ]
    },
    {
        "name": "Xeronk",
        "price": 2336,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/200/200/",
        "tags": [
            "Enormo",
            "Crustatia"
        ]
    },
    {
        "name": "Virva",
        "price": 880,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/100/200/",
        "tags": [
            "Zanilla",
            "Viagrand"
        ]
    },
    {
        "name": "Wrapture",
        "price": 1467,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/100/300/",
        "tags": [
            "Exposa",
            "Obones"
        ]
    },
    {
        "name": "Comtrek",
        "price": 2616,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/300/300/",
        "tags": [
            "Slofast",
            "Geeky"
        ]
    },
    {
        "name": "Kindaloo",
        "price": 688,
        "description": "As most minimalist products you might not know what this is until you see it in use.",
        "url": "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/",
        "image": "http://lorempixel.com/100/100/",
        "tags": [
            "Eventage",
            "Zappix"
        ]
    }
];

function createDefaultProducts() {
    Product.find({}).exec(function(err, collection) {
        if (collection.length < 10) {
//            Product.create({name: "RECYCLED PAPER SIDE TABLE", price: 2798, description: "It’s kind of easy to call anything that could technically support a lamp and some magazines a side table which gives lots of room to minimalist designers. The Recycled Paper Side Table by Matt Gagnon technically fits the requirement of being able to hold something on it, although until you put a lamp on it people will have no clue what it is.", url: "http://designcrack.blogspot.com/2007/12/matt-gagnon-recycled-paper-side-table.html", image: "gagnon_paper_side_table.jpg", tags:["office"] });
//            Product.create({name: "KONE VACUUM SYSTEM", price: 40, description: "Usually you’re looking for a place to stash your vacuum in your tiny city apartment, but here’s one that you can leave out as a piece of modern art. The Dirt Devil Kone Vacuum is cordless, bagless and the coolest looking vacuum you never knew you wanted.", url: "http://dirtdevil.com/products/details/m0212/kone-by-karim-rashid/", image: "cone-dirt-devil.jpg", tags:["apartment", "cleaning"] });
//            Product.create({name: "END TABLE BOOKSPINE SAVER", price: 99, description: "As most minimalist products you might not know what this is until you see it in use. And like the best minimalist designs, once you realize what Habitual Bedside Table is you realize it’s really the ONLY way to design a bedside table… especially if you read a lot.", url: "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/", image: "bedside_table.jpg", tags:["bedroom"] });
//            Product.create({name: "END TABLE BOOKSPINE SAVER", price: 99, description: "As most minimalist products you might not know what this is until you see it in use. And like the best minimalist designs, once you realize what Habitual Bedside Table is you realize it’s really the ONLY way to design a bedside table… especially if you read a lot.", url: "http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/", image: "bedside_table.jpg", tags:["bedroom"] });
            Product.create(dummyProducts);
        }
    });
};

exports.createDefaultProducts = createDefaultProducts;


//[
//    '{{repeat(20, 7)}}',
//    {
//        name: '{{company}}',
//        price: '{{numeric(99,2999)}}',
//        description: 'As most minimalist products you might not know what this is until you see it in use.',
//        url: 'http://www.yankodesign.com/index.php/2008/03/04/habitual-bedside-table/',
//        image: function() {
//            var sizeChoices = [300, 200, 100, 400],
//                choiceA = sizeChoices[this.numeric(0, sizeChoices.length - 1)],
//                choiceB = sizeChoices[this.numeric(0, sizeChoices.length - 1)];
//            return 'http://lorempixel.com/'+ choiceA +'/'+ choiceB +'/';},
//
//        tags: [
//            '{{repeat(2)}}',
//            '{{company}}'
//        ]
//    }
//]