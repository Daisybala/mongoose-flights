var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /movies
router.get('/',flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /movies
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
// /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('respond with a resource');
// // });

module.exports = router;
