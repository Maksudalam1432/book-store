import express from "express"
import dotenv from "dotenv"
import DBconnect from "./Config/db.js"
import route from "./Route/bookroute.js"
import cors from "cors"
import authroute from "./Route/Authroute.js"
 const app=express()
 app.use(cors())
 dotenv.config()
 const PORT=process.env.PORT ||3000
  app.use(express.json())
app.use("/book",route)
app.use("/api",authroute)

 app.listen(PORT ,()=>{
    DBconnect()
     console.log(`server start from port number ${PORT}`)
 })