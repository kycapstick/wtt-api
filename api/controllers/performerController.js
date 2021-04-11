const Performer = require('../models/performer.model');

exports.allPerformers = (req, res) => {
    Performer.getAllPerformers((err, performers) => {
        console.log('controller');
        if (err) {
            res.send(err);
            return;
        }
        console.log('res', performers);
        res.json(performers)
    });
}