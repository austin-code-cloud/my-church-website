const dotenv = require("dotenv");
dotenv.config();

// configuring Http header to be sent to payment gateway


const initializeOptions = {
  hostname: process.env.PAYSTACK_BASE_URL,
  port: 443,
  path: process.env.PAYSTACK_PATH_ONE,
  method: "POST",
  headers: {
    Authorization: process.env.PAYSTACK_KEY,
    "Content-Type": "application/json",
  },
};

const verifyOptions = {
  hostname: process.env.PAYSTACK_BASE_URL,
  port: 443,
  path: process.env.PAYSTACK_PATH_TWO ,
  method: 'GET',
  headers: {
    Authorization: process.env.PAYSTACK_KEY
  }
}


module.exports = { initializeOptions, verifyOptions };
