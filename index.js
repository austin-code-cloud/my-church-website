const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
require('dotenv').config()
const mongoose = require ('mongoose')
const homeRoutes = require("./routes/index");
const paymentApi = require ('./routes/payment')
const connectDB = require ('./configs/db')

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", homeRoutes);
app.use("/api/payment", paymentApi);


app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
