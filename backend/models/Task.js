const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  deadline: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

module.exports = mongoose.model('Task', taskSchema);