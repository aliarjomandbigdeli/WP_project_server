let mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    id: String, // or an auto increment number,
    name:String,
});

module.exports = {
    schema: categorySchema,
    model: mongoose.model('category', categorySchema, 'myTestCollection')
};
