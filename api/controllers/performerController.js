const Performer = require('../models/performer.model');

exports.allPerformers = (req, res) => {
    Performer.getAllPerformers((err, performers) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(performers)
    });
}
