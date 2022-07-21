import { User } from "../models/userModel.js";
import bcrypt, { hash } from 'bcrypt';


const authController = {
    register: async(req, res, next) => {
        try {
            const username = req.body.username;
            const password = req.body.password;
            User.findOne({ username: username }, (error, user) => 
            {
                if(user) {
                    res.status(400).json({
                        status: 400,
                        message: 'User has been used'
                    });
                }
                else {
                    bcrypt.hash(password, 10, (err, hash) => {
                        if(err) { return next(err);}
                        const user = new User(req.body);
                        user.role = 'Admin';
                        user.password = hash;
                        user.save((err, result) => {
                            if(err) { return res.status(400).json({err}) }
                            res.status(200).json({user: result});
                        })
                    });
                }
            })
        } catch (error) {
            res.status(500).json(error);
        }
    },
    login: async(req,res) => {
        try {
            const username = req.body.username;
            const password = req.body.password;
            User.findOne({username: username, password: password}, (error, user) => {
                if(user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(400).json({                
                    status: 400,
                    message: 'Please check user and password'
                    })
                }
            })
        } catch (error) {
            res.status(500).json(error);
        }
    },
}


export default authController;
