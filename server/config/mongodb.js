
import mongoose from "mongoose";

const connectDB = async ()=>{

  

    await mongoose.connect(`${process.env.MONGODB_URI}/imgfy`)
     .then(()=>{
        console.log("Connected db")
     })
}

export default connectDB;