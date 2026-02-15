import mongoose from "mongoose"

 const ConnectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongo db is connected successfully");
    } catch (error) {
        console.log("this is the error",error);
    }
}

export default ConnectDb;