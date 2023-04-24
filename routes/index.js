const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/donate", (req, res) => {
  res.render("donate");
});

router.get("/ministry", (req, res) => {
  res.render("ministry");
});

router.get("/sermons", (req, res) => {
  res.render("sermons");
});

router.get("/events", (req, res) => {
  res.render("events");
});

router.get("/blog", (req, res) => {
  res.render("blog");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
