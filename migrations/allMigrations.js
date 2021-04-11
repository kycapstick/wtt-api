const e = require('express');
const db = require('../db');
const { performersUp, performersDown } = require('./performersTable');
const { familiesUp, familiesDown } = require('./familiesTable');
const { familiesPerformersUp, familiesPerformersDown } = require('./familiesPerformersTable')

const up = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let status = await performersUp();
            console.log(status);
            status = await familiesUp();
            console.log(status);
            status = await familiesPerformersUp();
            console.log(status);
            return resolve('All tables created.');
        } catch (err) {
            return reject(err);
        }
    })
    
}

const down = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let status = await familiesPerformersDown();
            console.log(status);
            status = await performersDown();
            console.log(status);
            status = await familiesDown();
            console.log(status);
            return resolve('All tables dropped.')
        } catch (err) {
            return reject(err);
        }
    })
}

const migrations = () => {
    try {
        db.connect(async(err) => {
            if (err) {
                console.log(err);
            }
            await down();
            await up();
            db.end((err) => {
                if (err) {
                    console.log(err);
                }
                console.log('All Migrations run successfully');
            })
        })
    } catch (err) {
        console.log(err);
    }
}

migrations();
