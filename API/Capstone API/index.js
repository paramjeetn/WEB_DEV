import express from "express";
import axios from "axios";

const app=express();
const port = 3000;
const URL=`https://riddles-api.vercel.app/`;

app.get("/", async(req, res) => {
    try
    {
      const response= await axios.get(`${URL}random`);
    res.render("index.ejs",{content: response.data});
  }
    catch(error){
      console.error("Failed to make request:", error.message);
      res.render("index.ejs",{error:`Can't acess service due to ${error.message}`});
  
    }
    
  });

app.listen(port,(req,res)=>{
    console.log(`site running in port ${port}.`)
})

