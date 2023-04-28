require("dotenv").config();

const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/index");
const paymentApi = require("./routes/payment");
const connectDB = require("./configs/db");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", homeRoutes);
app.use("/api/payment", paymentApi);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, (req, res) => {
  console.log("server is running on port 3000");
});
