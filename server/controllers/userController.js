import { User } from "../models/userModel.js";


const userController = {
    addUser: async(req,res) => {
        try {
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json({status: 'Success',data: saveUser});
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    getUser: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).json({status: 'Success',data: users});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getUserbyID: async(req, res) => {
        try {
            const { id } = req.params;
            User.findById(id, (err, user) => {
                if(err) { return res.status(404).json({status: 'error', message: 'Not found'}) }
                if(user) res.status(200).json({status: 'Success',data: user});
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async(req, res) => {
        try {
            const value = req.body;
            console.log(await User.deleteMany({ _id: {$in: value}}));
            const users = await User.find();
            res.status(200).json({status: 'Success',data: users});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default userController;
