const express = require('express');
const cors = require('cors');
const initdb = require('./db/init');
const app = express();
const authRoutes=require('./routes/auth')
initdb();
app.use(cors({
  origin: ['http://localhost:3000', "https://civix-phi.vercel.app/login", "https://civix-phi.vercel.app/signup"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
