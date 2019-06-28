let mongoose = require('mongoose');

let foodSchema = new mongoose.Schema({
    id: String,
    name:String,
    price:Number, // price of this food in Tomans
    description:String, // optional
    foodSet:String, // set of this food like kabab, khorak, salad
});

module.exports = {
    schema: foodSchema,
    model: mongoose.model('food', foodSchema, 'myTestCollection')
};
