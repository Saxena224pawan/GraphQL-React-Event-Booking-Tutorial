const express = require("express");
const body_parser = require("body-parser");

const app = express();
app.use(body_parser.json());

app.get("/",(req,res,next)=>{
    res.send("Hello WOrld");
})
app.listen(3000);
