let express = require('express');
let app = express();
let restaurantRoute = require('./routes/restaurant');

app.use(restaurantRoute);

app.get('/', (req, res) => {
    res.send('Web Programming Course server')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

// console.log("hello world")
// console.log(`Date : ${Date()}`)
