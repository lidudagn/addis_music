const express = require("express");
const port = 4000;
const musicRouter = require("./routes/MusicRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors()); // Enable CORS for all routes

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", musicRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});