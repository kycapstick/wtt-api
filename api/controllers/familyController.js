const Family = require('../models/family.model');

exports.allFamilies = (req, res) => {
    Family.getAllFamilies((err, families) => {
        console.log('controller');
        if (err) {
            res.send(err);
            return;
        }
        console.log('res', families);
        res.json(families)
    });
}