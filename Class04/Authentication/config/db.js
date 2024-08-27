const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect('mongodb+srv://Auth:sftcOV4ZZ7cFfpDy@cluster0.tqsa6qo.mongodb.net/userauth')
    .then(() => {
        console.log("database connection successful...")
    })
    .catch((error) => {
        console.log("error while connecting with mongodb", error)
    })
}

module.exports = dbConnect