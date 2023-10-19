import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname="";

//sending html file to client
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//pre-processor
app.use(bodyParser.urlencoded({ extended:true}));

function bandnamegen(req,res,next){
  console.log(req.body);
  bandname=req.body["street"]+req.body["pet"];
  next();
}
app.use(bandnamegen);

//sending requested thing to client
app.post("/submit",(req,res)=>{
  res.send(`<h1>YOUR BAND NAME IS:</h1><h2>${bandname}</h2>`)
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
