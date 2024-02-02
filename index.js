const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./dbconnection");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
// Set the view engine to "ejs"
app.set("view engine", "ejs");

// Use the router from "./router" for handling routes
app.use("", require("./router"));

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Connect to the database
connectDB();

// Start the server on port 4000
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle potential errors during server startup
app.on("error", (error) => {
  console.error(`Server startup error: ${error.message}`);
});
