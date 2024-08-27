const express = require('express');
const dbConnect = require('./config/db');

const app = express();
const port = 3000;

app.use(express.json());

const blogRoutes = require('./routes/blogs.js');
app.use('/api/v1', blogRoutes)



app.listen(port, () => {
    console.log("server connected...")
})

// connecting with database...
dbConnect();

// home router
app.get('/', (req, res) => {
    res.json({
        msg: "I am creating a blog app using..."
    })
})