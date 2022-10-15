// MongoDB connection
const mongoose = require("mongoose");

// To laod environment variables
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Get the app.js file to the server
const app = require("./app");

// get the port from dotenv
const port = process.env.port;

// connect to the database
//const DB = process.env.DB_STRING.replace('<PASSWORD>', process.env.DB_PASSWORD);
const DB = process.env.DB_STRING;
// this .connect method generates a coneection object
// Which is used in the callback function .then
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("DB connection set");
  });

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});

// Handling unhandled rejections
process.on("unhandledRejection", (err) => {
  // eslint-disable-next-line no-console
  console.log(err.name, err.message);
  // As the node application cannot run anymore due to unhandled exception,
  // exit the application. exit() method shuts down all pending requests.
  // Therefore it is not a good idea to use this in here
  // process.exit(1);

  // This is much better
  server.close(() => {
    console.log("SERVER CLOSED");
    process.exit(1);
  });
});

 module.exports = server;