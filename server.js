const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  selectReviewsByID,
  selectReviewsByName,
  selectUserByName,
  createReview,
  createUserAndReview,
} = require('./database');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

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
  let reviewObj = { review, stars, title, product_id } = req.body.review;
  selectUserByName(req.body.user.name)
  .then(userArr => {
    if(!userArr.length){
      let AvatarId = Math.floor(Math.random() * 19);
      let userObj = { avatar_id: AvatarId, name: req.body.user.name};
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
      reviewObj.user_id = userArr[0].id;
      createReview(reviewObj)
      .then((data) => {
        console.log('Created review: ', data);
        res.status(201);
        res.send();
      })
      .catch((err) => {
        console.error(err);
        res.send();
      })
    }
    res.send();
  })
  .catch(err => {
    console.error('Error in reviews POST ',  err);
    res.end();
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));