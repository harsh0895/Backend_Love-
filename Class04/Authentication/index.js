const express = require('express');
const dbConnect = require('./config/db');
const userRoutes = require('./routes/users');
const cookieParser = require('cookie-parser');
const app = express();

const port = 3000;

app.use(cookieParser()); // adding cookie-parser middleware 
app.use(express.json());

app.use('/api/v1', userRoutes);


app.get('/', (req, res) => {
    res.send("I am creating a user authentication app...")
})

app.listen(port, () => {
    console.log('connection successful...')
})

dbConnect();