let RestaurantModel = require('../models/restaurant.model');
let express = require('express');
let router = express.Router();

// Params property on the request object
// localhost:3000/api/restaurants/shandiz-jordan
router.get('/api/restaurants/:id', (req, res) => {
    RestaurantModel.model.findOne({
        id: req.params.id
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.get('/api/restaurants', (req, res) => {
    if (req.query && req.query.city && req.query.area) {
        RestaurantModel.model.find({
            "address.city": req.query.city,
            "address.area": req.query.area
        })
            .then(doc => {
                res.status(201).send(doc)
            })
            .catch(err => {
                res.status(500).json(err)
            });
    } else {
        RestaurantModel.model.find()
            .then(doc => {
                res.status(201).send(doc)
            })
            .catch(err => {
                res.status(500).json(err)
            });
    }
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
    //     name: 'شاندیز جردن',
    //     logo: 'shandiz-jordan-logo'
    // };

    let model = new RestaurantModel.model(req.body);
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
