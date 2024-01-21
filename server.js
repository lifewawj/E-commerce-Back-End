// NPM Packages and require routes
const express = require('express'); // Imports the express package to run a server
const routes = require('./routes'); // Import the routes from the routes

// import sequelize connection
const sequelize = require('./config/connection.js');

const app = express(); // stores the express() within a const var so its easier to call when paired with the express methods
const PORT = process.env.PORT || 3001; // specifies the PORT for the server to run on

// Middleware
app.use(express.json()); // converts the data to json
app.use(express.urlencoded({ extended: true })); // parse incoming request containing URL-encoded data and adds the resulting key-value pairs
app.use(routes); // server access anything from the routes folder

// Inits the server
// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});