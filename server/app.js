const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//routes
const user = require("./routes/userRoute");

app.use("/api/v1", user);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;
