import express from "express";
import Controller_tips from "./src/controllers/Controller_tips.js";

const app = express()
const port = 3000;

app.use(express.json())

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
  })

Controller_tips.connect(app)