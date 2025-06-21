const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { signup, login } = require('../controllers/auth');
const validate = require('../middlewares/validate');

router.post('/signup',
    [
        body('username').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),

    ],
    validate,
    signup

);

router.post('/login',

    [
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),  
    ],
    validate,
    login
);

module.exports=router;
