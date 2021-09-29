const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) =>{
    res.send('We are on Home');
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=>
    console.log('Connected to DB!')
);

// start listening to server
app.listen(3000); 


// js fetch 
// fetch('http://127.0.0.1:3000/posts').then(result =>{
//     return result.json(); }).then(data=>{console.log(data);}) 