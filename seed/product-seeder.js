var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', {
  useMongoClient: true
});

var products = [
  new Product({
    imagePath: 'https://d2yca1enuxtdrs.cloudfront.net/images/resize/product/1240/e62935fbba3d61cd50011f7cae0a63b2.jpg',
    title: 'Fifa 18',
    description: 'awesome game!!!',
    price: 10
  }),

  new Product({
    imagePath: 'https://i.ytimg.com/vi/a_uBs4yUbkU/maxresdefault.jpg',
    title: 'Fifa 17',
    description: 'awesome game!!!',
    price: 10
  }),

  new Product({
    imagePath: 'http://www.thumbnailtemplates.com/images/thumbs/thumb-076-fifa16-3.jpg',
    title: 'Fifa 16',
    description: 'awesome game!!!',
    price: 10
  }),

];


var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err,result){
    done++;
    if(i === products.length) {
      exit();
    }
  });

}

function exit(){
  mongoose.disconnect();
};
