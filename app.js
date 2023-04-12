const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv/config");

// express session
const session = require("express-session");
const maxAge = 100000000000000000000000;

const app = express();
const PORT = 8080;

app.use(session({
    secret: process.env.SECRET,
    cookie:{
        maxAge
    }
}));



app.use(cors())
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"))
app.use(express.json());




// controllers

const routes = require("./routes/routes");


app.use("/", routes);


app.listen(PORT, ()=>{
    console.log("this server is running...")
})