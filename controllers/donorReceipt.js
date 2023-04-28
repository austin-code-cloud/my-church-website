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
        console.log(JSON.parse(data));
      });
    })
    .on("error", (error) => {
      console.error(error);
    });
};

module.exports = donorReceipt;
