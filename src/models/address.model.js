let mongoose = require('mongoose');

let addressSchema = new mongoose.Schema({
    id: String,
    city: String, // e.g. Tehran
    area: String, // e.g. Keshavarz Blvd,
    addressLine:String, // full address text
});

module.exports = {
    schema: addressSchema,
    model: mongoose.model('address', addressSchema, 'myTestCollection')
};
