"use strict";

const ObjectId = require('mongodb').ObjectID;
// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    addlike: function(req, callback){
      console.log(req.body);
      db.collection("tweets").updateOne({"_id": ObjectId(req.body.id)},{$inc: {"likes": 1}}, (err, tweet) => {

        if (err) {
          return callback(err, null);
        }

        callback(null, tweet);
      });
  },
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {
    db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);
    });
  }

  };
};
