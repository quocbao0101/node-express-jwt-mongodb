import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../middlewares/authen.js";


const authController = {
    register: async(req, res, next) => {
        try {
            const username = req.body.username;
            const password = req.body.password;
            User.findOne({ username: username }, (error, user) => 
            {
                if(user) {
                    res.status(400).json({
                        status: 404,
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
                            if(err) { return res.status(404).json({err}) }
                            res.status(200).json({data: result});
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
            User.findOne({username: username}, (error, data) => {
                if(data) {
                    if(bcrypt.compareSync(password, data.password)) {
                        data.access_token = generateAccessToken(username);
                        res.status(200).json({
                            status: 'success',
                            data
                        });   
                    }
                    else {
                        res.status(404).json({                
                        status: 404,
                        message: 'Please check user and password'
                        })
                    }
                }
                else {
                    res.status(404).json({                
                    status: 404,
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
