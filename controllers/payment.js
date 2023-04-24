const https = require("https");
const {initializeOptions} = require("../configs/payment");


const paymentForm = (req, res) => {
  res.render("donate-single");
}

const payment = (req, res) => {

  // User donation detail (email and amount only)

  const params = JSON.stringify({
    email: req.body.email,
    amount: req.body.amount * 100,
  });

  const reqpaystack = https
    .request(initializeOptions, (respaystack) => {
      let data = "";

      respaystack.on("data", (chunk) => {
        data += chunk;
      });

      respaystack.on("end", () => {
        // Handling chunk data sent from paystack with "if statement"

        const paystackData = JSON.parse(data);

        if (paystackData.status == true) {
          res.redirect(paystackData.data.authorization_url);
        } else {
          res.render("donationFailed");
          console.log(paystackData)
        }
      });

    })
    .on("error", (error) => {
      console.error(error);
    });
  reqpaystack.write(params);
  reqpaystack.end();
};


module.exports = { paymentForm, payment };

