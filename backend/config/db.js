import mongoose from "mongoose";

const connectDb  = async() => {
    try {
        await mongoose.connect(process.env.MON0GDB_URL)
        console.log("DB connected")
    } catch(error){
        console.log("DB error")
    }
}
export default connectDb