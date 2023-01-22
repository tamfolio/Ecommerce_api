const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
const cors = require('cors');



dotenv.config();

const mongo = process.env.MONGO_URL;

mongoose.connect(
        "mongodb+srv://tamilore:ayobami20@ecommerce.dcz858w.mongodb.net/shoppla",
        {useNewUrlParser: true,
        useUnifiedTopology:true
    }
    )
    .then(() => console.log('DB Connection Succesful!'))
    .catch((err) => {
        console.log(err);
    })

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/carts', cartRoute);



app.listen(5000, () => {
    console.log('back end server is running');
});