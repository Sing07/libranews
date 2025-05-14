import mongoose from 'mongoose';
import { seedUsersAndPosts } from "./seedUsersPosts";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true );

    if(!process.env.MONGODB_URL) return console.error('MONGODB_URL not found');
    if(isConnected) return console.log('Connected to DB');

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log('Connected to DB');
        await seedUsersAndPosts()
    }catch(err){
        console.error('Error connecting to DB', err);
    }

}
