import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB = async ()=> {
   try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)
     console.log("Mongo DB connected",connectionInstance.connection.host);
   } catch (error) {
     console.error("I am Facing error in db connection ===>>",error)
     process.exit(1);
   }
}

export default connectDB;