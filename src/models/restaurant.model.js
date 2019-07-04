let mongoose = require('mongoose');
let addressModel = require('./address.model');
let categoryModel = require('./category.model');
let foodModel = require('./food.model');
let commentModel = require('./comment.model');

let restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    logo: String, // src of logo image
    openingTime: Number, // time of opening
    closingTime: Number, // time of closing
    averageRate: Number, // average of comments rate
    address: addressModel.schema,
    categories: [categoryModel.schema], // array of food categories. e.g. fastfood or irani
    foods: [foodModel.schema],
    comments: [commentModel.schema],
});

restaurantSchema.pre('save', function (next) {
    // do stuff
    let sum = 0;
    for (let i = 0; i < this.comments.length; i++) {
        sum += this.comments[i].quality;
    }
    this.averageRate = sum / this.comments.length;
    next();
});

// module.exports = mongoose.model('Restaurant', restaurantSchema);
// module.exports = mongoose.model('Restaurant', restaurantSchema, 'myTestCollection');
module.exports = {
    schema: restaurantSchema,
    model: mongoose.model('Restaurant', restaurantSchema, 'myTestCollection')
};
