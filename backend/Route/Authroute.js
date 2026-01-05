import express from "express"

import { login, signup } from "../Controller/authController.js"

 const authroute=express.Router()

  authroute.post("/signup",signup)
  authroute.post("/login",login)

  export default authroute