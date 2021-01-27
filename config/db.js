const mongoose = require("mongoose");

const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD; 
const dbName = process.env.DBNAME;  

const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mxwao.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

require("../models/Film");