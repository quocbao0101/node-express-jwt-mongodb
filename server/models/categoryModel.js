import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = Schema({
    name: {
        type: String,
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
},
{
    collection: 'categories',
    versionKey: false
})

export const Category = mongoose.model("categories", categorySchema);