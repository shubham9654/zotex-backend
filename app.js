const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoutes = require("./routes/product.route");
const categoryRoutes = require("./routes/category.route");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "App is working properly...",
  });
});

app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);

const port = process.env.PORT || 8080;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`listening to port http://localhost:${port} ...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
