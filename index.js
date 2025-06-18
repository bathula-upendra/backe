
require('dotenv').config()

const express=require("express")
const app=express()

const port=5000
app.get("/",(req,res)=>{
    res.send("hell u")
})

app.get("/b",(req,res)=>{
    res.send("he")
})

app.get("/f",(req,res)=>{
    res.send("<h1>dsj</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`hi upendra ${port}`)
})