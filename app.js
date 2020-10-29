const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');
const errorController = require('./controllers/error');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', booksRoutes);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
  });
});

const databaseUser = process.env.MONGO_USER;
const databasePsw = process.env.MONGO_PASSWORD;
const databaseName = process.env.MONGO_DATABASE;

mongoose
  .connect(
    `mongodb+srv://${databaseUser}:${databasePsw}@cluster0.gubwk.azure.mongodb.net/${databaseName}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((error) => console.log(error));
