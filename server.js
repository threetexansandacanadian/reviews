const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { 
  selectReviewsByID,
  selectReviewsByName,
  selectUserByName,
  createReview,
  createUserAndReview,
} = require('./database');

app.use(morgan('dev'));
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT;

app.get('/api/reviews', (req, res) => {
  let {productid : productID, productname: productName } = req.headers;
  if (!productID && !productName){
    res.status(400);
    res.send();
  }
  let reviewPromise = (productID) ? selectReviewsByID(productID) : selectReviewsByName(productName);

  reviewPromise.then((data) => {

    res.status(200);
    res.send(data);
  })
  .catch(err => {
    console.error("Error in GET /api/reviews", err);
    res.send();
  });
})

app.post('/api/reviews', (req, res) => {
  if(!req.body.user){
    res.status(400);
    res.send();
  }
  let { review, stars, product_id } = req.body.review;
  selectUserByName(req.body.user.name)
  .then(userArr => {
    if(!userArr.length){
      let AvatarId = Math.floor(Math.random() * 19);
      let userObj = { avatar_id: AvatarId, name: req.body.user.name};
      let reviewObj = { review, stars, product_id } = req.body.review;
      createUserAndReview(reviewObj, userObj)
        .then((data) => {
          console.log('Created user: ', data);
          res.status(201);
          res.send();
        })
        .catch((err) => {
          console.error(err);
          res.send();
        })
    } else {
      console.log('User info', userArr);
      //TODO call a createReview func
    }
    res.send();
  })
  .catch(err => {
    console.error('Error in reviews POST ',  err);
    res.end();
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));