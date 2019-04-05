// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
// var waitListData = require("../data/waitinglistData"); // this is going to be an array written in the friends.js file


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });   //API's endpoint


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    console.log(req.body) //connect to a variable user
   
  });

  //save req.body to variable, 1 for loop for going over each friend in my friends array, and inside that for loop grab the current friend and save that to a variable, once we have the friend grab loop over the currentFriend scores (currentFriend.scores), and inside of the currentFriend Scores Math.abs (difference between current index of friends score array and the user score arrays), outside of the second for loop but inside the first for loop, totalDifference  for loops and have it equal to math.abs which takes two parameters, subtracting the current friendscore from the user score, and an object with property of name and photo and it needs a propert of difference). Done with the for loops the total difference variable to the differene propert of that obkect, and if the bestfriend is less than total difference they are new best friend.
   
  // open modal and display best friend data in the model. 

 

  
};
