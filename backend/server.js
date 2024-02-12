// Import required modules
import express from "express";

import cors from "cors";
// Create an instance of Express
const app = express();
// app.cors();
const port = process.env.PORT || 5000; // You can change the port number if needed

// Define a route that takes a name parameter from the URL
app.get("/:name", cors(), (req, res) => {
  const name = req.params.name;
  const answer = JSON.stringify(name);
  res.send(answer);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
