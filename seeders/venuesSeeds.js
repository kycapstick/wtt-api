const db = require('../db');

module.exports.seedVenues = () => {
    return new Promise((resolve, reject) => {

        let seedVenues = `
            INSERT INTO venues(name, description, address, city, province, timezone, accessibility_description, accent_color)
            VALUES
            ('The Beaver', 'Queer staple', '1192 Queen Street West', 'Toronto', 'ON', 'EST', 'Small sets of stairs','49A35D'),
            ('The Round', 'RIP', '152 Augusta Avenue', 'Toronto', 'ON', 'EST', 'Second floor','49A35D')
        `;

        db.query(seedVenues, function(err, results, fields) {
            if (err) {
                return reject(err.message);
            }
            return resolve('Venues table seeded');
        });
    });
    
}