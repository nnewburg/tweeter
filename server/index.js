"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient   = require("mongodb").MongoClient;
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
// app.set("view engine", "html");

//connecting to our Mongo DB with a given URI
MongoClient.connect(MONGODB_URI, (err, db) => {

  //error conditional
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }


  console.log(`Connected to mongodb: ${MONGODB_URI}`);



    const DataHelpers = require("./lib/data-helpers.js")(db);

    const tweetsRoutes = require("./routes/tweets")(DataHelpers);


    app.use("/tweets", tweetsRoutes);

    app.get("/register", (req, res) => {
      let templateVars = {};
      res.render("register.html");
    });

    app.post("/register", (req, res) => {
      let flag = true;
      var user = { email: req.body.email, password: req.body.password };

      db.collection("users").findOne({"email": req.body.email}, function(err, result) {
       if (err) throw err;

        if(result.email === req.body.email){
          flag = false;
          console.log("same email")
        }
      });
        console.log(flag)
        if(flag){
          db.collection("users").insertOne(user, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });
        } else {
          alert("Email already exists in the database")
          res.redirect("/register");
        }
      res.redirect("/");
    });

    app.post

    app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });





});

