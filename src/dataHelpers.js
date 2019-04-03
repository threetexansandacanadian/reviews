/* eslint-disable func-names */
import axios from 'axios';

const host = 'http://ec2-54-224-251-247.compute-1.amazonaws.com';
// const host = 'http://localhost';
export const getReviewsByID = function (id) {
  return new Promise((resolve, reject) => {
    axios.get(`${host}:3000/api/reviews`, { headers: { productid: id, 'Access-Control-Allow-Origin': `${host}:3000/api/reviews` } })
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
    axios.get(`${host}:3000/api/reviews`, { headers: { productname: name, 'Access-Control-Allow-Origin': host } })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const postReview = function (review) {
  return new Promise((resolve, reject) => {
    axios.post(`${host}:3000/api/reviews`, review)
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
