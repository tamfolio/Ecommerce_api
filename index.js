const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')

dotenv.config();

mongoose.connect(
        process.env.MONGO_URL
    )
    .then(() => console.log('DB Connection Succesful!'))
    .catch((err) => {
        console.log(err);
    })

app.use('/api/user', userRoute);


app.listen(5000, () => {
    console.log('back end server is running');
});