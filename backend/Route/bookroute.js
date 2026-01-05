import express from "express"
import { getbook } from "../Controller/Book_controller.js"

const route=express.Router()
 
route.get("/api",getbook)

export default route