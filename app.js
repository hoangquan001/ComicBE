require("dotenv").config({ path: `./config/${process.env.NODE_ENV}.env` });
const express = require('express');
const app = express();
const connectDB=require('./DB/connectDB');

connectDB();
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '1mb'}));

module.exports = app
