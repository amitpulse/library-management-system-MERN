// backend gateway
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


// importing routers as require 
const bookRoutes = require('./routes/bookroute')

// importing user routes
const userRoutes = require('./routes/userRoute')
const userInfoRoutes = require('./routes/userInfoRoutes')

const app = express();

const port = process.env.PORT;


//middleware
app.use(express.json());

app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// imported routes are used in middleware
// this middleware uses all route handlers available on the app
// this middleware will fire at only at specific request
// this is the endpoint
app.use('/api/books', bookRoutes) 
app.use('/api/user', userRoutes)
app.use('/api/userinfo', userInfoRoutes)


// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listener
    app.listen(port, () => {
      console.log(`Port ${port} is active.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });