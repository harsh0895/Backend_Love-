const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    try {

        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        
        if( !token || token === undefined ) {
            return res.status(401).json({
                success: false,
                msg: "Token Missing..."
            })
        }

        // verify the token
        try {     
            const decode = jwt.verify(token, "harsh");
            console.log(decode)

            req.user = decode; //important

        } catch (error) {
            return res.status(401).json({
                success: false,
                msg: "token in invalid..."
            })
        }
        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "Something went wrong, while verifying the token..."
        })
    }
    
}


const isStudent = (req, res, next) => {
        try {
            
            if( req.user.role !== 'Student' ){
                return res.status(401).json({
                    success: false,
                    msg: "This is protected route for students but your role is admin..."
                })
            }
            next();

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                msg: "User role not matching..."
            })
        }
}

const isAdmin = (req, res, next) => {
    try {
            
        if( req.user.role !== 'Admin' ){
            return res.status(401).json({
                success: false,
                msg: "This is protected route for Admin but your role is student..."
            })
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "User role not matching..."
        })
    }

}

module.exports = {
    auth: auth,
    isStudent: isStudent,
    isAdmin: isAdmin
}