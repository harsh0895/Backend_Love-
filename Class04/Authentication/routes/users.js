const express = require('express');
const loginUser = require('../Controllers/Login')
const signUpUser = require('../Controllers/Signup');
const {auth, isStudent, isAdmin} = require('../Middlewares/auth');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signUpUser);


// Protected route
router.get('/test', auth, (req, res) => {
    res.json({
        success: true,
        msg: "Welcome to the testing route..."
    })
})


router.get('/student', auth, isStudent, (req, res) => {
    res.json({
        success: true,
        msg: "Welcome to the student portal..."
    })
})

router.get('/admin', auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        msg: "Welcome to the Admin portal..."
    })
})

module.exports = router