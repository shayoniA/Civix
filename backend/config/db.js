const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/userModel');

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI); // or your Mongo URI

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);
  await User.create({
    name: 'Admin',
    email: process.env.EMAIL_ADMIN,
    password: hashedPassword,
    role: 'admin'
  });

  console.log('Admin created');
  mongoose.disconnect();
};

createAdmin();
