const User = require('../models/User');

const addUser = async (req, res) => {
  const { name, email, phone } = req.body;
  const image = req.file ? req.file.path : null;
  
  try {
    const user = new User({ name, email, phone, image });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaginatedUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  try {
    const users = await User.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addUser, getPaginatedUsers };
