const db = require('../db');

module.exports.seedFamilies = () => {
    return new Promise((resolve, reject) => {

        let seedFamilies = `
            INSERT INTO families(name, description, accent_color)
            VALUES
            ('The Diet Ghosts', 'Family of miscreants haunting Toronto nightlife', '49A35D'),
            ('Boylesque TO', 'Canadas premiere boylesque  troupe', '1939D0')
        `;

        db.query(seedFamilies, function(err, results, fields) {
            if (err) {
                return reject(err.message);
            }
            return resolve('Families table seeded');
        });
    });
    
}