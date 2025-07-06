const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/auth");
const issueRoutes = require("./routes/issues");
const profileRoutes = require("./routes/profileRoutes");

// DB Configs
require("./config/db");     // PostgreSQL
require("./config/mongo");  // MongoDB

// Middlewares
const errorHandler = require("./middlewares/errorHandler");
const { swaggerUi, specs } = require("./config/swagger");

const app = express();

// Security + Body Parsers
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static Files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/profile", profileRoutes);

// Error handler middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Unified server running at http://localhost:${PORT}`);
});
