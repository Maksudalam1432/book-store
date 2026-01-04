import mongoose from "mongoose";

 const DBconnect =async ()=>{
    try {
         await mongoose.connect(process.env.MONGO_URl)
        console.log("DB conneected Succesfully")
    } catch (error) {
         console.log("DB conneected Failed")
    }
 }
 export default DBconnect