const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://BlogApp:MOmDulwkJaycaZHB@cluster0.tqsa6qo.mongodb.net/fileUpload')
    .then(() => {
        console.log("DB connection Successful..")
    })
    .catch(() => {
        console.log("Failed to connect with Database!")
    })
}

module.exports = dbConnect;