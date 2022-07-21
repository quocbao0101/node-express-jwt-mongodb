import mongoose from "mongoose";
const { Schema } = mongoose;
    const roleSchema = Schema(
        {
            name: {
                type: String,
            },
        },
        {
            collection: 'roles',
            versionKey: false
        },
    )
    const userSchema = Schema(
        {
            username: {
                type: String,
            },
            password: {
                type: String,
            },
            name: {
                type: String,
            },
            gender: {
                type: String,
            },
            phone: {
                type: Number,
            },
            role: {
                type: String,
            }
        },
        {
            collection: 'users',
            versionKey: false
        },
    )

export const User = mongoose.model("users", userSchema);
export const Role = mongoose.model("roles", roleSchema);