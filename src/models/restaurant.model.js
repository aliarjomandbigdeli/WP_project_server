let mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'testDB';

mongoose.connect(`mongodb://${server}/${database}`,{useNewUrlParser: true})
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    });

// mongoose.connect(`mongodb://${user}:${passwd}@${server}:${port}/${db}`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let restaurantSchema = new mongoose.Schema({
    id: String, // or an autoincreament number,
    name:String,
    logo:String, // src of logo image
    // openingTime:Number, // time of opening
    // closingTime:Number, // time of closing
    // averageRate:Number, // average of comments rate
    // address: AddressSchema,
    // categories:[CategorySchema], // array of food categories. e.g. fastfood or irani
    // foods:[FoodSchema],
    // comments:[CommentSchema],
});

// module.exports = mongoose.model('Restaurant', restaurantSchema);
// module.exports = mongoose.model('Restaurant', restaurantSchema, 'myTestCollection');
module.exports = {
    schema: restaurantSchema,
    model: mongoose.model('Restaurant', restaurantSchema, 'myTestCollection')
};
