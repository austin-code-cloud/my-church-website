
const mongoose = require("mongoose");

// Connect MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL)
  
      console.log('MongoDB connected!!')
    } catch (err) {
      console.log('Failed to connect to MongoDB', err)
    }
  }

module.exports = connectDB
