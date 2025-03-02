const express =require("express");
const router=express.Router();
const authcontrollers=require("../Controllers/Authcontrollers")
//router.get("/",(req,res)=>{res.status(200).send("in get method")})
//router.get("/register",(req,res)=>{res.status(200).send("in register method")})

router.route("/")
.get(authcontrollers.home)
.post((req,res)=>{})

router.route("/register")
.get(authcontrollers.register)
.post((req,res)=>{})
.put((req,res)=>{})
.delete((req,res)=>{})

module.exports=router
