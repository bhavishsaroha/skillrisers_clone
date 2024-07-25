import mongoose from "mongoose";

export const createConnection= async()=>{
    try{
        const result = await mongoose.connect(process.env.DB_URL);
        console.log('Database Connection Created...');
    }
    catch(err){
        console.log('Database Connection Fails...',err);
        throw err;
    }
    
} 