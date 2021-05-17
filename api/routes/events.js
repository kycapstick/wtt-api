const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

router.route('/').get(eventController.allEvents)

module.exports = router;