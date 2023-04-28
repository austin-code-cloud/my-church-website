const https = require("https");
const { initializeOptions } = require("../configs/payment");

const paymentForm = (req, res) => {
  res.render("donate-single", {
    HeadingOne: "E-transaction",
    subHeading: "Scroll down to begin",
    HeadingTwo: "Donate",
    message:
      " Welcome to our church donation page! We are a community of faith dedicated to serving others and spreading God's love to all people." +
      " Your donation will help us continue our important work and support our various ministries and outreach programs. As a church, we believe in the power of giving and the impact it can have on our world." +
      " Your donation will help us provide for those in need, support our local community, and spread the message of hope and love to all who seek it. ",
    footer:
      " Thank you for considering a donation to our church." +
      " We are grateful for your support and partnership as we seek to make a difference in the world together." +
      " May God bless you abundantly for your generosity.",
  });
};

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
          console.log("Payment initialised? Status: " + paystackData.status);
        } else {
          res.render("donate-single", {
            HeadingOne: "Donation Failed",
            subHeading: "Scroll down for more information",
            HeadingTwo: "Error",
            message:
              "The E-transaction process was terminated beacause of an " +
               paystackData.message +
              " Please fill the form properly and press the donate button again",
          });
          console.log(
            "Payment initialised? Status: " +
              paystackData.status +
              "; " +
              "Reason: " +
              paystackData.message
          );
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
