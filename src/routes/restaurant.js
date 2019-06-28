let RestaurantModel = require('../models/restaurant.model');
let express = require('express');
let router = express.Router();

// Params property on the request object
// localhost:3000/api/restaurants/shandiz-jordan
router.get('/api/restaurants/:id', (req, res) => {
    res.send(`You have requested a restaurant its id is ${req.params.id}`)
});

router.post('/api/restaurants', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    // if(!req.body.email) {
    //     // ...
    // }

    // let restaurant = {
    //     id: 'shandiz-jordan',
    //     name: 'shandiz-jordan',
    //     logo: 'shandiz-jordan-logo'
    // };

    let model = new RestaurantModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;
