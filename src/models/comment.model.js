let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    id: String,
    author: String,
    // rates
    quality: Number, // a number between 0-5
    packaging: Number,
    deliveryTime: Number,
    text: String,
    created_at: Date, // time where comment submitted
});

module.exports = {
    schema: commentSchema,
    model: mongoose.model('comment', commentSchema, 'myTestCollection')
};
