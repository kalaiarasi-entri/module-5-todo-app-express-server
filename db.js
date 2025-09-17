const mongoose = require('mongoose');

async function connectDB() {
  try {
    // Default: local MongoDB
    //const uri = 'mongodb://localhost:27017/mern_todo_db';

    // If you prefer MongoDB Atlas, replace above with your Atlas connection string, e.g.:
    // const uri = 'mongodb+srv://<user>:<pass>@cluster0.mongodb.net/your_db?retryWrites=true&w=majority';

   
        await mongoose.connect("mongodb+srv://kalaiarasi_entri_db:kalai123@entri.olc8y9b.mongodb.net/?retryWrites=true&w=majority&appName=entri", {
            ssl: true, // ssl - Secure Socket Layer
            tlsAllowInvalidCertificates: false // Transport layer
        });

    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err);
    process.exit(1);
  }
}

module.exports = connectDB;
