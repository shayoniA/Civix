const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const initdb = require('./db/init');
const authRoutes = require('./routes/auth');
const issuesRoutes = require('./routes/issues');
const errorHandler = require('./middlewares/errorHandler');
const { specs, swaggerUi } = require('./config/swagger');
require('dotenv').config();

const app = express();

// Initialize database
initdb();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', "https://civix-phi.vercel.app/login", "https://civix-phi.vercel.app/signup"],
  credentials: true,
}));

// Security middlewares
app.use(helmet());
// Custom XSS protection middleware
app.use((req, res, next) => {
  if (req.body) {
    for (let key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = xss(req.body[key]);
      }
    }
  }
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiting middleware 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes 
app.use('/api/auth', authRoutes);
app.use('/api/issues', issuesRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

