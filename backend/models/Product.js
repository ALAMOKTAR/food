const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user" },

    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 8,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    review: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    commander:{
        type: Boolean,
        default: false,
    }

})

module.exports = mongoose.model("Product", ProductSchema)