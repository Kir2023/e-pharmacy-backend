const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/user/user-info', async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Припускається, що токен передається як Bearer token

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decodedToken.id;
    const user = await User.findById(userId);

    res.json({
      name: user.name,
      email: user.email
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;