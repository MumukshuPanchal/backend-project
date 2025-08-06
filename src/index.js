//require('dotenv').config({path: './.env'});

//import dotenv from 'dotenv';
//dotenv.config({ path: './.env' });


import connectToDatabase from './db/index.js';

connectToDatabase()



/*
import mongoose from 'mongoose';
import { DB_Name } from './constants.js';
import express from 'express';
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log('Connected to MongoDB');

        app.on('error', (err) => {
            console.error('Error in Express app:', err);
            throw err;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()
*/