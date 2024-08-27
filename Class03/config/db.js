const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect('mongodb+srv://BlogApp:MOmDulwkJaycaZHB@cluster0.tqsa6qo.mongodb.net/blogApp')
    .then(() => {
        console.log("db connection successful...")
    })
    .catch((error) => {
        console.log("db connection failed...")
        console.log(error);
        process.exit(1);
    })

}

module.exports = dbConnect