import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../middlewares/authen.js";


const authController = {
    register: async(req, res, next) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            User.findOne({ email: email }, (error, user) => 
            {
                if(user) {
                    res.status(400).json({
                        status: 404,
                        message: 'Email has been used'
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
            const email = req.body.email;
            const password = req.body.password;
            User.findOne({email: email}, (error, data) => {
                if(data) {
                    if(bcrypt.compareSync(password, data.password)) {
                        const {token, refreshToken} = generateAccessToken(email);
                        data.access_token = token;
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
