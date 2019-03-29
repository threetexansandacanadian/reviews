const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { selectReviewsByID, selectReviewsByName, selectUserByName } = require('./database');

app.use(morgan('dev'));
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT;

app.get('/api/reviews', (req, res) => {
  let {productid : productID, productname: productName } = req.headers;
  if (!productID && !productName){
    console.log(productID, productName, req.headers);
    res.status(400);
    res.send();
  }
  let reviewPromise = (productID) ? selectReviewsByID(productID) : selectReviewsByName(productName);

  reviewPromise.then((data) => {
    console.log('sending: ', data);
    res.status(200);
    res.send(data);
  })
  .catch(err => {
    console.error("Error in GET /api/reviews", err);
    res.send();
  });
})

app.post('/api/reviews', (req, res) => {
  if(!req.body.review){
    res.statusCode(400);
    res.send();
  }
  selectUserByName(req.body.review.name)
  .then(data => {
    console.log('User Data: ', data);
    res.send(data);
  })
  .catch(err => {
    console.error('Error in reviews POST ',  err);
    res.end();
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));