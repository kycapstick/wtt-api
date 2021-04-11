const db = require('../../db');

const Family = (family) => {
    this.name = family.name;
    this.description = family.description;
    this.accent_color = family.accent_color;
}

Family.create = (newFamily, result) => {
    db.query("INSERT INTO families set ?", newFamily, (err, res) => {
        if (err) {
            console.log(err);
            return result(err, null)
        }
        console.log(res.insertId);
        result(null, res.insertId);
    })
}

Family.getAllFamilies = (result) => {
    db.query("SELECT * FROM families", (err, res) => {
        if (err) {
            console.log(err);
            return result(null, err);
        }
        console.log(res);
        result(null, res);
    });
}

module.exports = Family;