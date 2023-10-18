import express from "express"
 const app = express();
 const port = 3000;

 app.get("/",(req,res)=>{
    res.send("<h1> Hello Paramjeet </h1>");
 })


 app.get("/about",(req,res)=>{
    res.send("<h1> Hello this is Paramjeet about </h1>");
 })
 app.listen(port,()=>{
    console.log(`server running port ${port}.`);
 })