const express = require("express");
const router = express.Router();
const {payment, paymentForm} = require("../controllers/payment");

// GET request
router.get("/", paymentForm);

router.get("/paystack/callback", );

// POST request
router.post("/paystack", payment);


module.exports = router;
