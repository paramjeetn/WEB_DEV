import express from "express";


const app = express();
const port = 3000;
const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
    const d = new Date();
    let day = d.getDay();
    let type = "a weekday";
    let adv= "It's time to work hard!";
    if(day===0   || day===6){
      type="the weekend";
      adv="It's time to have fun!"
    }

res.render("./index.ejs",{
   dayType:type,
   advice:adv,
})
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
   