const express = require('express');
const book = require('../controllers/book');
const router = express.Router();

router.get('/', book.getBooks);

module.exports = router;
