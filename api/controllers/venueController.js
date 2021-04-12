const Venue = require('../models/venue.model');

exports.allVenues = (req, res) => {
    Venue.getAllVenues((err, venues) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(venues)
    });
}