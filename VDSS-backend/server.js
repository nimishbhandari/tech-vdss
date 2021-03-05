const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');

require('dotenv').config({
  path:'./config/config.env'
});

const connectDB = require('./config/db');
connectDB();

const contactRouter = require('./routes/contact.router');
const loginRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: process.env.CLIENT_URL
}))

app.use(express.static(path.join(__dirname, "build")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.use('/contact', contactRouter);
app.use('/user', loginRouter);

app.listen(9000);
