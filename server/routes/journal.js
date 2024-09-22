const express = require("express");
const router = express.Router();
const { addEntry, getEntries } = require("../controllers/journalController");
const auth = require("../middleware/auth");
const JournalEntry = require("../models/JournalEntry"); // Make sure this path is correct

router.post("/", auth, addEntry);
router.get("/", auth, getEntries);

// Delete a journal entry
router.delete("/:id", auth, async (req, res) => {
  try {
    let entry = await JournalEntry.findById(req.params.id);

    if (!entry) return res.status(404).json({ msg: "Entry not found" });

    // Make sure user owns the entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await JournalEntry.findByIdAndDelete(req.params.id);

    res.json({ msg: "Entry removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
