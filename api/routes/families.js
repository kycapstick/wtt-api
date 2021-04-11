const express = require('express');
const router = express.Router();

const familyController = require('../controllers/familyController');

router.route('/').get(familyController.allFamilies)

module.exports = router;