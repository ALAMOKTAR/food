const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Your User model
// const {verifyTokenAdmin} = require('../middlewares/verifyToken')
router.get('/',async (req, res) => {
  try {
    const users = await User.find(); // Fetches all users from MongoDB.
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
// Delete user by ID - admin only
router.delete('/users/:id', async (req, res) => {
  try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "User successfully deleted." });
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
});