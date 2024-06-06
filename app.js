const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`listening to port localhost:${port} ...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
