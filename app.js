require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const dbURL = process.env.MONGO_URI;

// view engine setup
app.set("view engine", 'ejs');

app.use(cookieParser());

// in-built middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("login.ejs");
});

const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');

app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

app.listen(port, async () => {
  await mongoose
    .connect(dbURL)
    .then(() => console.log(`Database Connected...`))
    .catch((err) => console.log(err));
  console.log(`Servere start at http://localhost:${port}`);
});
