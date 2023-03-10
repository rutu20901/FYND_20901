const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("route at root");
});


app.get("/hello",(req,res) =>{
    res.send("route at hello");
});

app.listen(8088,() =>{
    console.log("Listening on 8088");
});