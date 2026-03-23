const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Admin creates task
router.post('/', authMiddleware, adminMiddleware, async (req,res)=>{
  const task = new Task({...req.body, createdBy:req.user._id});
  await task.save();
  res.json(task);
});

// Get all tasks
router.get('/', authMiddleware, async (req,res)=>{
  const tasks = await Task.find();
  res.json(tasks);
});

module.exports = router;