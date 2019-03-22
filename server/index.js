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


    app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });


});

