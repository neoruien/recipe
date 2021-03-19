// var express = require('express');
// var morgan = require('morgan');
// var mongoose = require('mongoose');
// var router = express.Router();

// // Connect to MongoDB
// mongoose.connect(
//   'mongodb://localhost/recipes',
//   {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
// )

// const app = express();

// // Logger that outputs all requests into the console
// app.use(morgan('combined'));
// // Use v1 as prefix for all API endpoints
// app.use('/v1', router);

// const server = app.listen(3000, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

// Connect to MongoDB
mongoose.connect(
  'mongodb://localhost/recipes',
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
)

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});