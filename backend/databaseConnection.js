const mongoose = require("mongoose");
require("dotenv").config();



const databaseConnection = async()=>{

    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Database Connected Successfully');
        
    }).catch((error)=>{
        console.log({message:error.message});
    })

};

module.exports = databaseConnection;