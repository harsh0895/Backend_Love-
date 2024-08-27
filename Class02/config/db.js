const mongoose = require('mongoose');

// WITH the help of this dotenv package we can take all the functionality to the .env file..
require('dotenv').config();

// const databaseURL = process.env.DATABASE_URL;

const dbConnect = () => {

    mongoose.connect('mongodb+srv://harsh:MOmDulwkJaycaZHB@cluster0.tqsa6qo.mongodb.net/myTodos')
    .then(() => {
        console.log("Connection successful..")
    })
    .catch((error) => {
        console.log("failed to connect..", error)
        process.exit(1);
    })

}

module.exports = dbConnect;


