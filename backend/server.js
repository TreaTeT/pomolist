const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
// const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const db = require("./models");
// const Role = db.role;

// ROUTES

// const userRoutes = require("./routes/user.routes");
// const authRoutes = require("./routes/auth.routes");

// app.use(userRoutes);
// app.use(authRoutes);

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

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
    process.exit();
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
