// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     // const conn = await mongoose.connect('mongodb+srv://lidu:lidu1234@cluster0.h4bxhba.mongodb.net/?retryWrites=true&w=majority');
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Mongo DB connected : ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://lidu:lidu1234@cluster0.h4bxhba.mongodb.net/mydatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
