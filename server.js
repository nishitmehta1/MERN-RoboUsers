const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 4000;
const userRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

let User = require('./userModel');

mongoose.connect(
  process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/users',
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongo DB Connection Est. Yay!!');
});

userRoutes.route('/').get((req, res) => {
  User.find((err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

userRoutes.route('/add').post((req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(user => {
      res.status(200).json({ user: 'user Added' });
    })
    .catch(err => {
      res.status(400).send('Adding Failed', err);
    });
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Started @ ${port}`);
});
