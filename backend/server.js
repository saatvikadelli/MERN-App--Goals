const express = require('express'); // FRAMEWORK
// const colors = require('colors');
const dotenv = require('dotenv').config();
// const {errorHandler} = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db');
const port =  process.env.PORT || 5000;
const appRouter = require('./routes/goalRoutes.js');

connectDB();
const app = express();

// //addding middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals', appRouter);

// app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));