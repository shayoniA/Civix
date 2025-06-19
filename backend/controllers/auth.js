const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const {createUser,findByEmail}= require('../models/userModel');
const{generateToken} =require('../utils/token');


exports.signup= async(req,res,next)=>{
    const {username,email,password} = req.body;
    const role = email.endsWith(process.env.DOMAIN_NAME) ? 'admin' :'user';

    try{
        const hashedPassword= await bcrypt.hash(password,10);
        await createUser(username, email,hashedPassword,role);
        res.status(201).send('User Registred ');

    }

    catch(err){
        next(err);
        res.send.json(err.message);
        console.log(err.message);
    }

};

exports.login=async(req,res,next)=>{
    const{email,password}=req.body;
    try{
        const user= await findByEmail(email);
        if(!user){
            return res.status(401).send('Invalid email or user not found');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) return res.status(401).json({message:'Invalid password'});
        const token = generateToken(user.email, user.role);
        res.status(200).json({token});
    }

    catch(err){
        next(err);
        res.send.json(err.message);
        console.log(err.message);

    }
};

