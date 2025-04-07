
const express = require('express');
const { registerUser, loginUser, protect } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/protected', protect, (req, res) => {
  res.json({ message: 'You are authorized to access this route' });
});

module.exports = router;
