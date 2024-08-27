const express = require('express');
const app = express();
const sum = require('./add');
const dbConnect = require('./config/db.js')
const carRoutes = require('./routes/cars.js');

const port = 3000;

app.use(express.json()); // --> It is middleware or body parser it helps us for taking a json data from the client from req.body request! 



app.post('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sum(a, b);
    res.json({
        msg: `The sum of a and b is: ${ans}`,
    })
});



app.use('/api/v1', carRoutes);

app.listen(port, () => {
    console.log("Server Connected");
})

dbConnect();



app.get('/', (req, res) => {
    res.send("Hello, I am creating a HTTP server and adding...")
});














// app.post('/api/car', (req,res) => {
//     const { name, brand } = req.body;
//     console.log(name);
//     console.log(brand);
//     res.json({
//         msg: "Car Info submitted successfully!",
//     })
// })
