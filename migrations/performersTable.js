require('dotenv').config();
const db = require('../db');

module.exports.performersUp = () => {
    return new Promise((resolve, reject) => {

        let createPerformers = `CREATE TABLE IF NOT EXISTS performers(
                            id INT PRIMARY KEY AUTO_INCREMENT,
                            created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                            updated DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                            name TEXT NOT NULL,
                            bio TEXT NOT NULL,
                            accent_color TEXT NULL,
                            tips TEXT NULL
                        )`;

        db.query(createPerformers, function(err, results, fields) {
            if (err) {
                return reject(err.message);
            }
            return resolve('Performers table created');
        });
    });
    
}

module.exports.performersDown = () => {
    return new Promise((resolve, reject) => {            
        const dropPerformers = "DROP TABLE IF EXISTS performers";
            
            db.query(dropPerformers, function (err, result) {
                if (err) return reject(err);
                return resolve("Table deleted");
            });
    })
    
}