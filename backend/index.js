import express from "express"
import dotenv from "dotenv"
import DBconnect from "./Config/db.js"
 const app=express()
 dotenv.config()
 const PORT=3000
  app.get("/",(req,res)=>
   res.send("hello duniya")
 )

 app.listen(PORT ,()=>{
    DBconnect()
     console.log(`server start from port number ${PORT}`)
 })