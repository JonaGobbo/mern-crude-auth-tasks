import mongoose from "mongoose";

const uri = process.env.DB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log(">>> DB in connected")
    } catch (error) {
        console.log(error)
    }
}


