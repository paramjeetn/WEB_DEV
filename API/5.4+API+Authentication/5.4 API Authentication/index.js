import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "paramjeet.826";
const yourPassword = "paramjeet.826";
const yourAPIKey = "70bf98e7-08d3-4acf-ba51-ad71ca1f9668";
const yourBearerToken = "Bearer 15b8cdc1-e6b6-42d6-bbf5-249b36ccb3b0";

app.get("/", (req, res) => {
  res.render("index.ejs", {content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try
  {
    const response= await axios.get(`${API_URL}random`);
  res.render("index.ejs",{content: JSON.stringify(response.data) });
}
  catch(error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs",{error:`Can't acess service due to ${error.message}`});

  }
  
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try{
    const response=await axios.get(`${API_URL}all?page=2&username=${yourUsername}&password=${yourPassword}`); 
    res.render("index.ejs",{content: JSON.stringify(response.data)});  }
  catch(error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs",{error:`Can't acess service due to ${error.message}`});
  }
});

app.get("/apiKey", async(req, res) => {
  try{
    const response=await axios.get(`${API_URL}filter?score=5&apikey=${yourAPIKey}`)
    res.render("index.ejs",{content: JSON.stringify(response.data)});
  }
  catch(error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs",{error:`Can't acess service due to ${error.message}`});
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  try{
    const response=await axios.get(`${API_URL}secrets/42`,{
      headers: { 
        Authorization:`${yourBearerToken}` 
      }
    })
    res.render("index.ejs",{content: JSON.stringify(response.data)});
  }
  catch(error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs",{error:`Can't acess service due to ${error.message}`});
  }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  
  
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
