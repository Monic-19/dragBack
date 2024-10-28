const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addUser, getPaginatedUsers } = require('../controller/userController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
      cb(null, uniqueSuffix);
    }
  });
const upload = multer({storage});

router.post('/api/users', upload.single('image'), addUser);
router.get('/api/users', getPaginatedUsers);

module.exports = router;
