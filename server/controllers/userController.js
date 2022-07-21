import { User } from "../models/userModel.js";


const userController = {
    addUser: async(req,res) => {
        try {
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    getUser: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getUserbyID: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async(req, res) => {
        try {
            const value = req.body;
            console.log(await User.deleteMany({ _id: {$in: value}}));
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default userController;
