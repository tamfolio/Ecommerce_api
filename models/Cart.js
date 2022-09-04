const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema);