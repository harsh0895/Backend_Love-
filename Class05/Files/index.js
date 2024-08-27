const express = require('express');
const dbConnect = require('./config/db');
const cloudniaryConnect = require('./config/cloudniary');
const fileUpload = require('express-fileupload');
const Upload = require('./routes/Uploads')

const app = express();
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
})); // it is used to uplpoad file only on the server on media server like cloudinary!

app.use('/api/v1/upload', Upload); // route handler

dbConnect();
cloudniaryConnect();


app.listen(3000, () => {
    console.log("Server Connected!")
})



