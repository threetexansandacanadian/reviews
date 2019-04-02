/* eslint-disable func-names */
import axios from 'axios';

export const getReviewsByID = function (id) {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/api/reviews', { headers: { productid: id, 'Access-Control-Allow-Origin': 'http://localhost:3000' } })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getReviewsByName = function (name) {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/api/reviews', { headers: { productname: name } })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });;
};
