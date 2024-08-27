const mongoose = require('mongoose');

// take car name and brand name from the client:-

function dbConnect() {
    mongoose.connect('mongodb+srv://harsh:MOmDulwkJaycaZHB@cluster0.tqsa6qo.mongodb.net/myCars')
    .then(() => {
        console.log("Connection Successful...")
    })
    .catch((error) => {
        console.log("Failed to connect: ",error)
        process.exit(1);
    })
}

module.exports = dbConnect;