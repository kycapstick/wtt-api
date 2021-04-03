const e = require('express');
const db = require('../db');
const { performersUp, performersDown } = require('./performers-table');

const up = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let status = await performersUp();
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
            let status = await performersDown();
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
