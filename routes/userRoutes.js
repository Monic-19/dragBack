const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addUser, getPaginatedUsers } = require('../controller/userController');


const upload = multer({ dest: 'uploads/' });

router.post('/api/users', upload.single('image'), addUser);
router.get('/api/users', getPaginatedUsers);

module.exports = router;
