require('dotenv').config();
const db = require('../db');

module.exports.performersUp = () => {
    return new Promise((resolve, reject) => {

        let createPerformers = `create table if not exists performers(
                            id int primary key auto_increment,
                            title varchar(255)not null,
                            completed tinyint(1) not null default 0
                        )`;

        db.query(createPerformers, function(err, results, fields) {
            if (err) {
                return reject(err.message);
            }
            return resolve('Table created');
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