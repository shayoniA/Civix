
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss');
const path = require("path");
const multer = require('multer');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const initdb = require('./db/init');
const authRoutes = require('./routes/auth');
const issuesRoutes = require('./routes/issues');
const profileRoutes = require("./routes/profileRoutes");
const errorHandler = require('./middlewares/errorHandler');
const Issue = require('./models/issues');
const { swaggerUi, specs } = require('./config/swagger');
require('dotenv').config();

// DB Configs
require("./config/db");     // PostgreSQL
require("./config/mongo");  // MongoDB

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
// Static Files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Error handling middleware
app.use(errorHandler);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/issues", issuesRoutes);
app.use("/api/profile", profileRoutes);

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

app.post('/api/report', upload.single('file'), async (req, res) => {
  try {
    const { phone, email, title, description, notifyByEmail } = req.body;

    const issue = new Issue({
      phone,
      email,
      title,
      description,
      notifyByEmail,
      filePath: req.file ? req.file.path : null
    });

    await issue.save();

    res.status(201).json({ message: 'Issue submitted successfully!' });
  } catch (error) {
    console.error('Error saving issue:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Error handler middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Unified server running at http://localhost:${PORT}`);
});
