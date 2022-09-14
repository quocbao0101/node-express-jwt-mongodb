import mongoose from "mongoose";

const { Schema } = mongoose;

const categoryGraphic = Schema({
    brand: {
        type: Object,
    },
    gpu: {
        type: Object,
    },
    memory: {
        type: Object,
    },
    fan: {
        type: Object,
    },
    colors: {
        type: Object,
    }
},
{
    collection: 'categoryGraphic',
    versionKey: false
})

export const CategoryGraphic = mongoose.model("categoryGraphic", categoryGraphic);