const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    try {
        
        // fetching data
        const {email, password} = req.body;

        // validation on email and password
        if( !email || !password){
            return res.status(400).json({
                success: false,
                msg: "Please fill email and password carefully."

            })
        }

        // check userexists 
        let checkUser = await User.findOne({email});
        if( !checkUser){
            return res.status(411).json({
                success: false,
                msg: "User is not registered."
            })
        }

        // if user is exists then verify password and generate token 
        const hashpassword = await bcrypt.compare(password, checkUser.password);
        
        // if password matched then creating payload for user body
        const payload = {
            name: checkUser.name,
            email: checkUser.email,
            id: checkUser._id,
            role: checkUser.role
        }

        if( hashpassword){
            // generate token
            let token = jwt.sign(payload, "harsh", {expiresIn: "2h"})
            checkUser = checkUser.toObject(); // converting in object 
            checkUser.token = token;
            checkUser.password = undefined;

            const options = {
                expiresIn: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                checkUser,
                msg: "user logged in successfully..."
            })
            
            // res.status(200).json({
            //     success: true,
            //     token,
            //     checkUser,
            //     msg: "user logged in successfully..."
            // })

        }
        else{
            // password do not match
            return res.status(403).json({
                success: false,
                msg: "Incorrect password while comparing..."
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "Login Failure",
        })
    }
}

module.exports = loginUser;