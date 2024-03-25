const express = require("express");
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/", (req, res) => {
  res.render('landingpage');
});

app.get("/select", (req, res) => {
  res.render('choose');
});

app.get("/login", (req, res) => { 
  res.render('login');
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});