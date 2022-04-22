const express = require("express");
const socketServer = require("./socketServer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("public"));

const httpServer = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Handle webSocket connections
socketServer.listen(httpServer);
