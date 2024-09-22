const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const JournalEntry = require("../models/JournalEntry");
const { generateResponse } = require("../services/ollamaService");

router.post("/interact", auth, async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ msg: "Invalid messages format" });
    }

    const entries = await JournalEntry.find({ user: req.user.id });
    const journalContext = entries
      .map((entry) => `${entry.title}: ${entry.content}`)
      .join("\n");

    const response = await generateResponse(messages, journalContext);
    res.json({ response });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
