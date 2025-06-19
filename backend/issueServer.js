const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const Issue = require('./models/issues');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// File upload config
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected for issue reporting'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// POST: Report issue
app.post('/api/report', upload.single('file'), async (req, res) => {
  try {
    const { title, description, phone } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const issue = new Issue({ title, description, phone, fileUrl });
    await issue.save();

    res.status(201).json({ message: 'Issue submitted successfully' });
  } catch (err) {
    console.error('Error saving issue:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.ISSUE_PORT || 5001;
app.listen(PORT, () => console.log(`🟢 Issue server running at http://localhost:${PORT}`));
