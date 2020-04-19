const express = require("express");
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to nodejs");
})

app.get("/file", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./files/node-03-a-basic-setup.mp4")
  );
});



app.listen(port, () => {
console.log(`Server listening on port ${port}`)});
