import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = Schema({
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
    collection: 'menus',
    versionKey: false
})

export const Menu = mongoose.model("menu", menuSchema);