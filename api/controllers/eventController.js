const Event = require('../models/event.model');

exports.allEvents = (req, res) => {
    Event.getAllEvents((err, events) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(events)
    });
}