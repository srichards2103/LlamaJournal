const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const journalRoutes = require("./routes/journal");
const llamaRoutes = require("./routes/llamaRoutes");

// Connect Database
connectDB();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3001", // or whatever port your React app is running on
    credentials: true,
  })
);

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/journal", journalRoutes);
app.use("/api/llama", llamaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
