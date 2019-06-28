let express = require('express')
let router = express.Router()

// Params property on the request object
// localhost:3000/api/restaurants/shandiz-jordan
router.get('/api/restaurants/:id', (req, res) => {
    res.send(`You have requested a restaurant its id is ${req.params.id}`)
});

module.exports = router
