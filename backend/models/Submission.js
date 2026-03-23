const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref:'Task' },
  student: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  codeLink: String,
  score: { type: Number, default: 0 },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);