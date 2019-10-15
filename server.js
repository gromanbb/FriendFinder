// ==============================================================================
// DEPENDENCIES
// Series of npm packages to give our server useful functionality
// ==============================================================================
const express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// Set up the basic properties for our express server
// ==============================================================================
// Tells node that we are creating an "express" server
const app = express();

// Set the port of our server
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTES
// Point our server to a series of "route" files.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// Start our server so that it can begin listening to client requests
// =============================================================================
app.listen(PORT);
