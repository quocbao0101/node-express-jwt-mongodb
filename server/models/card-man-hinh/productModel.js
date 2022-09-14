import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = Schema({
    name: {
        type: String,
    },
    category: {
        type: Object,
    },
    discount: {
        type: Number,
    },
    price: {
        type: Number,
    },
    image: {
        type: String
    },
    noti: {
        type: String
    },
    qty: {
        type: Number,
    },
    contact: {
        type: Boolean,
    },
    brand: {
        type: String,
    },
    memory: {
        type: Number,
    },
    fan: {
        type: Number,
    },
    color: {
        type: String
    }
},
{
    collection: 'products',
    versionKey: false
})

export const Product = mongoose.model("product", productSchema);