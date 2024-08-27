    const bcrypt = require('bcrypt');
const User = require('../Models/userModel');

const signUpUser = async (req, res) => {
    try {
        // get data
        const {name, email, password, role} = req.body;
        // check if user already exists
        const existingUser = await User.findOne({email});

        if( existingUser) {
            return res.status(400).json({
                success: false,
                msg: "User already Exists",
            })
        }

        // secure password
        let hashedPass;
        try {

            hashedPass = await bcrypt.hash(password, 10)
            console.log("Hashed password: ",hashedPass)

        } catch (error) {
            return res.status(500).json({
                success: false,
                msg: "Error in hashing password.."
            })
        }

        // after taking hashed password we will create a user data
        const user = await User.create({name, email, password: hashedPass, role})
        // console.log(user)
        res.status(200).json({
            success: true,
            userdata: user,
            msg: "User created successfully... "
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "User can't be registered pls try again later! "
        })
    }
}

module.exports = signUpUser