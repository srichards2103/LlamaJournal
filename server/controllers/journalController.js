const JournalEntry = require("../models/JournalEntry");

exports.addEntry = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newEntry = new JournalEntry({
      title,
      content,
      user: req.user.id,
    });

    const entry = await newEntry.save();

    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
