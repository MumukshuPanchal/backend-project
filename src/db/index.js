import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`Connected to MongoDB, DB Host: ${connectionInstance.connection.host}, DB Name: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectToDatabase;