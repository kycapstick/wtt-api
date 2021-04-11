const db = require('../db');
const { seedPerformers } = require('./performersSeeds');
const { seedFamilies } = require('./familiesSeeds');
const { seedFamiliesPerformers } = require('./familiesPerformersSeeds');


const seedTables = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let status = await seedPerformers();
            console.log(status);
            status = await seedFamilies();
            console.log(status);
            status = await seedFamiliesPerformers();
            console.log(status);
            return resolve('All tables seeded.');
        } catch (err) {
            return reject(err);
        }
    })
    
}

const plantSeeds = () => {
    try {
        db.connect(async(err) => {
            if (err) {
                console.log(err);
            }
            await seedTables();
            db.end((err) => {
                if (err) {
                    console.log(err);
                }
                console.log('All tables seeded successfully');
            })
        })
    } catch (err) {
        console.log(err);
    }
}

plantSeeds();
