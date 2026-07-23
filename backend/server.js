const express = require("express");
const mongoose = require("mongoose");
const databaseConnection = require('./databaseConnection');
const bookRouter = require('./routes/book.routes');
const userRouter = require("./routes/user.routes");
const authMiddleWare = require('./middleware/auth.middleware')
const cors = require('cors');
require('dotenv').config();


const app = express();

//middleware
app.use(express.json());
app.use(cors());


//Database Coonection
databaseConnection();

app.use('/book',authMiddleWare,bookRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);

});