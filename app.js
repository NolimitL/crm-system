const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const DB = require('./config/keys').DB;
// initialization an app
const app = express();
// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// connecting to Database
mongoose.connect(DB.MONGO_URL)
   .then(() => console.log('[Database is successfully connected]'))
   .catch(err => console.log('[ERROR from DB]: ', err));
// routers
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
// exports app
module.exports = app;

// QVjVjXSpg35dBHYL
// main-user
// mongodb+srv://main-user:<password>@cluster0.en0ed.mongodb.net/<dbname>?retryWrites=true&w=majority