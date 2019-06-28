let mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'testDB';

mongoose.connect(`mongodb://${server}/${database}`)
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    });

// mongoose.connect(`mongodb://${user}:${passwd}@${server}:${port}/${db}`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let restaurantSchema = new mongoose.Schema({
    // id: String,
    name: String,
    logo: String,
});

// module.exports = mongoose.model('Restaurant', restaurantSchema);
module.exports = mongoose.model('Restaurant', restaurantSchema, 'myTestCollection');
