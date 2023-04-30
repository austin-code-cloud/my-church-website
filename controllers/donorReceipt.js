const https = require("https");
const { verifyOptions } = require("../configs/payment");

const donorReceipt = (req, res) => {
  https
    .request(verifyOptions, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const paystackData = JSON.parse(data);

        if (paystackData.status == true) {
          res.json({
            "status": "Donation Received",
            "message": "Thank you for giving. God bless you."
          })
          console.log("Payment initialised? Status: " + paystackData.status);
        }
        console.log(paystackData);
      });
    })
    .on("error", (error) => {
      console.error(error);
    });
};

module.exports = donorReceipt;
