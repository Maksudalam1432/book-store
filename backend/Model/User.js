import mongoose from "mongoose";

const Schema =new mongoose.Schema({




},{timestamps:true})

const User=mongoose.model("User",Schema)

export default User