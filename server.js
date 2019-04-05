// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

// app.use( 
//   function(req,res,next) {
//     if (req.method === 'GET' ) {
//       next()
//     } else {
//       var err = new Error();
//       next(err)
//     }
// },function(res,req,next){  console.log("2"); next();
// },function(res,req,next){  console.log("3"); next();
// },function(res,req,next){  console.log("4"); next();
// })

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
