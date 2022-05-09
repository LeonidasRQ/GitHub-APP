const mongoose = require("mongoose");

const commitSchema = new mongoose.Schema({
  sha: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorEmail: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  commitMessage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Commit", commitSchema);
