const express = require('express');
const booksRoutes = require('./routes/books');

const app = express();

app.use(express.json());

app.use('/', booksRoutes);
