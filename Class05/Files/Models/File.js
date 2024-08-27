const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        Type: String,
    }

})

// bzqy tyfu fghd isqx --> App Pasword

// post middleware 
fileSchema.post('save', async (doc) => {
    try{
        console.log("doument: ", doc);  // after sending a file or saving a file jo entry hmari db mei store hui hai usi ko hum doc bol rhe hai..

        // transporter 
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'harshbhola7404888499@gmail.com',
                pass: 'bzqytyfufghdisqx',
            }
        })

        // send mail
        let info = await transporter.sendMail({
            from: `Harsh`,
            to: 'harshbhola7404888499@gmail.com',
            subject: "Document uploaded on cloudinary!",
            html: '<h2>Hello World</h2>'
        })

        console.log("infor", info)

    } catch(error){
        res.status(500).send(`Error in post middlerware: ${error}`);
    }
})

const Files = mongoose.model('Files', fileSchema);

module.exports = Files;

