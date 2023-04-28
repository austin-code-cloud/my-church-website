const express = require("express");
const router = express.Router();
const {payment, paymentForm} = require("../controllers/payment");
const donorReceipt = require ('../controllers/donorReceipt')

// GET request
router.get("/", paymentForm);
router.get("/paystack/callback", donorReceipt);

// POST request
router.post("/paystack", payment);

module.exports = router;
