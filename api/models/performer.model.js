const db = require('../../db');

const Performer = (performer) => {
    this.bio = performer.bio;
    this.accent_color = performer.accent_color;
    this.tips = performer.accent_color;
}

Performer.create = (newPerformer, result) => {
    db.query("INSERT INTO performers set ?", newPerformer, (err, res) => {
        if (err) {
            console.log(err);
            return result(err, null)
        }
        console.log(res.insertId);
        result(null, res.insertId);
    })
}

Performer.getAllPerformers = (result) => {
    db.query(`
        SELECT p.*, f.name AS family
        FROM performers AS p
        INNER JOIN families_performers AS fp
        ON p.id = fp.performer_id
        INNER JOIN families as f
        ON fp.family_id = f.id`, (err, res) => {
        if (err) {
            console.log(err);
            return result(null, err);
        }
        console.log(res);
        result(null, res);
    });
}

module.exports = Performer;