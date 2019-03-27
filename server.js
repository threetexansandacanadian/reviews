const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const { selectAllReviews } = require('./database');

app.use(morgan('dev'));
dotenv.config();

const port = process.env.PORT;

app.get('/api/reviews', (req, res) => {
  const test = selectAllReviews().then((data) => {
    res.send(data);
  })
  .catch(err => {
    res.send(err);
  })
  console.log(test);
})
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Listening on port ${port}`));