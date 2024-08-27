const express = require('express');
const app = express();

app.use(express.json());

// taking port number from the .env file
require('dotenv').config();
const port = process.env.PORT || 4000;


// import routes for todo api
const todoRoutes = require('./routes/todos.js');


// mount the todo api's routes
app.use('/api/v1', todoRoutes);   // in this case we have to use "/api/v1/createTodo"


app.listen(port, () => {
    console.log("Server connected...")
})


// connect to database 
const dbConnect = require('./config/db');
dbConnect();


app.get('/', (req, res) => {
    res.send("I am creating a todo application this is my home page..")
});
