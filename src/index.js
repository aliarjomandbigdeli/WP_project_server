let express = require('express');
let app = express();
let restaurantRoute = require('./routes/restaurant');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use(express.json());

// define middleware to log every request
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
});

app.use(restaurantRoute);

app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.send('Web Programming Course server')
// });

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('Not found Error!')
});

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

// console.log("hello world")
// console.log(`Date : ${Date()}`)
