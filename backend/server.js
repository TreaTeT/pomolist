const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB successfully connected");
  })
  .catch((error) => {
    console.log(error);
  });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established succesfully");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
