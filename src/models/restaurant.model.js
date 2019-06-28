let mongoose = require('mongoose');
let addressModel = require('./address.model');
let categoryModel = require('./category.model');
let foodModel = require('./food.model');
let commentModel = require('./comment.model');

let restaurantSchema = new mongoose.Schema({
    id: String,
    name:String,
    logo:String, // src of logo image
    openingTime:Number, // time of opening
    closingTime:Number, // time of closing
    averageRate:Number, // average of comments rate
    address: addressModel.schema,
    categories:[categoryModel.schema], // array of food categories. e.g. fastfood or irani
    foods:[foodModel.schema],
    comments:[commentModel.schema],
});

// module.exports = mongoose.model('Restaurant', restaurantSchema);
// module.exports = mongoose.model('Restaurant', restaurantSchema, 'myTestCollection');
module.exports = {
    schema: restaurantSchema,
    model: mongoose.model('Restaurant', restaurantSchema, 'myTestCollection')
};
