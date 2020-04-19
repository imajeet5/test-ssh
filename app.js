const express = require("express");
const path = require('path');

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to nodejs");
})

app.get("/file", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./files/node-03-a-basic-setup.mp4")
  );
});

const port = 3000;

app.listen(port, () => {
console.log(`Server listening on port ${port}`)});
