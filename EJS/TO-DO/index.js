import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));



let newItems=[];
let workItems=[];
const d = new Date();
    const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weeknm =week[d.getDay()];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthnm= month[d.getMonth()];
    const date = d.getDate();
    const todaydate=weeknm+", "+monthnm+" "+date;

app.get("/", (req, res) => {
       res.render("index.ejs",{todaysdate:todaydate,
        newListItems:newItems});    
  }); 

  app.post("/", (req, res)=>{ 
   let newItem=req.body["newTask"];
    newItems.push(newItem)
    res.redirect('/');      
  });

  app.get("/work", (req,res)=>{
    res.render("work.ejs",{newWorkItems:workItems});
  })

  app.post("/work", (req, res)=>{ 
    let newWork=req.body["newTask"];
     workItems.push(newWork)
     res.redirect('/work');       
   });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  }); 