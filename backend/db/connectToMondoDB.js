import mongoose from "mongoose";

export const connectToDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Conected to db");
    }
    catch(error){
        console.log("Cannot connect to db ",`${error}`);
    }
}