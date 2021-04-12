const express = require('express');
const router = express.Router();

const venueController = require('../controllers/venueController');

router.route('/').get(venueController.allVenues)

module.exports = router;